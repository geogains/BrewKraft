export type Review = {
  name: string;
  rating: number;
  text: string;
  highlight: string;
};

// Curated reviews inspired by real review sentiment — do not fabricate specifics
export const reviews: Review[] = [
  {
    name: "Amara K.",
    rating: 5,
    text: "Honestly one of the cosiest spots I've been to in Penkridge. The matcha is absolutely beautiful. Thick, creamy, and perfectly sweetened. I come here most weeks now.",
    highlight: "The matcha is absolutely beautiful.",
  },
  {
    name: "Jordan T.",
    rating: 5,
    text: "The atmosphere here is something else. It's calm, aesthetic, and feels like a little escape. I used to struggle to find a place to work in Penkridge. Cafe 23 sorted that for me.",
    highlight: "A calm, aesthetic little escape.",
  },
  {
    name: "Priya S.",
    rating: 5,
    text: "The Kashmiri chai is incredible. I've never had it done this well locally. Staff were so friendly and welcoming. It genuinely feels like they care.",
    highlight: "The Kashmiri chai is incredible.",
  },
  {
    name: "Liam B.",
    rating: 5,
    text: "Penkridge needed somewhere like this. The Colombian coffee is proper. Strong, smooth, and nothing like you'd get at a chain. The loaded croissants are a must-order.",
    highlight: "Penkridge needed somewhere like this.",
  },
  {
    name: "Sophie M.",
    rating: 5,
    text: "Came in for a catch-up with friends and ended up staying three hours. Beautiful space, gorgeous drinks, and the pastries were fresh and delicious. Highly recommend.",
    highlight: "Beautiful space, gorgeous drinks.",
  },
  {
    name: "Imran H.",
    rating: 4,
    text: "Really great independent café with a lot of personality. The karak chai is spot on. Feels different from anything else in Penkridge. It's got a real community feel to it.",
    highlight: "A real community feel.",
  },
];
