import axios from "axios";

const API = axios.create({
    baseURL: "https://your-backend-url/api",
});

export default API;