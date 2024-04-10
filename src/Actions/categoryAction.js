import { CREATE_CATEGORY, FETCH_ALL_CATEGORY } from "../constant/actionTypes.js";
import * as api from "../api/index.js";

export const createCategory = (categoryName) => async (dispatch) => {
    try {
        const { data } = await api.createCategory(categoryName);
        dispatch({ type: CREATE_CATEGORY, payload: data })
    } catch (error) {
        console.log(error)
    }
};


export const getAllCategory = () => async (dispatch) => {
    try {
        const { data } = await api.getAllCategory();
        dispatch({ type: FETCH_ALL_CATEGORY, payload: data })
    } catch (error) {
        console.log(error)
    }
}