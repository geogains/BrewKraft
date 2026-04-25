export type MenuItem = {
  name: string;
  description: string;
  price: string; // [PLACEHOLDER] Replace with actual prices
  badge?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
};

// [PLACEHOLDER] All items and prices below are illustrative — replace with final menu data
export const menuCategories: MenuCategory[] = [
  {
    id: "coffee",
    title: "Coffee",
    icon: "☕",
    items: [
      {
        name: "Colombian Espresso",
        description: "Single origin Colombian beans, rich and smooth with notes of dark chocolate and citrus.",
        price: "£2.50",
        badge: "Signature",
      },
      {
        name: "Flat White",
        description: "Double ristretto with velvety steamed milk — precise and balanced.",
        price: "£3.20",
      },
      {
        name: "Cappuccino",
        description: "Perfectly foamed, classic and satisfying.",
        price: "£3.20",
      },
      {
        name: "Cortado",
        description: "Equal parts espresso and warm milk. Clean, coffee-forward.",
        price: "£2.80",
      },
      {
        name: "Latte",
        description: "Colombian espresso with your choice of milk — oat, almond, or whole.",
        price: "£3.50",
      },
      {
        name: "Americano",
        description: "Full-bodied and smooth. Perfect for a long morning.",
        price: "£2.80",
      },
    ],
  },
  {
    id: "matcha",
    title: "Matcha & Speciality",
    icon: "🍵",
    items: [
      {
        name: "Iced Matcha Latte",
        description: "Ceremonial-grade matcha with your choice of milk over ice. Thick, creamy, and utterly refreshing.",
        price: "£4.20",
        badge: "Crowd Favourite",
      },
      {
        name: "Hot Matcha Latte",
        description: "Whipped ceremonial matcha with steamed oat milk. Calming and rich.",
        price: "£3.80",
        badge: "Crowd Favourite",
      },
      {
        name: "Matcha Strawberry Latte",
        description: "Our beloved matcha blended with a house strawberry purée. Stunning in the glass.",
        price: "£4.50",
        badge: "Fan Favourite",
      },
    ],
  },
  {
    id: "chai",
    title: "Tea & Chai",
    icon: "🫖",
    items: [
      {
        name: "Kashmiri Chai",
        description: "Soft pink, cardamom-spiced tea made with whole milk and crushed nuts. Warming and beautiful.",
        price: "£3.80",
        badge: "Must Try",
      },
      {
        name: "Karak Chai",
        description: "Strong brewed tea with evaporated milk and warming spices. Rich and deeply comforting.",
        price: "£3.50",
        badge: "Must Try",
      },
      {
        name: "Classic English Breakfast",
        description: "Strong, full-bodied loose-leaf tea. Proper.",
        price: "£2.20",
      },
      {
        name: "Herbal Tea Selection",
        description: "Chamomile, peppermint, and seasonal blends. Ask a team member for today's selection.",
        price: "£2.50",
      },
    ],
  },
  {
    id: "cold",
    title: "Cold Drinks",
    icon: "🧋",
    items: [
      {
        name: "Iced Coffee",
        description: "Cold-brew Colombian coffee over ice — smooth, low-acid, endlessly drinkable.",
        price: "£3.50",
      },
      {
        name: "Iced Latte",
        description: "Double espresso with milk over ice. A café essential.",
        price: "£3.80",
      },
      {
        name: "Fruit Coolers",
        description: "Seasonal fruit blends, refreshing and lightly sweetened. Ask about today's flavour.",
        price: "£3.50",
      },
      {
        name: "Still & Sparkling Water",
        description: "Premium bottled water.",
        price: "£1.50",
      },
    ],
  },
  {
    id: "pastries",
    title: "Pastries & Cakes",
    icon: "🥐",
    items: [
      {
        name: "Butter Croissant",
        description: "Freshly baked, golden layers with a pillowy interior. Classic and perfect.",
        price: "£2.50",
      },
      {
        name: "Pain au Chocolat",
        description: "Buttery pastry with a dark chocolate centre. Dangerously good.",
        price: "£2.80",
      },
      {
        name: "Cinnamon Roll",
        description: "Soft, swirled, and sticky — topped with a vanilla cream glaze.",
        price: "£3.50",
        badge: "Popular",
      },
      {
        name: "Slice of the Day",
        description: "Rotating selection of freshly baked cakes and slices. Ask a team member for today's options.",
        price: "£3.00",
        badge: "Ask Us",
      },
      {
        name: "Brownies",
        description: "Dense, fudgy, and rich. Just the right amount of indulgent.",
        price: "£2.80",
      },
    ],
  },
  {
    id: "hot-food",
    title: "Hot Food",
    icon: "🍳",
    items: [
      {
        name: "Loaded Croissants",
        description: "Crispy seasoned fries loaded with your choice of toppings. A proper treat.",
        price: "£5.50",
        badge: "Signature",
      },
      {
        name: "Mac & Cheese",
        description: "Rich, creamy, comforting. The definition of a good day.",
        price: "£6.00",
        badge: "Signature",
      },
      {
        name: "Toasted Sandwich",
        description: "Freshly made with seasonal fillings. Ask about today's options.",
        price: "£4.50",
      },
      {
        name: "Breakfast Wrap",
        description: "Egg, cheese, and your choice of filling in a warm tortilla. Great start.",
        price: "£5.00",
      },
    ],
  },
];
