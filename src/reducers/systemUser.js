import { GET_ALL_USER, CREATE_SYSTEM_USER, DELETE_SYSTEM_USER, LOGOUT } from "../constant/actionTypes.js";

const systemUsers = (state = { systemUsers: [] }, action) => {

    switch (action.type) {

        case CREATE_SYSTEM_USER:
            return { ...state, systemUsers: [...state.systemUsers, action.payload] }

        case GET_ALL_USER:
            return { ...state, systemUsers: action?.payload };

        case DELETE_SYSTEM_USER:
            const restAdmin = state.systemUsers.filter((user) => user._id !== action.payload);
            return { ...state, systemUsers: restAdmin }

        case LOGOUT:
            return { ...state, systemUsers: [] };
        default:
            return state;
    }
}
export default systemUsers;