// src/data/mockDishes.js
export const dishes = [
  {
    id: 1,
    name: "Kadhai Paneer",
    description: "Paneer cubes in spicy onion gravy with capsicum.",
    image: "https://placehold.co/300x200/F7D0B3/422402?text=Kadhai+Paneer",
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomato Puree", quantity: "1 cup" }
    ]
  },
  {
    id: 2,
    name: "Chicken Tikka",
    description: "Spicy grilled chicken tikka served with mint chutney.",
    image: "https://placehold.co/300x200/D8BFD8/4B0082?text=Chicken+Tikka",
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "250g" },
      { name: "Yogurt", quantity: "1 cup" },
      { name: "Spices", quantity: "mixed" }
    ]
  },
  {
    id: 3,
    name: "Gulab Jamun",
    description: "Soft fried balls soaked in sugar syrup.",
    image: "https://placehold.co/300x200/FFDAB9/8B0000?text=Gulab+Jamun",
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Khoya", quantity: "200g" },
      { name: "Sugar Syrup", quantity: "1 cup" }
    ]
  },
  {
    id: 4,
    name: "Jeera Rice",
    description: "Steamed rice flavored with cumin.",
    image: "https://placehold.co/300x200/E6E6FA/2F4F4F?text=Jeera+Rice",
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Rice", quantity: "1 cup" },
      { name: "Cumin Seeds", quantity: "1 tsp" }
    ]
  }
];
