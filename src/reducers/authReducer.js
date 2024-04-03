import { LOGIN, LOGOUT, ERROR } from "../constant/actionTypes.js";

const userData = JSON.parse(localStorage.getItem('profile'));

const authReducer = (state = { authData: userData, isError: false, errorMessage: "" }, action) => {

    switch (action.type) {
        case LOGIN:
            localStorage.setItem('profile', JSON.stringify(action?.data))
            console.log("login succefull")
            return { ...state, authData: action?.data };
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null, errorMessage: "", isError: false };
        case ERROR:
            return { ...state, isError: true, errorMessage: action.payload }
        default:
            return state;
    }
}
export default authReducer;