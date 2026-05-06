export type FeaturedPick = {
  name: string;
  category: string;
  badge: string;
  image: string;
  scrollTo: string;
};

export const featuredPicks: FeaturedPick[] = [
  { name: "Full English Breakfast", category: "Breakfast & Brunch", badge: "Most Popular",   image: "/images/full-english1.png",  scrollTo: "breakfast-brunch" },
  { name: "Eggs Benedict",          category: "Breakfast & Brunch", badge: "Brunch Classic", image: "/images/eggs-benedict.png",   scrollTo: "breakfast-brunch" },
  { name: "Avocado on Sourdough",   category: "Breakfast & Brunch", badge: "Fresh Favourite", image: "/images/avocado.png",         scrollTo: "breakfast-brunch" },
  { name: "Hot Chocolate",          category: "Coffee",             badge: "Must Try",        image: "/images/chocolate.png",       scrollTo: "coffee"           },
  { name: "Chicken Tikka Panini",   category: "Paninis",            badge: "Lunch Pick",      image: "/images/paninis.png",         scrollTo: "paninis"          },
  { name: "Frappuccino",            category: "Iced Drinks",        badge: "Ice Cold",        image: "/images/frappuccino6.png",    scrollTo: "iced-drinks"      },
];
