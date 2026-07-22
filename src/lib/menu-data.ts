import heroImg from "@/assets/hero.jpg";
import drinkImg from "@/assets/drink-1.jpg";
import pastryImg from "@/assets/pastry.jpg";
import beansImg from "@/assets/beans.jpg";
import interiorImg from "@/assets/interior.jpg";

export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  image: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    title: "Espresso",
    items: [
      { name: "Espresso", desc: "Single origin, seasonal", price: "10", image: heroImg },
      { name: "Cortado", desc: "Equal parts espresso & steamed milk", price: "14", image: drinkImg },
      { name: "Flat White", desc: "Velvet microfoam, double shot", price: "17", image: heroImg },
      { name: "Butter Latte", desc: "House signature, brown butter syrup", price: "22", image: drinkImg },
      { name: "Cappuccino", desc: "Classic Italian, dry foam", price: "16", image: heroImg },
    ],
  },
  {
    title: "Iced & Cold",
    items: [
      { name: "Iced Latte", desc: "Slow-poured over ice", price: "18", image: drinkImg },
      { name: "Cold Brew", desc: "18-hour steeped, smooth finish", price: "17", image: beansImg },
      { name: "Spanish Latte", desc: "Condensed milk, double espresso", price: "20", image: drinkImg },
      { name: "Iced Butter Cream", desc: "Salted butter cold foam", price: "24", image: drinkImg },
    ],
  },
  {
    title: "Filter & More",
    items: [
      { name: "V60 Pour Over", desc: "Ask about today's beans", price: "22", image: beansImg },
      { name: "Matcha Latte", desc: "Ceremonial grade, whole milk", price: "22", image: interiorImg },
      { name: "Hot Chocolate", desc: "Dark 70%, steamed milk", price: "18", image: drinkImg },
      { name: "Butter Croissant", desc: "Baked in-house, daily", price: "15", image: pastryImg },
    ],
  },
];

// Preview: 3 items for landing page
export const previewItems: MenuItem[] = [
  menuSections[0].items[3], // Butter Latte
  menuSections[1].items[3], // Iced Butter Cream
  menuSections[2].items[3], // Butter Croissant
];
