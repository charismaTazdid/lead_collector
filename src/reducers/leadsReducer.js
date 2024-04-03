import { START_LOADING, END_LOADING, CREATE_LEAD, GET_ALL_LEAD, LOGOUT } from "../constant/actionTypes";

const leadsReducer = (state = { isLoading: null, leads: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }

        case END_LOADING:
            return { ...state, isLoading: false }

        case CREATE_LEAD:
            return { ...state, leads: [...state.leads, action.payload] }

        case GET_ALL_LEAD:
            return {...state, leads: action.payload}

        default:
            return state;
    }
};

export default leadsReducer;