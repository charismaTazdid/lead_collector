import * as api from "../api/index.js";
import { LOGIN, ERROR } from "../constant/actionTypes";

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