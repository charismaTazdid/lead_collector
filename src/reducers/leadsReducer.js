import { START_LOADING, END_LOADING, CREATE_LEAD, GET_ALL_LEAD, LOGOUT, DELETE_LEAD } from "../constant/actionTypes";

const leadsReducer = (state = { isLoading: null, leads: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }

        case END_LOADING:
            return { ...state, isLoading: false }

        case CREATE_LEAD:
            return { ...state, leads: [...state.leads, action.payload] }

        case GET_ALL_LEAD:
            return { ...state, leads: action.payload }

        case DELETE_LEAD:
            const restLead = state.leads.filter((item) => item._id !== action.payload)
            return { ...state, leads: restLead }

        default:
            return state;
    }
};

export default leadsReducer;