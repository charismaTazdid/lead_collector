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
export const createUser = (userData) => API.post('/auth/createUser', userData);
export const login = (userData) => API.post("/auth/login", userData);
export const getAllUser = () => API.get('/auth/getAllUser');  //system User
export const deleteUser = (id) => API.delete(`/auth/deleteUser/${id}`);  //system User


// Category
export const createCategory = (categoryName) => API.post("/category/createCategory", { categoryName });
export const getAllCategory = () => API.get("/category/getAllCategory");
// export const deleteCategory = (catId) => API.delete(`/category/delete/${catId}`);

// Leads
export const createLead = (leadData) => API.post("/lead/createLead", leadData);
export const getAllLead = () => API.get("/lead/getAllLead");