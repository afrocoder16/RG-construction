import { chromium } from 'playwright-core';

const executablePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const base = 'http://127.0.0.1:4173';
const paths = ['/', '/services/', '/equipment/', '/projects/', '/about/', '/careers/', '/contact/', '/employment-application/'];
const browser = await chromium.launch({ executablePath, headless: true });
const errors = [];

for (const path of paths) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`${path} console: ${message.text()}`);
  });
  page.on('pageerror', (error) => errors.push(`${path} page: ${error.message}`));
  const response = await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
  if (!response?.ok()) errors.push(`${path} status: ${response?.status()}`);
  const imageSources = await page.locator('img').evaluateAll((images) => images.map((image) => image.getAttribute('src')).filter(Boolean));
  for (const source of [...new Set(imageSources)]) {
    const imageResponse = await page.request.get(new URL(source, base).href);
    if (!imageResponse.ok()) errors.push(`${path} broken image: ${source} (${imageResponse.status()})`);
  }
  await page.close();
}

for (const viewport of [{ name: 'desktop', width: 1440, height: 1200 }, { name: 'mobile', width: 390, height: 844 }]) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const dimensions = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth }));
  if (dimensions.scrollWidth > dimensions.clientWidth) errors.push(`${viewport.name} horizontal overflow: ${dimensions.scrollWidth}px > ${dimensions.clientWidth}px`);
  await page.screenshot({ path: `qa-${viewport.name}.png`, fullPage: false });
  await page.close();
}

const equipmentPreview = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await equipmentPreview.goto(`${base}/equipment/`, { waitUntil: 'networkidle' });
await equipmentPreview.evaluate(() => document.fonts.ready);
await equipmentPreview.screenshot({ path: 'qa-equipment.png', fullPage: false });
await equipmentPreview.close();

const applicationPreview = await browser.newPage({ viewport: { width: 390, height: 844 } });
await applicationPreview.goto(`${base}/careers/#application`, { waitUntil: 'networkidle' });
await applicationPreview.locator('.career-form').scrollIntoViewIfNeeded();
await applicationPreview.evaluate(() => document.fonts.ready);
await applicationPreview.waitForTimeout(900);
await applicationPreview.screenshot({ path: 'qa-application.png', fullPage: false });
await applicationPreview.close();

const interactionPage = await browser.newPage({ viewport: { width: 390, height: 844 } });
await interactionPage.goto(base, { waitUntil: 'networkidle' });
await interactionPage.locator('[data-menu-toggle]').click();
if (await interactionPage.locator('[data-menu-toggle]').getAttribute('aria-expanded') !== 'true') errors.push('Mobile navigation did not open.');
await interactionPage.goto(`${base}/projects/`, { waitUntil: 'networkidle' });
await interactionPage.locator('[data-filter="Airport Construction"]').click();
if (await interactionPage.locator('[data-project]:not(.is-hidden)').count() !== 1) errors.push('Project filtering did not return the expected result.');
await interactionPage.goto(`${base}/contact/?service=airport-construction#quote`, { waitUntil: 'networkidle' });
if (await interactionPage.locator('select[name="service"]').inputValue() !== 'Airport Construction') errors.push('Contact service preselection did not work.');
await interactionPage.close();

await browser.close();
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`QA passed: ${paths.length} routes, desktop/mobile layouts, images, navigation, filters and form preselection.`);
}
