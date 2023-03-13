interface CategoriesData {
    id: number;
    name: string;
    title: string;
    image: {
        url: string;
    };
}

interface CategoriesState {
    categoriesList: CategoriesData[];
}

const initialState: CategoriesState = {
    categoriesList: [],
};

export const categoriesReducer = (state = initialState, action: {type: string; payload: []}) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                categoriesList: action.payload,
            };
        default:
            return state;
    }
};
