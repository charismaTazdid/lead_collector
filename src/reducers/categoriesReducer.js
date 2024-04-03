import { FETCH_ALL_CATEGORY, START_LOADING, END_LOADING, CREATE_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, LOGOUT } from "../constant/actionTypes";

const categoriesReducer = (state = { isLoading: null, categories: [] }, action) => {

    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };

        case END_LOADING:
            return { ...state, isLoading: false };

        case CREATE_CATEGORY:
            return { ...state, categories: [...state.categories, action.payload] };

        case FETCH_ALL_CATEGORY:
            return { ...state, categories: action.payload };

        // case UPDATE_CATEGORY:
        //     const updatedItemIndex = state.categories.findIndex(
        //         (category) => category._id === action.payload._id
        //     );
        //     // Create a new array with the updated item
        //     const updatedCategories = [...state.categories];
        //     updatedCategories[updatedItemIndex] = action.payload;
        //     return { ...state, categories: updatedCategories };

        // case DELETE_CATEGORY:
        //     const newCategories = state.categories.filter((category) => category._id !== action.payload.id)
        //     return { ...state, categories: newCategories };

        case LOGOUT:
            return { ...state, categories: [] };
        default:
            return state;
    };
};
export default categoriesReducer;