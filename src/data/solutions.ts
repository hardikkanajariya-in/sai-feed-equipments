export type SolutionSection = {
  title: string;
  items: string[];
};

export type Solution = {
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  summary: string;
  overview: string[];
  sections: SolutionSection[];
  relatedProducts: string[];
};

export const solutions: Solution[] = [
  {
    title: "Animal Feed Plant",
    slug: "animal-feed-plant",
    image: "/images/solutions/animal-feed-plant.png",
    imageAlt: "Animal Feed Plant by Sai Feed Equipment",
    summary:
      "Animal feed plant solution covering intake, weighing, auto batching, premix, oil/fat dosing, grinding, mixing, pelleting, cooling, crumbling, screening and auto bagging.",
    overview: [
      "The animal feed plant solution is presented as a process flow from ingredient intake through bagging and dispatch.",
      "The brochure covers intake system, weighing and auto batching system, premix, oil/fat dosing and process stages including grinding, mixing, pelleting, cooling, crumbling, screening and auto bagging.",
    ],
    sections: [
      {
        title: "Intake system includes",
        items: [
          "Single / multi dumping hopper for bulk as well as manual unloading of feed ingredients.",
          "Magnetic grill to prevent ferrous/ferrite particles entering into the feed system.",
          "Aspiration - pulse jet self-cleaning bag filters are used for dust-free environment.",
        ],
      },
      {
        title: "Weighing & Auto batching system",
        items: [
          "Corrugated and round bins for holding individual ingredients.",
          "Single bin capacity up to 40 m3.",
          "Individual variable pitch screw feeders / bin dischargers with weigh hopper scales for exact weighing of all ingredients.",
          "As per the recipe, feed ingredients are weighed individually in exact quantities and in the shortest possible time.",
          "Premixing of feed ingredients prior to grinding is offered to ensure optimum grinding performance.",
        ],
      },
      {
        title: "Premix",
        items: [
          "Full stainless steel mirror-polished round storage bins.",
          "Variable pitch screw dischargers and weighing units are used for micro weighing to the accuracy of +/- 1%.",
        ],
      },
      {
        title: "Oil / fat dosing",
        items: [
          "Load cell based fully automatic oil dosing system ensures accurate and reliable spraying of oil/fat.",
          "Homogeneous fat addition as per feed recipe.",
        ],
      },
      {
        title: "Process sections",
        items: [
          "Grinding with 1500/3000 rpm grinders, suitable screen areas and integrated aspiration support.",
          "Mixing with ribbon mixer, paddle mixer and molasses mixer / continuous mixer options.",
          "Pelleting with engineered steel housing, rotor assembly, stainless steel door and adaptable die speed.",
          "Cooling with counter-flow air versus pellets cooling and compact stainless steel design.",
          "Crumbling with grooved rolls, differential rotational speed and rotary feeder.",
          "Screening with vibrating screen separation for required size and powder elimination.",
          "Auto bagging for 25-100 kg bags which can be auto weighed and stitched for dispatches.",
        ],
      },
    ],
    relatedProducts: ["hammer-mill", "ribbon-mixer", "paddle-mixer", "pellet-mill", "cooler", "crumbler", "vibro-sieve", "plant-automation"],
  },
  {
    title: "Biomass / Wood Plant",
    slug: "biomass-wood-plant",
    image: "/images/solutions/biomass-wood-plant.png",
    imageAlt: "Biomass and Wood Plant by Sai Feed Equipment",
    summary:
      "Complete solution for biomass and wood pellet production, from grinding biomass/wood to manufacturing pellets.",
    overview: [
      "Sai Feed Equipment provides a complete solution for production, from grinding biomass/wood to manufacturing the best quality pellets.",
      "The use of biomass energy over fossil fuels leads to reduction in carbon emission in the environment.",
      "Planet Earth is protected from hazards of global warming by the use of renewable sources of energy.",
    ],
    sections: [
      {
        title: "Raw materials for biomass pellets include",
        items: ["Wood, saw dust and wood chips", "Agri waste - groundnut shells, stalks, corn cob, etc.", "Straw, bagasse, etc."],
      },
      {
        title: "Advantages of biomass / wood pelleting",
        items: [
          "Reduced transportation cost",
          "Environment friendly",
          "Better storage and handling capability",
          "Homogeneity for efficient burning",
          "CO2 neutral fuel",
        ],
      },
    ],
    relatedProducts: ["hammer-mill", "pellet-mill", "cooler", "material-handling-equipment", "plant-automation"],
  },
  {
    title: "Pellet Plants",
    slug: "pellet-plants",
    image: "/images/solutions/pellet-plants.png",
    imageAlt: "Pellet Plants by Sai Feed Equipment",
    summary:
      "Complete feed plant and biomass / wood pellet plant solutions with automation, process monitoring, feed safety and remote support.",
    overview: [
      "Sai Feed Equipment provides complete feed plant solutions for the feed industry.",
      "Since 1997, this has helped gain extensive knowledge and insight into the demands of specific feed markets.",
      "The company strives to provide tailor-made complete solutions in pelleting with efficient plants that are easy to operate and low on maintenance.",
    ],
    sections: [
      {
        title: "Pelleting plant",
        items: ["Animal feed plants: capacity 150-800 TPD", "Biomass / wood pellet plant: capacity 30-150 TPD"],
      },
      {
        title: "Automation and support",
        items: [
          "Computer based automation and process monitoring systems control feed formulation as per the recipe.",
          "The system provides reassurance of high quality to feed millers and subsequently to end consumers.",
          "Plants are designed for complete feed safety and traceability.",
          "Sai Feed Equipment guarantees highly reliable process operations through 24x7 remote support facility as well as on-site support when necessary.",
        ],
      },
    ],
    relatedProducts: ["pellet-mill", "hammer-mill", "cooler", "plant-automation", "dies-and-rolls"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
