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
