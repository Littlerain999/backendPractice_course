const restaurants = [
  {
    id: 1,
    name: "The Spicy Spoon",
    address: "123 Main St, Springfield",
    cuisine: "Indian",
    rating: 4.5,
    menuIds: [101, 102, 103]
  },
  {
    id: 2,
    name: "Green Garden",
    address: "456 Elm St, Rivertown",
    cuisine: "Vegan",
    rating: 4.2,
    menuIds: [104, 105, 106]
  },
  {
    id: 3,
    name: "Bella Pasta",
    address: "789 Oak Ave, Hilltown",
    cuisine: "Italian",
    rating: 4.7,
    menuIds: [107, 108, 109]
  },
  {
    id: 4,
    name: "Burger Binge",
    address: "321 King Blvd, Metro City",
    cuisine: "American",
    rating: 4.0,
    menuIds: [110, 111, 112]
  },
  {
    id: 5,
    name: "Tokyo Bowl",
    address: "654 Cherry Ln, Coastline",
    cuisine: "Japanese",
    rating: 4.6,
    menuIds: [113, 114, 115]
  }
];




const menus = [
  // Indian - The Spicy Spoon
  { id: 101, restaurantId: 1, name: "Butter Chicken", price: 12.99, category: "Main Course", isVegetarian: false },
  { id: 102, restaurantId: 1, name: "Paneer Tikka", price: 10.99, category: "Starter", isVegetarian: true },
  { id: 103, restaurantId: 1, name: "Garlic Naan", price: 2.99, category: "Bread", isVegetarian: true },

  // Vegan - Green Garden
  { id: 104, restaurantId: 2, name: "Quinoa Salad", price: 8.99, category: "Salad", isVegetarian: true },
  { id: 105, restaurantId: 2, name: "Tofu Stir Fry", price: 11.50, category: "Main Course", isVegetarian: true },
  { id: 106, restaurantId: 2, name: "Vegan Brownie", price: 4.75, category: "Dessert", isVegetarian: true },

  // Italian - Bella Pasta
  { id: 107, restaurantId: 3, name: "Spaghetti Carbonara", price: 13.49, category: "Pasta", isVegetarian: false },
  { id: 108, restaurantId: 3, name: "Margherita Pizza", price: 11.99, category: "Pizza", isVegetarian: true },
  { id: 109, restaurantId: 3, name: "Tiramisu", price: 6.50, category: "Dessert", isVegetarian: true },

  // American - Burger Binge
  { id: 110, restaurantId: 4, name: "Double Cheeseburger", price: 9.99, category: "Burger", isVegetarian: false },
  { id: 111, restaurantId: 4, name: "Fries", price: 3.50, category: "Sides", isVegetarian: true },
  { id: 112, restaurantId: 4, name: "Milkshake", price: 4.00, category: "Drink", isVegetarian: true },

  // Japanese - Tokyo Bowl
  { id: 113, restaurantId: 5, name: "Chicken Teriyaki Bowl", price: 12.25, category: "Main Course", isVegetarian: false },
  { id: 114, restaurantId: 5, name: "Miso Soup", price: 2.99, category: "Soup", isVegetarian: true },
  { id: 115, restaurantId: 5, name: "Sushi Platter", price: 14.99, category: "Sushi", isVegetarian: false }
];
