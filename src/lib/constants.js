export const isAuthenticated = true;
export const isAuthor = true;
export const currentUser = {
    id: '001',
    rating: {
        id: '01',
        comment:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci',
        rating: 3,
        rater: {
            name: 'John Doe',
            id: '001'
        },
        likes: ['001'],
        createdAt: '2025/11/01'
    }
};
export const SERVER_API_URL = 'http://127.0.0.1:3001/api';
export const TABS = {
    0: 'ratings',
    1: 'reports'
};

export const MODAL_MODES = {
    0: 'create',
    1: 'edit'
};

export const RECIPE_CATEGORIES = {
    0: 'fish',
    1: 'pork',
    2: 'beef',
    3: 'chicken',
    4: 'vegetable',
    5: 'dessert'
};

export const PATHS = {
    password: { name: 'password', toDisplay: 'Password' },
    profile: { name: 'profile', toDisplay: 'Profile' },
    myRecipes: { name: 'recipes', toDisplay: 'Recipes' },
    archives: { name: 'archives', toDisplay: 'Archives' }
};

export const SUBMENU_HEADERS = {
    0: 'profile',
    1: 'password',
    2: 'chats'
};

export const DEFAULT_RECIPE_STATE = {
    author: {
        name: '',
        userId: ''
    },
    instructions: [],
    ingredients: [],
    categories: [],
    cookTime: {
        hours: 0,
        minutes: 0
    },
    prepTime: {
        hours: 0,
        minutes: 0
    },
    name: '',
    description: '',
    image: null,
    video: null
};

export const DEFAULT_IMAGE = 'https://placehold.co/200x200?font=roboto&text=Recipe';

