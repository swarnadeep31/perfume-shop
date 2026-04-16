import axios from "axios";

const API = axios.create({
    baseURL: "https://perfume-shop-1-ke1n.onrender.com",
});

export default API;