import * as api from "../api/index.js";
import { CREATE_LEAD, GET_ALL_LEAD } from "../constant/actionTypes";

export const createLead = (leadData) => async (dispatch) => {
    try {
        const { data } = await api.createLead(leadData);
        dispatch({ type: CREATE_LEAD, payload: data });
    } catch (error) {
        console.log(error)
    }
}


export const getAllLead = () => async (dispatch) => {
    try {
        const { data } = await api.getAllLead();
        dispatch({ type: GET_ALL_LEAD, payload: data })
    } catch (error) {
        console.log(error)
    }
}