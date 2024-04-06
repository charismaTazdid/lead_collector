import { CREATE_CATEGORY, FETCH_ALL_CATEGORY } from "../constant/actionTypes.js";
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
        console.log("I am hit get category")
        const { data } = await api.getAllCategory();
        dispatch({ type: FETCH_ALL_CATEGORY, payload: data })
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}