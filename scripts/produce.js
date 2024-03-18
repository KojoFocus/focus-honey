const productItems = [
    {
    "id": 1,
    "name": "Organic Apples",
    "description": "Fresh, juicy apples grown using organic farming methods .",
    "price": 2.99,
    "image_url": "../assets/pic.jpg",
    "category": "fruits"
    
    },
    {
    "id": 2,
    "name": "Ripe Bananas",
    "description": "Sweet and ripe bananas, perfect for a healthy snack",
    "price": 1.49,
    "image_url": "../assets/pics.jpg",
    "category": "fruits"
    },
    {
    "id": 3,
    "name": "Farm Fresh Eggs",
    "description": "Locally sourced eggs from free-range chickens, rich in nutrients",
    "price": 3.99,
    "image_url": "../assets/pic9.jpg",
    "category": "dairy"
    },
    {
    "id": 4,
    "name": "Organic Spinach",
    "description": "Nutrient-rich spinach leaves grown organically, ideal for salads",
    "price": 2.49,
    "image_url": "../assets/pic8.jpg",
    "category": "vegetables"
    },
    {
    "id": 5,
    "name": "Heirloom Tomatoes",
    "description": "Colorful and flavorful heirloom tomatoes, perfect for sandwiches",
    "price": 4.99,
    "image_url": "../assets/pic7.jpg",
    "category": "vegetables"
    },
    {
    "id": 6,
    "name": "Sweet Corn",
    "description": "Fresh sweet corn picked at peak ripeness, perfect for grilling",
    "price": 0.75,
    "image_url": "../assets/pic6.jpg",
    "category": "vegetables"
    },
    {
    "id": 7,
    "name": "Organic Strawberries",
    "description": "Juicy and sweet organic strawberries, bursting with flavor.",
    "price": 3.99,
    "image_url": "../assets/pic5.jpg",
    "category": "fruits"
    },
    {
    "id": 8,
    "name": "Fresh Basil",
    "description": "Fragrant basil leaves, perfect for adding flavor",
    "price": 1.99,
    "image_url": "../assets/pict.jpg",
    "category": "vegetables"
    },
    {
    "id": 9,
    "name": "Honeycrisp Apples",
    "description": "Crisp and sweet Honeycrisp apples, a favorite for snacking.",
    "price": 3.49,
    "image_url": "../assets/pic8.jpg",
    "category": "fruits"
    },
    {
    "id": 10,
    "name": "Avocados",
    "description": "Creamy avocados, rich in healthy fats and versatile",
    "price": 1.99,
    "image_url": "../assets/pic9.jpg",
    "category": "fruits"
    }
    ]


//     const fruitItems = productItems.filter(item => item.category === "fruits");
// console.log(fruitItems);


productItems.sort((a, b) => b.id - a.id);
console.log(productItems);


