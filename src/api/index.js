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
export const createUser = () => API.post('/auth/createUser');
export const login = (userData) => API.post("/auth/login", userData);
export const getAllUser = () => API.get('/auth/getAllUser');

// Category
export const createCategory = (categoryName) => API.post("/category/createCategory", { categoryName });
export const getAllCategory = () => API.get("/category/getAllCategory");
// export const deleteCategory = (catId) => API.delete(`/category/delete/${catId}`);

// Leads
export const createLead = (leadData) => API.post("/lead/createLead", leadData);
export const getAllLead = () => API.get("/lead/getAllLead");