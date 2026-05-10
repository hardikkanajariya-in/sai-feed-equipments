export type GalleryItem = {
  title: string;
  image: string;
  alt: string;
  category: "Plant" | "Product" | "Automation" | "Dies & Rolls" | "Material Handling";
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Animal Feed Plant",
    image: "/images/gallery/animal-feed-plant.png",
    alt: "Animal feed plant installation",
    category: "Plant",
  },
  {
    title: "Biomass / Wood Plant",
    image: "/images/gallery/biomass-wood-plant.png",
    alt: "Biomass and wood plant installation",
    category: "Plant",
  },
  {
    title: "Pellet Plants",
    image: "/images/gallery/pellet-plants.png",
    alt: "Pellet plants industrial installation",
    category: "Plant",
  },
  {
    title: "Pellet Mill",
    image: "/images/gallery/pellet-mill.png",
    alt: "Pellet mill product image",
    category: "Product",
  },
  {
    title: "Hammer Mill",
    image: "/images/gallery/hammer-mill.png",
    alt: "Hammer mill product image",
    category: "Product",
  },
  {
    title: "Cooler",
    image: "/images/gallery/cooler.png",
    alt: "Cooler product image",
    category: "Product",
  },
  {
    title: "Ribbon Mixer",
    image: "/images/gallery/ribbon-mixer.png",
    alt: "Ribbon mixer product image",
    category: "Product",
  },
  {
    title: "Paddle Mixer",
    image: "/images/gallery/paddle-mixer.png",
    alt: "Paddle mixer product image",
    category: "Product",
  },
  {
    title: "Crumber",
    image: "/images/gallery/crumbler.png",
    alt: "Crumber product image",
    category: "Product",
  },
  {
    title: "Vibro Sieve",
    image: "/images/gallery/vibro-sieve.png",
    alt: "Vibro sieve product image",
    category: "Product",
  },
  {
    title: "Gyro Sieve",
    image: "/images/gallery/gyro-sieve.png",
    alt: "Gyro sieve product image",
    category: "Product",
  },
  {
    title: "Material Handling Equipment",
    image: "/images/gallery/material-handling-equipment.png",
    alt: "Material handling equipment overview",
    category: "Material Handling",
  },
  {
    title: "Chain Conveyor",
    image: "/images/gallery/chain-conveyor.png",
    alt: "Chain conveyor product image",
    category: "Material Handling",
  },
  {
    title: "Bucket Elevator",
    image: "/images/gallery/bucket-elevator.png",
    alt: "Bucket elevator product image",
    category: "Material Handling",
  },
  {
    title: "Screw Conveyor",
    image: "/images/gallery/screw-conveyor.png",
    alt: "Screw conveyor product image",
    category: "Material Handling",
  },
  {
    title: "Plant Automation",
    image: "/images/gallery/plant-automation.png",
    alt: "Plant automation control system",
    category: "Automation",
  },
  {
    title: "Dies & Rolls",
    image: "/images/gallery/dies-and-rolls.png",
    alt: "Dies and rolls product image",
    category: "Dies & Rolls",
  },
];
