export type MenuItem = {
  name: string;
  description: string;
  price: string;
  badge?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "hot-drinks",
    title: "Hot Drinks",
    icon: "☕",
    items: [
      {
        name: "Espresso",
        description: "Rich double shot espresso, bold and concentrated.",
        price: "£2.20",
        badge: "Signature",
      },
      {
        name: "Macchiato",
        description: "Espresso with a dash of steamed milk foam.",
        price: "£2.75",
      },
      {
        name: "Affogato",
        description: "Shot of espresso poured over vanilla ice cream.",
        price: "£4.20",
      },
      {
        name: "Biscoff Affogato",
        description: "Espresso over vanilla ice cream with Biscoff drizzle.",
        price: "£4.40",
      },
      {
        name: "Americano",
        description: "Espresso with hot water, smooth and full-bodied.",
        price: "M £3.50 / L £3.90",
      },
      {
        name: "Flat White",
        description: "Double espresso with velvety steamed milk.",
        price: "£3.90",
      },
      {
        name: "Latte",
        description: "Espresso with steamed milk, smooth and creamy.",
        price: "M £3.90 / L £4.20",
      },
      {
        name: "Cappuccino",
        description: "Espresso with equal parts steamed milk and foam.",
        price: "M £3.90 / L £4.20",
      },
      {
        name: "Mocha",
        description: "Espresso with rich chocolate and steamed milk.",
        price: "M £3.90 / L £4.20",
      },
      {
        name: "White Chocolate Mocha",
        description: "Espresso with white chocolate and steamed milk.",
        price: "M £3.90 / L £4.20",
      },
      {
        name: "Nutella Mocha",
        description: "Espresso with Nutella and steamed milk.",
        price: "£5.50",
        badge: "House Special",
      },
      {
        name: "Kinder Inspired Mocha",
        description: "Espresso with a Kinder-inspired flavour blend.",
        price: "£5.50",
        badge: "House Special",
      },
      {
        name: "Biscoff Mocha",
        description: "Espresso with Biscoff spread and steamed milk.",
        price: "£5.50",
        badge: "House Special",
      },
      {
        name: "Vegan Mocha",
        description: "Chocolate mocha made with plant-based milk.",
        price: "M £3.90 / L £4.20",
        badge: "Vegan",
      },
      {
        name: "Hot Chocolate",
        description: "Rich and creamy hot chocolate.",
        price: "M £3.70 / L £4.20",
      },
      {
        name: "Vegan Hot Chocolate",
        description: "Creamy hot chocolate made with plant-based milk.",
        price: "M £3.70 / L £4.20",
        badge: "Vegan",
      },
      {
        name: "Nutella Hot Chocolate",
        description: "Hot chocolate blended with Nutella.",
        price: "£5.50",
        badge: "House Special",
      },
      {
        name: "Kinder Inspired Hot Chocolate",
        description: "Hot chocolate with a Kinder-inspired flavour.",
        price: "£5.50",
        badge: "House Special",
      },
      {
        name: "Biscoff Hot Chocolate",
        description: "Hot chocolate with Biscoff Lotus spread.",
        price: "£5.50",
        badge: "House Special",
      },
      {
        name: "White Hot Chocolate",
        description: "Smooth and sweet white chocolate drink.",
        price: "M £3.90 / L £4.20",
      },
      {
        name: "Chai Latte",
        description: "Warm spiced tea blended with steamed milk.",
        price: "M £3.90 / L £4.20",
      },
      {
        name: "Dirty Chai Latte",
        description: "Chai latte with a shot of espresso for extra kick.",
        price: "M £3.90 / L £4.20",
      },
      {
        name: "Karak Chai",
        description: "Traditional Middle Eastern spiced tea brewed with milk.",
        price: "M £3.20 / L £3.80",
        badge: "Popular",
      },
      {
        name: "Karak Coffee",
        description: "Rich brewed coffee in the traditional karak style.",
        price: "M £3.50 / L £3.90",
      },
      {
        name: "Pink Tea",
        description: "Cardamom-spiced Kashmiri-style pink tea, warming and beautiful.",
        price: "M £3.50 / L £3.90",
        badge: "Signature",
      },
      {
        name: "Turmeric Latte",
        description: "Golden milk with turmeric and warming spices.",
        price: "£4.90",
      },
      {
        name: "Matcha",
        description: "Ceremonial-grade matcha with steamed milk.",
        price: "M £4.30 / L £4.70",
        badge: "Popular",
      },
      {
        name: "Tea",
        description: "Classic brewed tea, served your way.",
        price: "M £2.50 / L £2.90",
      },
    ],
  },
  {
    id: "cold-drinks",
    title: "Cold Drinks",
    icon: "🧊",
    items: [
      {
        name: "Iced Matcha",
        description: "Ceremonial-grade matcha over ice, creamy and refreshing.",
        price: "£4.30",
        badge: "Popular",
      },
      {
        name: "Iced Americano",
        description: "Cold espresso with water over ice.",
        price: "£3.50",
      },
      {
        name: "Iced Latte",
        description: "Espresso with cold milk over ice.",
        price: "£4.50",
      },
      {
        name: "Iced Mocha",
        description: "Chocolate espresso drink served over ice.",
        price: "£4.50",
      },
      {
        name: "Iced Nutella Mocha",
        description: "Nutella mocha chilled over ice.",
        price: "£5.20",
        badge: "House Special",
      },
      {
        name: "Iced Kinder Inspired Mocha",
        description: "Kinder-inspired mocha over ice.",
        price: "£5.20",
        badge: "House Special",
      },
      {
        name: "Iced Biscoff Mocha",
        description: "Biscoff mocha served over ice.",
        price: "£5.20",
        badge: "House Special",
      },
      {
        name: "Iced Chai Latte",
        description: "Spiced chai latte over ice.",
        price: "£4.50",
      },
      {
        name: "Iced Dirty Chai Latte",
        description: "Chai latte with espresso, served over ice.",
        price: "£4.80",
      },
      {
        name: "Iced Sweet Rose Refresher",
        description: "Floral rose-infused iced refresher.",
        price: "£4.50",
      },
    ],
  },
  {
    id: "milkshakes",
    title: "Milkshakes",
    icon: "🥛",
    items: [
      {
        name: "Chocolate Ice Cream Shake",
        description: "Indulgent chocolate ice cream milkshake.",
        price: "£5.90",
      },
      {
        name: "Strawberry Ice Cream Shake",
        description: "Classic strawberry ice cream milkshake.",
        price: "£5.90",
      },
      {
        name: "Vanilla Ice Cream Shake",
        description: "Smooth and creamy vanilla milkshake.",
        price: "£5.90",
      },
      {
        name: "Mango Shake",
        description: "Tropical mango milkshake, thick and refreshing.",
        price: "£5.90",
      },
      {
        name: "Ferrero Rocher Shake",
        description: "Luxurious hazelnut chocolate milkshake.",
        price: "£6.90",
        badge: "House Special",
      },
      {
        name: "Kinder Bueno Shake",
        description: "Creamy Kinder Bueno-inspired milkshake.",
        price: "£6.90",
        badge: "House Special",
      },
      {
        name: "Oreo Shake",
        description: "Oreo cookie blended into a thick milkshake.",
        price: "£6.90",
        badge: "Popular",
      },
      {
        name: "Lotus Shake",
        description: "Biscoff Lotus-inspired blended milkshake.",
        price: "£6.90",
      },
      {
        name: "Flake Shake",
        description: "Chocolate Flake blended milkshake.",
        price: "£6.90",
      },
      {
        name: "Bourbon Shake",
        description: "Bourbon biscuit blended milkshake.",
        price: "£6.90",
      },
    ],
  },
  {
    id: "mojitos",
    title: "Mojitos",
    icon: "🍹",
    items: [
      {
        name: "Strawberry Mojito",
        description: "Fresh strawberry mocktail with mint and lime.",
        price: "£5.90",
      },
      {
        name: "Virgin Mojito",
        description: "Classic mint and lime mocktail over ice.",
        price: "£5.90",
      },
      {
        name: "Sweet Rose Mojito",
        description: "Floral rose-infused mojito mocktail.",
        price: "£5.50",
      },
      {
        name: "Red Bull Mojito",
        description: "Mojito mocktail with Red Bull for an extra boost.",
        price: "£6.90",
        badge: "Popular",
      },
      {
        name: "Mango Mojito",
        description: "Tropical mango mojito mocktail with fresh mint.",
        price: "£5.90",
      },
      {
        name: "Bubblegum Mojito",
        description: "Sweet bubblegum-flavoured mojito mocktail.",
        price: "£5.90",
      },
      {
        name: "Custom Mojito",
        description: "Choose your own flavour combination. Ask our team.",
        price: "£5.90",
      },
    ],
  },
  {
    id: "smoothies",
    title: "Smoothies",
    icon: "🍓",
    items: [
      {
        name: "Tropical Mix",
        description: "A vibrant blend of Mango, Papaya, Pineapple & Apple Juice.",
        price: "£5.90",
      },
      {
        name: "Summer Fruits",
        description: "A fruity blend of Blackberries, Redcurrants, Blackcurrants, Blueberries, Strawberries, Raspberrries & Apple Juice.",
        price: "£5.90",
      },
    ],
  },
  {
    id: "frappe",
    title: "Frappé",
    icon: "🧋",
    items: [
      {
        name: "Frappé",
        description: "Blended iced frappé. Available in all syrup flavours. Ask our team. (+£1 to add coffee)",
        price: "£5.90",
      },
    ],
  },
  {
    id: "viral",
    title: "Viral Double Cup",
    icon: "⭐",
    items: [
      {
        name: "Viral Double Cup",
        description: "Our signature viral layered drink experience, a Blend exclusive.",
        price: "£7.00",
        badge: "Signature",
      },
    ],
  },
  {
    id: "soft-drinks",
    title: "Soft Drinks",
    icon: "🥤",
    items: [
      {
        name: "Cola Can",
        description: "Classic cola.",
        price: "£1.40",
      },
      {
        name: "Lemonade Can",
        description: "Sparkling lemonade.",
        price: "£1.40",
      },
      {
        name: "Orangeade Can",
        description: "Refreshing sparkling orangeade.",
        price: "£1.40",
      },
      {
        name: "Rubicon Mango Can",
        description: "Tropical mango juice drink.",
        price: "£1.40",
      },
      {
        name: "Rubicon Lychee Can",
        description: "Exotic lychee juice drink.",
        price: "£1.40",
      },
      {
        name: "Red Bull Can",
        description: "Original Red Bull energy drink.",
        price: "£1.95",
      },
      {
        name: "Fruit Shoot",
        description: "Kids' fruit drink, no added sugar.",
        price: "£1.20",
      },
      {
        name: "J2O",
        description: "Premium fruit blend soft drink.",
        price: "£3.10",
      },
      {
        name: "Ribena",
        description: "Blackcurrant juice drink.",
        price: "£1.20",
      },
      {
        name: "Water Bottle",
        description: "Still mineral water.",
        price: "£1.20",
      },
      {
        name: "Sweet Rose Water",
        description: "Lightly flavoured sweet rose water.",
        price: "£1.90",
      },
    ],
  },
  {
    id: "all-day-food",
    title: "All Day Food",
    icon: "🍳",
    items: [
      {
        name: "Fried Eggs On Toast",
        description: "Two fried eggs on toasted bread.",
        price: "£5.20",
      },
      {
        name: "Fried Eggs On Bagel",
        description: "Two fried eggs on a toasted bagel.",
        price: "£5.20",
      },
      {
        name: "Scrambled Eggs On Toast",
        description: "Creamy scrambled eggs on toasted bread.",
        price: "£5.20",
      },
      {
        name: "Scrambled Eggs On Bagel",
        description: "Creamy scrambled eggs on a toasted bagel.",
        price: "£5.20",
      },
      {
        name: "Omelette With Toast",
        description: "Classic omelette served with a slice of toast.",
        price: "£4.90",
      },
      {
        name: "Omelette With Bagel",
        description: "Classic omelette served with a toasted bagel.",
        price: "£3.10",
      },
      {
        name: "Cheese Omelette With Toast",
        description: "Fluffy cheese omelette served with toast.",
        price: "£5.50",
      },
      {
        name: "Cheese Omelette With Bagel",
        description: "Fluffy cheese omelette served with a toasted bagel.",
        price: "£5.50",
      },
      {
        name: "Omelette",
        description: "Plain omelette, cooked to order.",
        price: "£3.80",
      },
      {
        name: "Nutella Bagel",
        description: "Toasted bagel generously spread with Nutella.",
        price: "£3.90",
      },
      {
        name: "Nutella Toast",
        description: "Toasted bread generously spread with Nutella.",
        price: "£4.20",
      },
      {
        name: "Avocado Chilli Bagel",
        description: "Smashed avocado with chilli flakes on a toasted bagel.",
        price: "£4.90",
      },
      {
        name: "Avocado Chilli Toast",
        description: "Smashed avocado with chilli flakes on toast.",
        price: "£4.90",
      },
      {
        name: "Beans On Toast",
        description: "Classic baked beans on toasted bread.",
        price: "£3.00",
      },
      {
        name: "Chicken Salad",
        description: "Fresh chicken salad, light and satisfying.",
        price: "£4.80",
      },
      {
        name: "Samosa",
        description: "Crispy pastry filled with spiced vegetables.",
        price: "£0.80",
      },
      {
        name: "Chicken Wrap",
        description: "Grilled chicken in a seasoned wrap.",
        price: "£5.40",
      },
      {
        name: "Cheese Panini",
        description: "Toasted panini with melted cheese.",
        price: "£5.40",
      },
      {
        name: "Veg Panini",
        description: "Toasted panini filled with seasoned vegetables.",
        price: "£4.20",
      },
      {
        name: "Chicken & Cheese Panini",
        description: "Toasted panini with grilled chicken and melted cheese.",
        price: "£5.40",
      },
      {
        name: "Grilled Cheese Toastie",
        description: "Golden grilled cheese sandwich, crispy and melted.",
        price: "£4.30",
      },
      {
        name: "Grilled Chicken & Cheese Toastie",
        description: "Grilled chicken and melted cheese in a toasted sandwich.",
        price: "£5.40",
      },
      {
        name: "Grilled Chicken, Cheese & Bacon Toastie",
        description: "Triple-filled toastie with chicken, cheese and bacon.",
        price: "£6.50",
      },
      {
        name: "Fish Finger Hot Sandwich",
        description: "Crispy fish fingers in a soft warm roll.",
        price: "£5.40",
      },
      {
        name: "Fries In A Cup",
        description: "Crispy seasoned fries served in a cup.",
        price: "£3.00",
      },
      {
        name: "Fries",
        description: "Classic crispy seasoned fries.",
        price: "£3.00",
      },
      {
        name: "Melted Cheese Fries",
        description: "Crispy fries topped with melted cheese.",
        price: "£4.20",
        badge: "Popular",
      },
      {
        name: "2x Garlic Bread Slice",
        description: "Two slices of warm, buttery garlic bread.",
        price: "£3.00",
      },
      {
        name: "Toast Slice",
        description: "Single slice of buttered toast.",
        price: "£0.70",
      },
      {
        name: "Sourdough Slice",
        description: "Single slice of sourdough bread.",
        price: "£0.90",
      },
      {
        name: "Fried Egg x1",
        description: "One fried egg, cooked to order.",
        price: "£1.80",
      },
      {
        name: "Scrambled Egg",
        description: "Portion of creamy scrambled egg.",
        price: "£3.50",
      },
      {
        name: "Cheesy Beans",
        description: "Baked beans with melted cheese.",
        price: "£2.00",
      },
    ],
  },
  {
    id: "house-specials",
    title: "House Specials",
    icon: "🌟",
    items: [
      {
        name: "Deluxe French Toast",
        description: "Thick-cut French toast, golden and indulgent.",
        price: "£5.50",
        badge: "Signature",
      },
      {
        name: "French Toast Bites",
        description: "Bite-sized French toast pieces, perfect for sharing.",
        price: "£5.90",
        badge: "Popular",
      },
      {
        name: "Herbs & Spiced Fries",
        description: "Crispy fries tossed in our house herb and spice blend.",
        price: "£4.20",
      },
      {
        name: "Signature Loaded Fries",
        description: "Our famous loaded fries with signature toppings.",
        price: "£5.50",
        badge: "Signature",
      },
      {
        name: "Signature Mac & Cheese",
        description: "Rich, creamy macaroni cheese, a Blend classic.",
        price: "£5.50",
        badge: "Signature",
      },
      {
        name: "Margherita Pizza Bagel",
        description: "Toasted bagel with tomato sauce and melted mozzarella.",
        price: "£4.90",
      },
      {
        name: "Chicken Pizza Bagel",
        description: "Toasted bagel with chicken, tomato sauce and mozzarella.",
        price: "£5.50",
      },
      {
        name: "Nachos",
        description: "Loaded tortilla chips with toppings.",
        price: "£5.00",
      },
      {
        name: "Signature Mash Potato",
        description: "Smooth and buttery mashed potato, made in-house.",
        price: "£4.50",
        badge: "House Special",
      },
      {
        name: "Samosa Salad",
        description: "Crispy samosas served over a fresh salad.",
        price: "£5.50",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    icon: "🍰",
    items: [
      {
        name: "Exclusive Loaded Croissant",
        description: "Our exclusive croissant loaded with premium fillings, a Blend signature.",
        price: "Ask in store",
        badge: "Signature",
      },
      {
        name: "Loaded Pain Au Chocolat",
        description: "Pain au chocolat filled with indulgent house toppings.",
        price: "Ask in store",
        badge: "House Special",
      },
      {
        name: "Croffle",
        description: "Belgian waffle-croissant hybrid with toppings.",
        price: "£6.50",
        badge: "Popular",
      },
      {
        name: "Waff Au Choc",
        description: "Waffle with a rich chocolate finish.",
        price: "£6.50",
      },
      {
        name: "Red Velvet Cake",
        description: "Rich, velvety red cake slice with cream cheese frosting.",
        price: "£5.90",
      },
      {
        name: "Lotus Cake",
        description: "Biscoff Lotus cake slice, sweet and caramelised.",
        price: "£5.90",
      },
      {
        name: "Chocolate Fudge Cake",
        description: "Indulgent chocolate fudge cake slice.",
        price: "£5.90",
      },
      {
        name: "Waffle",
        description: "Classic Belgian waffle with your choice of toppings.",
        price: "£6.90",
      },
    ],
  },
  {
    id: "french-patisserie",
    title: "Deluxe French Patisserie",
    icon: "🥐",
    items: [
      {
        name: "Tiramisu Illusion",
        description: "Our take on the classic Italian dessert, reimagined.",
        price: "£6.90",
        badge: "Award Winning",
      },
      {
        name: "Mango Magic",
        description: "Tropical mango-inspired patisserie with a luxurious finish.",
        price: "£6.90",
      },
      {
        name: "Hazelnut Illusion",
        description: "Rich hazelnut-flavoured patisserie.",
        price: "£6.90",
      },
      {
        name: "Peanut Illusion",
        description: "Smooth peanut-flavoured patisserie.",
        price: "£6.90",
      },
      {
        name: "Raspberry Illusion",
        description: "Tangy raspberry patisserie with a soft centre.",
        price: "£6.90",
      },
      {
        name: "Passion Fruit Illusion",
        description: "Tropical passion fruit patisserie.",
        price: "£6.90",
      },
    ],
  },
  {
    id: "ny-desserts",
    title: "New York Style Desserts",
    icon: "🍪",
    items: [
      {
        name: "Oreo Cookie",
        description: "Indulgent Oreo-filled New York style cookie.",
        price: "£4.50",
      },
      {
        name: "Freddo Cookie",
        description: "Freddo chocolate-topped cookie.",
        price: "£4.50",
      },
      {
        name: "Malteser Cookie",
        description: "Light, crunchy Malteser-filled cookie.",
        price: "£4.50",
      },
      {
        name: "Milky Bar Cookie or Blondie",
        description: "White chocolate Milky Bar cookie or blondie.",
        price: "£4.50",
      },
      {
        name: "Kinder Cookie or Brownie",
        description: "Kinder-inspired cookie or rich brownie.",
        price: "£4.50",
      },
      {
        name: "Galaxy Ripple Brownie",
        description: "Rich brownie topped with Galaxy Ripple chocolate.",
        price: "£4.50",
      },
      {
        name: "Snicker Brownie",
        description: "Decadent brownie with Snickers pieces.",
        price: "£4.50",
      },
      {
        name: "White Choc & Raspberry Blondie",
        description: "White chocolate and raspberry blondie bar.",
        price: "£4.50",
      },
      {
        name: "Kinder Cookie Pie",
        description: "Giant Kinder-filled cookie pie, warm and gooey.",
        price: "£6.90",
        badge: "Popular",
      },
      {
        name: "White Chocolate Kinder Bueno Cookie Pie",
        description: "White chocolate and Kinder Bueno giant cookie pie.",
        price: "£6.90",
      },
    ],
  },
  {
    id: "cheesecake",
    title: "Deluxe Cheesecake",
    icon: "🎂",
    items: [
      {
        name: "Ferrero Rocher Cheesecake",
        description: "Creamy hazelnut chocolate cheesecake slice.",
        price: "£4.80",
      },
      {
        name: "San Sebastian Luxury Cheesecake",
        description: "Burnt-top San Sebastian style luxury cheesecake.",
        price: "£6.90",
        badge: "Award Winning",
      },
    ],
  },
  {
    id: "bakery",
    title: "Bakery",
    icon: "🥖",
    items: [
      {
        name: "Croissant",
        description: "Buttery, golden, flaky croissant.",
        price: "£2.50",
      },
      {
        name: "Almond Croissant",
        description: "Croissant filled with rich almond cream.",
        price: "£3.00",
      },
      {
        name: "Chocolate Croissant",
        description: "Croissant with a dark chocolate filling.",
        price: "£3.00",
      },
      {
        name: "Cinnamon Bun",
        description: "Soft, swirled and sticky cinnamon bun.",
        price: "£4.00",
      },
      {
        name: "Nutella Muffin",
        description: "Soft muffin with a Nutella-filled centre.",
        price: "£3.00",
      },
      {
        name: "Pain Au Chocolat",
        description: "Buttery pastry with a dark chocolate centre.",
        price: "£3.00",
      },
    ],
  },
  {
    id: "kids-hot-drinks",
    title: "Kids Hot Drinks",
    icon: "🍼",
    items: [
      {
        name: "Babyccino",
        description: "Frothy steamed milk for little ones.",
        price: "£0.80",
        badge: "Kids",
      },
      {
        name: "Kids Hot Chocolate",
        description: "Kids-sized creamy hot chocolate.",
        price: "£3.20",
        badge: "Kids",
      },
      {
        name: "Kids White Hot Chocolate",
        description: "Kids-sized white hot chocolate.",
        price: "£3.20",
        badge: "Kids",
      },
      {
        name: "Kids Nutella Hot Chocolate",
        description: "Kids-sized hot chocolate with Nutella.",
        price: "£4.20",
        badge: "Kids",
      },
      {
        name: "Kids Kinder Inspired Hot Chocolate",
        description: "Kids-sized Kinder-inspired hot chocolate.",
        price: "£4.20",
        badge: "Kids",
      },
    ],
  },
  {
    id: "kids-meals",
    title: "Kids Meals",
    icon: "🍟",
    items: [
      {
        name: "Fish Fingers & Chips + Fruit Shoot",
        description: "Kids fish fingers with chips and a Fruit Shoot included.",
        price: "£5.20",
        badge: "Kids",
      },
      {
        name: "Chicken Nuggets & Chips + Fruit Shoot",
        description: "Kids chicken nuggets with chips and a Fruit Shoot included.",
        price: "£5.20",
        badge: "Kids",
      },
      {
        name: "Fries",
        description: "Kids portion of crispy seasoned fries.",
        price: "£2.50",
        badge: "Kids",
      },
      {
        name: "Margherita Pizza Bagel",
        description: "Kids pizza bagel with tomato sauce and mozzarella.",
        price: "£4.90",
        badge: "Kids",
      },
      {
        name: "Toast Slice",
        description: "Kids slice of buttered toast.",
        price: "£1.20",
        badge: "Kids",
      },
      {
        name: "Beans On Toast",
        description: "Kids baked beans on toast.",
        price: "£2.50",
        badge: "Kids",
      },
    ],
  },
  {
    id: "biscuits",
    title: "Biscuits",
    icon: "🫛",
    items: [
      {
        name: "Bourbon Creams",
        description: "Classic chocolate bourbon cream biscuits.",
        price: "£1.20",
      },
      {
        name: "Custard Creams",
        description: "Classic vanilla custard cream biscuits.",
        price: "£1.20",
      },
      {
        name: "Fruit Shortcake",
        description: "Light fruit shortcake biscuits.",
        price: "£1.20",
      },
      {
        name: "Digestives",
        description: "Classic plain digestive biscuits.",
        price: "£1.20",
      },
      {
        name: "Rich Shorties",
        description: "Buttery rich shortie biscuits.",
        price: "£1.20",
      },
      {
        name: "Ginger Nuts",
        description: "Crispy, spiced ginger nut biscuits.",
        price: "£1.20",
      },
    ],
  },
  {
    id: "add-ons",
    title: "Add-Ons",
    icon: "➕",
    items: [
      {
        name: "Premium Syrup",
        description: "Choose from our range of premium flavour syrups. Ask our team for today's options.",
        price: "+£0.60",
      },
      {
        name: "Oat Milk",
        description: "Plant-based oat milk alternative.",
        price: "+£0.30",
        badge: "Vegan",
      },
      {
        name: "Almond Milk",
        description: "Plant-based almond milk alternative.",
        price: "+£0.30",
        badge: "Vegan",
      },
      {
        name: "Coconut Milk",
        description: "Plant-based coconut milk alternative.",
        price: "+£0.30",
        badge: "Vegan",
      },
      {
        name: "Whipped Cream",
        description: "Add a swirl of whipped cream to any drink.",
        price: "+£0.40",
      },
      {
        name: "Marshmallow",
        description: "Add marshmallows to your drink.",
        price: "+£0.30",
      },
    ],
  },
];
