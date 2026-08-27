// PLACEHOLDER FLEET: Replace every model and photo with R&G's approved fleet inventory before launch.
export const fleetCategories = [
  {
    name: 'Dozers',
    code: 'DZ',
    description: 'High-production push, rough grade and finish work across roadways and development sites.',
    items: [
      { model: 'Cat D6 Dozer', use: 'GPS-guided fine grading, embankment shaping and site balance work.' },
      { model: 'John Deere 850K Dozer', use: 'Heavy push, slope work and roadway subgrade production.' },
    ],
  },
  {
    name: 'Scrapers',
    code: 'SC',
    description: 'Efficient cut, load, haul and spread production for large-scale earthmoving.',
    items: [
      { model: 'Cat 627K Scraper', use: 'High-volume excavation and embankment placement over medium hauls.' },
      { model: 'Cat 615C Scraper', use: 'Flexible mass grading and site-balancing production.' },
    ],
  },
  {
    name: 'Motor Graders',
    code: 'MG',
    description: 'Precision shaping for road base, shoulders, slopes and final surfaces.',
    items: [
      { model: 'John Deere 872G Motor Grader', use: 'Finish grading and GPS-controlled roadway profile work.' },
      { model: 'Cat 140 Motor Grader', use: 'Aggregate base shaping, shoulder grading and maintenance.' },
    ],
  },
  {
    name: 'Excavators',
    code: 'EX',
    description: 'Deep utilities, drainage structures, demolition and controlled excavation.',
    items: [
      { model: 'Cat 336 Excavator', use: 'Mass excavation, structures and heavy utility installation.' },
      { model: 'John Deere 210G Excavator', use: 'Storm sewer, water main and detailed site excavation.' },
    ],
  },
  {
    name: 'Trucks',
    code: 'TR',
    description: 'Reliable movement of aggregate, excavation and construction materials.',
    items: [
      { model: 'Mack Granite Dump Truck', use: 'Road material delivery and excavation hauling.' },
      { model: 'Cat 725 Articulated Truck', use: 'Off-road hauling in soft ground and active earthwork zones.' },
    ],
  },
  {
    name: 'Compactors',
    code: 'CP',
    description: 'Density and stability for embankments, aggregate bases and confined utility work.',
    items: [
      { model: 'Cat CS56B Soil Compactor', use: 'Large-area soil and aggregate compaction.' },
      { model: 'Bomag Trench Compactor', use: 'Confined backfill around utilities and structures.' },
    ],
  },
];
