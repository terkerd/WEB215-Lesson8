import axios from "axios";

const instance = axios.create
({
    baseURL: "https://tiktok-backend-clone1.herokuapp.com/",
})

export default instance;