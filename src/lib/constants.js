export const isAuthenticated = true;
export const isAuthor = true;
export const currentUser = {
    id: "001",
    rating: {
        id: "01",
        comment:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci",
        rating: 3,
        rater: {
            name: "John Doe",
            id: "001"
        },
        likes: ["001"],
        createdAt: "2025/11/01"
    }
};
export const TABS = {
    0: "ratings",
    1: "reports"
};

export const PATHS = {
    password: { name: "password", toDisplay: "Password" },
    profile: { name: "profile", toDisplay: "Profile" },
    myRecipes: { name: "myRecipes", toDisplay: "My Recipes" },
    archives: { name: "archives", toDisplay: "Archives" }
};

export const sampleRecipes = [
    {
        authorId: "023",
        name: "Sinigang na baboy",
        recipeLink: "/me/myRecipes/sinigang-na-baboy",
        imageSource: "https://panlasangpinoy.com/wp-content/uploads/2025/07/Ginisang-munggo-with-squash-in-a-pot-257x257.jpg",
        goodForPeopleCount: 3,
        description:
            "Thick mung bean stew with calabaza squash, malunggay, spinach, dried shrimp, and crispy pork rinds. A satisfying and nutritious Filipino comfort food perfect with rice.",
        ingredients: [
            { name: "mung beans", quantity: "14", unit: "ounce/s", isMain: true },
            { name: "calabaza squash cubed", quantity: " 1", unit: "lb/s", isMain: false },
            { name: "cup salted dried shrimp hibe", quantity: "1 1/3", unit: "cup/s", isMain: false },
            { name: "spinach", quantity: "2", unit: "cup/s", isMain: false },
            { name: "tomatoes diced", quantity: "2", unit: "cup/s", isMain: false },
            { name: "onion chopped", quantity: "1", unit: "pc/s", isMain: false },
            { name: "cloves garlic chopped", quantity: "4", unit: "pc/s", isMain: false },
            { name: "pork rinds chicharon", quantity: "1", unit: "cup/s", isMain: false },
            { name: "Maggi Magic Sarap", quantity: "8", unit: "gram/s", isMain: false },
            { name: "fish sauce", quantity: "3", unit: "tablespoon/s", isMain: false },
            { name: "ground black pepper", quantity: "1/3", unit: "teaspoon/s", isMain: false },
            { name: "water", quantity: "1 1/3", unit: "quart/s", isMain: false },
            { name: "cooking oil", quantity: "3", unit: "tablespoon/s", isMain: false }
        ],
        instructions: [
            "Soak the mung beans in ½ quart water overnight. 14 ounces mung beans, 1 ½ quarts water",
            "Heat 3 tablespoons of cooking oil in a deep cooking pot.",
            "Sauté the garlic until it starts to brown. Add the onion and tomato. Continue sautéing until softened.",
            "Add the dried shrimp and soaked mung beans. Stir well.",
            "Pour in the fish sauce and 1 quart of water. Cover and simmer until the mung beans are completely soft and the soup develops a thick consistency. Note: Add more water as needed.",
            "Add the calabaza squash. Cover and continue cooking until the squash is tender.",
            "Add the malunggay leaves and spinach. Cook for 1 minute.",
            "Season with ground black pepper and Maggi Magic Sarap. Stir well.",
            "Top with crispy chicharon.",
            "Serve hot with fried pork belly and steamed rice."
        ],
        topFiveRecentRatings: [
            {
                id: "01",
                comment:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci",
                rating: 3,
                rater: {
                    name: "John Doe",
                    id: "001"
                },
                likes: ["001"],
                createdAt: "2025/11/01"
            },
            {
                id: "02",
                comment:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci",
                rating: 4,
                rater: {
                    name: "John Doe",
                    id: "102"
                },
                likes: [],
                createdAt: "2025/11/01"
            },
            {
                id: "03",
                comment:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci",
                rating: 2,
                rater: {
                    name: "John Doe",
                    id: "103"
                },
                likes: [],
                createdAt: "2025/11/01"
            },
            {
                id: "04",
                comment:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci",
                rating: 4,
                rater: {
                    name: "John Doe",
                    id: "104"
                },
                likes: [],
                createdAt: "2025/11/01"
            }
        ]
    },
    {
        name: "Sinigang na baboy",
        imageSource: "https://panlasangpinoy.com/wp-content/uploads/2025/07/Ginisang-munggo-with-squash-in-a-pot-257x257.jpg",
        description:
            "Thick mung bean stew with calabaza squash, malunggay, spinach, dried shrimp, and crispy pork rinds. A satisfying and nutritious Filipino comfort food perfect with rice."
    },
    {
        name: "Sinigang na baboy",
        imageSource: "https://panlasangpinoy.com/wp-content/uploads/2025/07/fried-pork-recipe-257x257.jpg",
        description:
            "Thick mung bean stew with calabaza squash, malunggay, spinach, dried shrimp, and crispy pork rinds. A satisfying and nutritious Filipino comfort food perfect with rice."
    },
    {
        name: "Sinigang na baboy",
        imageSource: "https://panlasangpinoy.com/wp-content/uploads/2025/07/fried-pork-recipe-257x257.jpg",
        description:
            "Thick mung bean stew with calabaza squash, malunggay, spinach, dried shrimp, and crispy pork rinds. A satisfying and nutritious Filipino comfort food perfect with rice."
    },
    {
        name: "Sinigang na baboy",
        imageSource: "https://panlasangpinoy.com/wp-content/uploads/2025/07/Vietnamese-Fried-Rice-Recipe-with-Sausage-257x257.jpg",
        description:
            "Thick mung bean stew with calabaza squash, malunggay, spinach, dried shrimp, and crispy pork rinds. A satisfying and nutritious Filipino comfort food perfect with rice."
    },
    {
        name: "Sinigang na baboy",
        imageSource: "https://panlasangpinoy.com/wp-content/uploads/2025/07/Vietnamese-Fried-Rice-Recipe-with-Sausage-257x257.jpg",
        description:
            "Thick mung bean stew with calabaza squash, malunggay, spinach, dried shrimp, and crispy pork rinds. A satisfying and nutritious Filipino comfort food perfect with rice."
    }
];

export const sampleReports = [
    {
        id: "0001",
        subject: "troll recipe",
        report: "Please remove this troll recipe",
        reporter: {
            name: "John Doe"
        },
        createdAt: "2025/11/01"
    },
    {
        id: "0002",
        subject: "troll recipe",
        report: "Please remove this troll recipe",
        reporter: {
            name: "John Doe"
        },
        createdAt: "2025/11/01"
    }
];
