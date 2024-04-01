import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
// const API = axios.create({ baseURL: "https://stmback.onrender.com" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

// AUTH
export const login = (userData) => API.post("/system_user_auth/login", userData);

// Category
export const createCategory = (categoryName) => API.post("/category/create", { categoryName });
export const getAllCategory = () => API.get("/category/getAll");
export const deleteCategory = (catId) => API.delete(`/category/delete/${catId}`);


// SYSTEM USER
export const createSystemUser = (userData) => API.post(`/system_user_auth/create`, userData)
export const getAllSystemUser = () => API.get('/manage_user/allUser');
export const deleteSystemUser = (id) => API.delete(`/manage_user/delete/${id}`);