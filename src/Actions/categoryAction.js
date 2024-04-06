import { CREATE_CATEGORY } from "../constant/actionTypes.js";
import * as api from "../api/index.js";

export const createCategory = (categoryName) => async (dispatch) => {
    try {
        const { data } = await api.createCategory(categoryName);
        console.log("category created succussfully", data);
        dispatch({ type: CREATE_CATEGORY, payload: data })
    } catch (error) {
        console.log(error)
    }
};


export const getAllCategory = () => async (dispatch) => {
    try {

    } catch (error) {
        console.log(error)
    }
}