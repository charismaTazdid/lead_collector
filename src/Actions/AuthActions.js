import * as api from "../api/index.js";
import { LOGIN, ERROR, GET_ALL_USER, DELETE_SYSTEM_USER, CREATE_SYSTEM_USER } from "../constant/actionTypes";

export const createNewUser = (userData) => async (dispatch) => {
    try {
        const user = await api.createUser(userData);
        dispatch({ type: CREATE_SYSTEM_USER, payload: user })
    } catch (error) {
        console.log(error)
    }
};

// [POST] login as admin
export const Login = (userData, navigate, setOpenAlert) => async (dispatch) => {
    try {
        const { data } = await api.login(userData)
        dispatch({ type: LOGIN, data });
        navigate("/create-lead");

    } catch (err) {
        dispatch({ type: ERROR, payload: `${err.response.data.status} !  ${err.response.data.message}` })
        setOpenAlert(true)
    }
};

// Delete a system user
export const deleteUser = (id) => async (dispatch) => {
    try {
        const res = await api.deleteUser(id)
        dispatch({ type: DELETE_SYSTEM_USER, payload: id })
    } catch (error) {
        console.log(error)
    }
}
// GET all system user
export const getAllSystemUser = () => async (dispatch) => {
    try {
        const { data } = await api.getAllUser();
        dispatch({ type: GET_ALL_USER, payload: data })
    } catch (error) {
        console.log(error)
    }
};