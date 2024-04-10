import { combineReducers } from "redux";
import auth from './authReducer.js';
import categories from "./categoriesReducer.js";
import leads from "./leadsReducer.js";
import systemUsers from "./systemUser.js";

// auth == authReducer
// categories == cagories Reducer
// leads == leads Reducer

export default combineReducers({ auth, categories, leads, systemUsers });