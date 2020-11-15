import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:5001/clone-7a363/us-central1/api", //The Api {cloud funtion} URL
})
export default instance;