import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '365e2d07363a42e8acd507e3e3e06404'
    }
})