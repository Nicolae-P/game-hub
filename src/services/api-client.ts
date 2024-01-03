import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a61accb047ed45c49d1be6fff29b63f1'
    }
})