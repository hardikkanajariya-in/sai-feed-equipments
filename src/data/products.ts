export type ProductSection = {
  title: string;
  items: string[];
};

export type ProductSpecTable = {
  title?: string;
  columns: string[];
  rows: string[][];
};

export type Product = {
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  summary: string;
  features: string[];
  applications?: string[];
  specColumns?: string[];
  specTables?: ProductSpecTable[];
  sections?: ProductSection[];
  related?: string[];
};

export const products: Product[] = [
  {
    title: "Pellet Mill",
    slug: "pellet-mill",
    image: "/images/products/pellet-mill.png",
    imageAlt: "Pellet Mill machinery by Sai Feed Equipment",
    summary:
      "Pellet mill machinery with robust engineered steel housing, rotor assembly, stainless steel door and spout, centralised lubrication and die-roll gap adjustment.",
    features: [
      "Robustly engineered steel housing in welded construction for vibration-less operation.",
      "Rotor assembly comprising of main drive pulley and die holder.",
      "Stainless steel door and spout for long life.",
      "Die speed can be adapted to suit the particular properties of the material to be pelletized.",
      "Robust knife cutter assembly with scale type easy cutting and precise depth adjustment.",
      "Centralised lubrication for nonstop performance.",
      "Space-saving compact conditioner options with adjustable paddles for reliable steam mixing and retention time.",
      "Pellet mill for wood / biomass can be equipped with forced feeder for difficult-to-flow materials.",
      "Gear type roll assembly for precise die-roll gap adjustment.",
      "H-CHROME and H-CARB die for high finish gelatinized pellets.",
    ],
    applications: [
      "Municipal waste / organic waste",
      "Poultry manure",
      "Rice bran",
      "Alfa-Alfa",
      "Red chilli",
      "Bio-fuel",
      "Research institutions conducting experiments of life-saving drugs on animals",
    ],
    specColumns: ["Model", "Die ID (mm)", "Track width (mm)", "Tip Speed (m/sec)", "Motor Power (kW)", "Die Area (cm2)"],
    specTables: [
      {
        columns: ["Model", "Die ID (mm)", "Track width (mm)", "Tip Speed (m/sec)", "Motor Power (kW)", "Die Area (cm2)"],
        rows: [
          ["Replica 20-06", "205", "60", "3.5-7.5", "5.0-9.0", "380"],
          ["INOVO 42-12", "420", "120", "4.0-7.0", "75-90", "1580"],
          ["INOVO 42-14", "420", "142", "4.0-7.0", "90-110", "1850"],
          ["INOVO 52-14", "520", "142", "4.0-7.0", "95-135", "2350"],
          ["INOVO 52-18", "520", "178", "4.0-7.0", "110-150", "2940"],
          ["INOVO 60-14", "600", "142", "4.0-7.0", "135-160", "2680"],
          ["INOVO 60-18", "600", "178", "4.0-7.0", "135-160", "3360"],
          ["INOVO 63-20", "630", "200", "4.0-7.0", "160-200", "3600"],
          ["INOVO 66-22", "660", "220", "4.0-6.5", "160-200", "4600"],
          ["INOVO 66-28", "660", "280", "4.0-6.5", "200-250", "5800"],
        ],
      },
    ],
    related: ["hammer-mill", "cooler", "crumbler", "dies-and-rolls"],
  },
  {
    title: "Hammer Mill",
    slug: "hammer-mill",
    image: "/images/products/hammer-mill.png",
    imageAlt: "Hammer Mill machinery by Sai Feed Equipment",
    summary:
      "Hammer mill grinding equipment for feed plants with 1500/3000 rpm grinders, rotary feeder, magnetic separator, balanced rotor and integrated aspiration support.",
    features: [
      "1500/3000 rpm grinders in various screen areas with low/medium hammer-to-screen clearances for efficient grinding.",
      "Rotary feeder with magnetic separator and air control flap for equal distribution of grindables.",
      "Grinding chamber is of water droplet shape for consistent evenly sized particles.",
      "Window for fast removal of beater holding rod and quick acting clamps for fast changing of screens.",
      "Rotor is dynamically balanced, resulting in low noise and trouble-free running.",
      "Low temperature rise to preserve ingredient nutrients.",
      "Counter hammers avoid bottom material build-up.",
      "Fully integrated aspiration bag filters with plenum chambers are used for efficient grinding, reduced temperature rise, and cleaned screen holes.",
      "Air filtration keeps the entire feed plant clean and hygienic.",
    ],
    specColumns: ["SFE Model", "Motor Power (kW)", "Surface area of screen (m2)", "No. of Beaters", "Capacity MT/Hr"],
    specTables: [
      {
        columns: ["SFE Model", "Motor Power (kW)", "Surface area of screen (m2)", "No. of Beaters", "Capacity MT/Hr"],
        rows: [
          ["40", "22-25", "0.40", "24-48", "2-3.5"],
          ["70", "37-45", "0.70", "24-60", "5-6"],
          ["105", "55-60", "1.05", "36-72", "7-8"],
          ["125", "70-80", "1.25", "60-84", "9-10"],
          ["150", "80-110", "1.70", "84-144", "11-15"],
          ["170", "90-135", "2.00", "108-144", "14-17"],
        ],
      },
    ],
    related: ["pellet-mill", "ribbon-mixer", "paddle-mixer"],
  },
  {
    title: "Cooler",
    slug: "cooler",
    image: "/images/products/cooler.png",
    imageAlt: "Cooler machinery by Sai Feed Equipment",
    summary:
      "Counter-flow cooling equipment with stainless steel rotary air-lock feeder, grid discharge system and compact stainless steel design.",
    features: [
      "Stainless steel rotary air-lock feeder for uniform feeding / distribution of pellets in cooling chamber.",
      "Air versus pellets counter-flow enables pellets to be cooled gradually, minimizing risk of cooling shock.",
      "Sturdy grid discharge system ensures minimization of fine occurrences and high hygienic standards.",
      "Automatic gate discharge closure in the event of power failure to avoid spillage of pellet feed.",
      "Adjustable hi-low level proximity sensor for required fill level of pellets in cooling chamber.",
      "Easy access doors for maintenance and cleaning of cooling chamber.",
      "Full stainless steel compact design with less floor space occupied.",
    ],
    specColumns: ["Model", "Capacity (MT/Hr)", "Motor Power (kW)", "Cooler + Vane Feeder"],
    specTables: [
      {
        columns: ["Model", "12x12", "12x14", "15x17", "18x18", "18x20", "20x22", "20x25"],
        rows: [
          ["Capacity (MT/Hr.)", "2-5", "3-5", "5-6", "7-8", "9-11", "12-15", "15-20"],
          ["Motor Power (kW)", "1.1 + 0.55", "1.5 + 0.55", "1.5 + 0.55", "2.2 + 0.75", "2.2 + 1.2", "2.2 + 1.5", "3.0 + 2.0"],
          ["Cooler + Vane Feeder", "", "", "", "", "", "", ""],
        ],
      },
    ],
    related: ["pellet-mill", "crumbler", "vibro-sieve"],
  },
  {
    title: "Ribbon Mixer",
    slug: "ribbon-mixer",
    image: "/images/products/ribbon-mixer.png",
    imageAlt: "Ribbon Mixer machinery by Sai Feed Equipment",
    summary:
      "Double ribbon mixer for gentle dry mixing with low liquid addition, rotor-mixer body gap adjustment and pneumatically operated bomb door discharge.",
    features: [
      "Double ribbon mixer is used for gentle dry mixing with low liquid addition for Cv < 5.",
      "Mixing chamber design with optimal rotor helps mix light and heavy particles evenly.",
      "Sturdy rotor bearing housing with rotor-mixer body gap adjustment helps avoid dead corners in the mixer body.",
      "Return air chute furnished for internal and external pressure balancing.",
      "Pneumatically operated bomb door gate for complete discharge.",
      "Large doors enable easy cleanout and inspection.",
      "Multiple spraying nozzles section is optional.",
    ],
    sections: [
      {
        title: "Liquid addition",
        items: [
          "Liquid like oil/fat can be added in the mixer by mass flow controller.",
          "Loss-in-weight PLC controlled oil dosing system can add exact quantity.",
        ],
      },
    ],
    specColumns: ["Model", "Vol. (Ltr.)", "Motor (kW)", "No. of Rotor", "Mixing Time"],
    specTables: [
      {
        columns: ["Model", "Vol. (Ltr.)", "Motor (kW)", "No. of Rotor", "Mixing Time"],
        rows: [
          ["200-1", "200", "2.2-3.75", "1", "4-6 min."],
          ["500-1", "500", "5.5-7.5", "1", "4-6 min."],
          ["800-1", "800", "7.5-11", "1", "4-6 min."],
          ["1800-1", "1800", "11-18.5", "1", "4-6 min."],
          ["2500-1", "2500", "15-22", "1", "4-6 min."],
          ["3400-1", "3400", "22-30", "1", "4-6 min."],
          ["4500-1", "4500", "30-37", "1", "4-6 min."],
          ["5400-1", "5400", "37-45", "1", "6-8 min."],
        ],
      },
    ],
    related: ["paddle-mixer", "hammer-mill", "plant-automation"],
  },
  {
    title: "Paddle Mixer",
    slug: "paddle-mixer",
    image: "/images/products/paddle-mixer.png",
    imageAlt: "Paddle Mixer machinery by Sai Feed Equipment",
    summary:
      "Paddle mixer for fast and vigorous dry mixing with liquid addition, welded paddles, double rotor structure and double bomb door discharge.",
    features: [
      "Paddle mixer is used for fast and vigorous dry mixing with good amount of liquid addition.",
      "Specially arranged welded paddles with lead angles for vigorous lump-free homogeneous mixing.",
      "Optimal double rotor structure for even fill of the mixer with no dead corner.",
      "Pneumatically operated double bomb door gate for complete discharge.",
      "Return air chute furnished for internal and external pressure balancing.",
      "Multiple spraying nozzles section for liquid addition up to max. 8-10% is optional.",
      "Large doors enable easy cleanout and inspection.",
      "Full body stainless steel construction including rotor is optional.",
    ],
    sections: [
      {
        title: "Liquid addition",
        items: [
          "Liquid like oil/fat can be added in the mixer by mass flow controller.",
          "Loss-in-weight PLC controlled oil dosing system can add exact quantity.",
        ],
      },
    ],
    specColumns: ["Model", "Vol. (Ltr.)", "Motor (kW)", "No. of Rotor", "Mixing Time"],
    specTables: [
      {
        columns: ["Model", "Vol. (Ltr.)", "Motor (kW)", "No. of Rotor", "Mixing Time"],
        rows: [
          ["200-2", "200", "5.5-7.5", "2", "2-3 min."],
          ["500-2", "500", "7.5-11", "2", "2-3 min."],
          ["800-2", "800", "15-22", "2", "2-3 min."],
          ["1800-2", "1800", "18-30", "2", "2-3 min."],
          ["2500-2", "2500", "22-37", "2", "2-3 min."],
          ["3500-2", "3500", "30-45", "2", "2-3 min."],
        ],
      },
    ],
    related: ["ribbon-mixer", "plant-automation", "hammer-mill"],
  },
  {
    title: "Crumber",
    slug: "crumbler",
    image: "/images/products/crumbler.png",
    imageAlt: "Crumber machinery by Sai Feed Equipment",
    summary:
      "Crumber equipment with grooved rolls, differential roll speed, rotary feeder, robust drive and precise roll-gap adjustment.",
    features: [
      "Crumbler rolls are grooved with different flutes (TPI) to suit product sizing.",
      "Differential rotational speed of rolls for perfect crumbling.",
      "Rotary feeder for even distribution of pellets along the length of rolls.",
      "Sturdy and robust drive for slip-free crumbling.",
      "Large roll cleaning / inspection door for ease of maintenance.",
      "Pressure-cast chilled roll with desired TPI.",
      "Precise spring-loaded geared roll-gap adjustment.",
      "Low noise and negligible maintenance.",
      "Feed diverter flap for bypassing pellets.",
    ],
    specColumns: ["Model", "Roller Size", "Capacity (MT/Hr)", "Motor Power (kW)"],
    specTables: [
      {
        columns: ["Model", "15x80", "20x80", "20x100", "20x120", "20x150", "25x150"],
        rows: [
          ["Roller Size", "150x800", "200x800", "200x1000", "200x1200", "200x1500", "250x1500"],
          ["Capacity (MT/Hr.)", "2-3", "4-5", "6-8", "8-10", "10-12", "12-15"],
          ["Motor Power (kW)", "3.75", "7.5", "7.5", "7.5", "11", "15"],
        ],
      },
    ],
    related: ["pellet-mill", "cooler", "vibro-sieve"],
  },
  {
    title: "Vibro Sieve",
    slug: "vibro-sieve",
    image: "/images/products/vibro-sieve.png",
    imageAlt: "Vibro Sieve machinery by Sai Feed Equipment",
    summary:
      "Vibro sieve equipment with eccentric throw mechanism, tubular frame, quick clamp and multi-deck grading support.",
    features: [
      "Single sturdy eccentric throw mechanism with standard motor.",
      "Tubular frame for vibration-free installation.",
      "Long screen travel provides fast, efficient size separation with adequate residence time to eliminate powder from feed.",
      "Quick clamp makes screen changing very fast.",
      "Single as well as multi-deck sieve for grading different sizes of crumbs/pellets.",
      "As the product travels and encounters the screening surface, the vibrating screen throws product across the screen and separates the required size.",
      "Low power requirement with high processing rate.",
    ],
    specColumns: ["Model", "Sieve Area (m2)", "Motor Power (kW)", "Capacity (MT/Hr)"],
    specTables: [
      {
        columns: ["Model", "70x150", "100x200", "120x250", "150x300"],
        rows: [
          ["Sieve Area (m2)", "1-2", "2-4", "3-6", "4.5-9"],
          ["Motor Power (kW)", "1.1", "1.5", "2.2", "3.75"],
          ["Capacity (MT/Hr.)", "2-3", "5-7", "7-10", "10-15"],
        ],
      },
    ],
    related: ["gyro-sieve", "crumbler", "cooler"],
  },
  {
    title: "Gyro Sieve",
    slug: "gyro-sieve",
    image: "/images/products/gyro-sieve.png",
    imageAlt: "Gyro Sieve machinery by Sai Feed Equipment",
    summary:
      "Gyro sieve equipment with unbalanced weight electric motor, self-balancing gyratory screen and three-plane motion.",
    features: [
      "Heavy duty unbalanced weight electric motor for various spiral-screening patterns.",
      "Self-balancing gyratory screen producing three-plane motion.",
      "Frame with heavy duty vibration dampening springs.",
      "Single as well as multi-deck sieve for grading different sizes of crumbs/pellets.",
      "High screening efficiency with accurate separation and minimum screen blinding.",
      "Modular design for varied range of applications.",
    ],
    specColumns: ["Model", "Sieve Area (m2)", "Motor Power (kW)", "Capacity (MT/Hr)"],
    specTables: [
      {
        columns: ["Model", "70x150", "100x200", "120x250", "150x300"],
        rows: [
          ["Sieve Area (m2)", "1.7-3.5", "2.5-5", "3.5-7", "5-9.5"],
          ["Motor Power (kW)", "1.5", "2.2", "3.75", "5.5"],
          ["Capacity (MT/Hr.)", "3-4", "5-7", "8-10", "10-12"],
        ],
      },
    ],
    related: ["vibro-sieve", "crumbler", "cooler"],
  },
  {
    title: "Material Handling Equipment",
    slug: "material-handling-equipment",
    image: "/images/products/material-handling-equipment.png",
    imageAlt: "Material Handling Equipment by Sai Feed Equipment",
    summary:
      "Conveying equipment for continuous feed and discharge of material at grinding, mixing, pelleting and bagging stages.",
    features: [
      "Design and selection of conveying equipments plays a great role in improving overall performance of feed plants.",
      "Accurate placement supports continuous feed and discharge of material at different stages like grinding, mixing, pelleting and bagging.",
      "Conveying equipments are energy efficient to assure minimum power consumption and long service life.",
    ],
    sections: [
      {
        title: "Chain Conveyor",
        items: ["Rugged chain and sprocket assembly.", "Power efficient design.", "Full UHMW for friction-free sliding."],
      },
      {
        title: "Bucket Elevator",
        items: ["Rubberised head pulley.", "Bucket: steel / HDPE."],
      },
      {
        title: "Screw Conveyor",
        items: ["Sturdy housing with accurate seal.", "Rugged built long life."],
      },
    ],
    specColumns: ["SFE Model", "Trough Size (mm)", "Capacity MT/Hr"],
    specTables: [
      {
        title: "Chain Conveyor",
        columns: ["SFE Model", "Trough Size (mm.)", "Capacity MT3/Hr."],
        rows: [
          ["125x24/76", "240x460", "10-20"],
          ["125x30/54", "300x540", "20-30"],
          ["142x40/50", "400x500", "30-45"],
          ["142x40/60", "400x600", "40-50"],
        ],
      },
      {
        title: "Bucket Elevator",
        columns: ["SFE Model", "Trough Size (mm.)", "Capacity MT3/Hr."],
        rows: [
          ["6", "6 in x 4 3/4 in x 3 1/2 in", "10-20"],
          ["8", "8 in x 5 1/4 in x 4 1/2 in", "18-30"],
          ["10", "10 in x 6 in x 5 in", "45-60"],
          ["11", "11 1/4 in x 6 3/4 in x 5 in", "60-75"],
          ["12", "12 in x 6 in x 5 in", "70-85"],
        ],
      },
      {
        title: "Screw Conveyor",
        columns: ["SFE Model", "Trough Size (mm.)", "Capacity MT3/Hr."],
        rows: [
          ["150", "180x165", "2-3"],
          ["200", "270x220", "4-6"],
          ["250", "295x270", "8-15"],
          ["300", "360x325", "10-20"],
          ["350", "390x375", "20-30"],
        ],
      },
    ],
    related: ["hammer-mill", "ribbon-mixer", "pellet-mill"],
  },
  {
    title: "Plant Automation",
    slug: "plant-automation",
    image: "/images/products/plant-automation.png",
    imageAlt: "Plant Automation system by Sai Feed Equipment",
    summary:
      "Computer based automation and process monitoring system for recipe control, feed safety, operational interlocks and product traceability.",
    features: [
      "Customers can create their own unique recipes, controlled homogeneous content and exact physical properties.",
      "Feed plant is monitored / controlled by computer based automation and process monitoring system.",
      "Safety and operational hardwired interlocks make the feed plant safe, efficient and smooth running.",
      "Ingredients are weighed and mixed in exact quantities as per recipe.",
      "Complete feed process from intake to bagging is on-screen after entering the feed recipe.",
      "Continuous data logging system ensures product traceability at every stage.",
      "Reports are generated like batch report, lot report, recipe code daily/hourly production report.",
      "Dedicated online office support team provides plant support through remote login.",
      "Remote support overcomes limitations of large distance.",
    ],
    related: ["pellet-mill", "ribbon-mixer", "paddle-mixer"],
  },
  {
    title: "Dies & Rolls",
    slug: "dies-and-rolls",
    image: "/images/products/dies-and-rolls.png",
    imageAlt: "Dies and Rolls by Sai Feed Equipment",
    summary:
      "H-CHROME and H-CARB dies and rolls with forging, CNC turning, gun-drilling, outer relief holes, inverted countersink and vacuum hardening support.",
    features: [
      "Design and selection of dies and rolls plays an important role in improving feed plant performance.",
      "Sai Feed Equipment has design expertise for accurate placement and reliable operation in grinding, mixing, pelleting and bagging systems.",
      "Equipment is energy efficient to assure minimum power consumption and long service life.",
    ],
    sections: [
      {
        title: "Forging",
        items: [
          "Ring forging of martensitic stainless steel and alloy steel are procured from world-class ring rolling mills.",
          "These mills have fully accredited internal QAP systems to manufacture rings strictly as per specification.",
        ],
      },
      {
        title: "Turning",
        items: [
          "Dies are machined as per pellet mill specific dimensional tolerances on CNC turning centers.",
          "This helps ensure customers do not face fitment issues.",
        ],
      },
      {
        title: "CNC Gun-Drilling",
        items: ["High mirror finish concentric holes ensure high productivity.", "Low power consumption.", "More durability and high quality pellets."],
      },
      {
        title: "Outer Relief Holes",
        items: ["CNC step-drilling machine is used.", "Repetitive depth accuracy is maintained in every hole of the die."],
      },
      {
        title: "Inverted Countersink",
        items: [
          "Accurate inverted counter is done by CNC operated machines for easy material entry.",
          "Enhances pelleting performance.",
          "Entry angle is adjusted for correct flow with respect to pellet PDI.",
        ],
      },
      {
        title: "H-CHROME and H-CARB Dies guarantee",
        items: [
          "Higher production.",
          "Increased rate of production per hour.",
          "Substantial reduction in power cost.",
          "Unaffected by steam, molasses and other fat contents.",
          "Easy pelleting right from the start.",
          "Minimizing maintenance time.",
          "Negligible hole enlargements.",
        ],
      },
      {
        title: "CARB Roll",
        items: [
          "Corrugated rolls - close/open end.",
          "Dimple rolls.",
          "Helical fluted rolls.",
          "Pinnacle close end rolls.",
          "CARB rolls are hardened to 60-62 HRC to provide long service life.",
          "Compatible with all types of pellet diets.",
        ],
      },
    ],
    applications: ["Dies of holes as small as 1.2 mm and up to 12 mm.", "Proper care is taken in packaging depending on the mode of transportation and final destination."],
    related: ["pellet-mill", "crumbler", "plant-automation"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(slugs: string[] = []) {
  return products.filter((product) => slugs.includes(product.slug));
}