export const sampleRecipes = [
    {
        author: {
            authorId: '023',
            name: 'john doe'
        },
        name: 'Sinigang na baboy',
        recipeLink: '/recipes/sinigang-na-baboy',
        image: {
            link: 'https://panlasangpinoy.com/wp-content/uploads/2025/07/Ginisang-munggo-with-squash-in-a-pot-257x257.jpg'
        },
        goodForPeopleCount: 3,
        prepTime: { hours: 1, minutes: 40 },
        cookTime: { hours: 1, minutes: 0 },
        categories: [RECIPE_CATEGORIES[0], RECIPE_CATEGORIES[1]],
        description:
            'Thick mung bean stew with calabaza squash, malunggay, spinach, dried shrimp, and crispy pork rinds. A satisfying and nutritious Filipino comfort food perfect with rice.',
        ingredients: [
            { id: 1, name: 'mung beans', quantity: '14', unit: 'ounce/s', isMain: true },
            { id: 2, name: 'calabaza squash cubed', quantity: ' 1', unit: 'lb/s', isMain: false },
            { id: 3, name: 'cup salted dried shrimp hibe', quantity: '1 1/3', unit: 'cup/s', isMain: false },
            { id: 4, name: 'spinach', quantity: '2', unit: 'cup/s', isMain: false },
            { id: 5, name: 'tomatoes diced', quantity: '2', unit: 'cup/s', isMain: false },
            { id: 6, name: 'onion chopped', quantity: '1', unit: 'pc/s', isMain: false },
            { id: 7, name: 'cloves garlic chopped', quantity: '4', unit: 'pc/s', isMain: false },
            { id: 8, name: 'pork rinds chicharon', quantity: '1', unit: 'cup/s', isMain: false },
            { id: 9, name: 'Maggi Magic Sarap', quantity: '8', unit: 'gram/s', isMain: false },
            { id: 10, name: 'fish sauce', quantity: '3', unit: 'tablespoon/s', isMain: false },
            { id: 11, name: 'ground black pepper', quantity: '1/3', unit: 'teaspoon/s', isMain: false },
            { id: 12, name: 'water', quantity: '1 1/3', unit: 'quart/s', isMain: false },
            { id: 13, name: 'cooking oil', quantity: '3', unit: 'tablespoon/s', isMain: false }
        ],
        instructions: [
            {
                id: 1,
                instruction: 'Soak the mung beans in ½ quart water overnight. 14 ounces mung beans, 1 ½ quarts water'
            },
            { id: 2, instruction: 'Heat 3 tablespoons of cooking oil in a deep cooking pot.' },
            {
                id: 3,
                instruction:
                    'Sauté the garlic until it starts to brown. Add the onion and tomato. Continue sautéing until softened.'
            },
            { id: 4, instruction: 'Add the dried shrimp and soaked mung beans. Stir well.' },
            {
                id: 5,
                instruction:
                    'Pour in the fish sauce and 1 quart of water. Cover and simmer until the mung beans are completely soft and the soup develops a thick consistency. Note: Add more water as needed.'
            },
            { id: 6, instruction: 'Add the calabaza squash. Cover and continue cooking until the squash is tender.' },
            { id: 7, instruction: 'Add the malunggay leaves and spinach. Cook for 1 minute.' },
            { id: 8, instruction: 'Season with ground black pepper and Maggi Magic Sarap. Stir well.' },
            { id: 9, instruction: 'Top with crispy chicharon.' },
            { id: 10, instruction: 'Serve hot with fried pork belly and steamed rice.' }
        ],
        topFiveRecentRatings: [
            {
                id: '01',
                comment:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci',
                rating: 3,
                rater: {
                    name: 'John Doe',
                    id: '001'
                },
                likes: ['001'],
                createdAt: '2025/11/01'
            },
            {
                id: '02',
                comment:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci',
                rating: 4,
                rater: {
                    name: 'John Doe',
                    id: '102'
                },
                likes: [],
                createdAt: '2025/11/01'
            },
            {
                id: '03',
                comment:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci',
                rating: 2,
                rater: {
                    name: 'John Doe',
                    id: '103'
                },
                likes: [],
                createdAt: '2025/11/01'
            },
            {
                id: '04',
                comment:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, odio susci',
                rating: 4,
                rater: {
                    name: 'John Doe',
                    id: '104'
                },
                likes: [],
                createdAt: '2025/11/01'
            }
        ]
    },
    {
        author: {
            authorId: '023',
            name: 'john doe'
        },
        name: 'Sinigang na baboy',
        imageSource:
            'https://panlasangpinoy.com/wp-content/uploads/2025/07/Ginisang-munggo-with-squash-in-a-pot-257x257.jpg',
        description:
            'Thick mung bean stew with calabaza squash, malunggay, spinach, dried shrimp, and crispy pork rinds. A satisfying and nutritious Filipino comfort food perfect with rice.'
    },
    {
        author: {
            authorId: '023',
            name: 'john doe'
        },
        name: 'Sinigang na baboy',
        imageSource: 'https://panlasangpinoy.com/wp-content/uploads/2025/07/fried-pork-recipe-257x257.jpg',
        description:
            'Thick mung bean stew with calabaza squash, malunggay, spinach, dried shrimp, and crispy pork rinds. A satisfying and nutritious Filipino comfort food perfect with rice.'
    },
    {
        author: {
            authorId: '023',
            name: 'john doe'
        },
        name: 'Sinigang na baboy',
        imageSource: 'https://panlasangpinoy.com/wp-content/uploads/2025/07/fried-pork-recipe-257x257.jpg',
        description:
            'Thick mung bean stew with calabaza squash, malunggay, spinach, dried shrimp, and crispy pork rinds. A satisfying and nutritious Filipino comfort food perfect with rice.'
    },
    {
        author: {
            authorId: '023',
            name: 'john doe'
        },
        name: 'Sinigang na baboy',
        imageSource:
            'https://panlasangpinoy.com/wp-content/uploads/2025/07/Vietnamese-Fried-Rice-Recipe-with-Sausage-257x257.jpg',
        description:
            'Thick mung bean stew with calabaza squash, malunggay, spinach, dried shrimp, and crispy pork rinds. A satisfying and nutritious Filipino comfort food perfect with rice.'
    },
    {
        author: {
            authorId: '023',
            name: 'john doe'
        },
        name: 'Sinigang na baboy',
        imageSource:
            'https://panlasangpinoy.com/wp-content/uploads/2025/07/Vietnamese-Fried-Rice-Recipe-with-Sausage-257x257.jpg',
        description:
            'Thick mung bean stew with calabaza squash, malunggay, spinach, dried shrimp, and crispy pork rinds. A satisfying and nutritious Filipino comfort food perfect with rice.'
    }
];

export const sampleReports = [
    {
        id: '0001',
        subject: 'troll recipe',
        report: 'Please remove this troll recipe',
        reporter: {
            name: 'John Doe'
        },
        createdAt: '2025/11/01'
    },
    {
        id: '0002',
        subject: 'troll recipe',
        report: 'Please remove this troll recipe',
        reporter: {
            name: 'John Doe'
        },
        createdAt: '2025/11/01'
    }
];
