import axios from "axios";

const jwtToken = localStorage.getItem('user') ? (JSON.parse(localStorage.getItem('user'))).accessToken : '';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/v1',
    headers: {
        'Authorization': `Bearer ${jwtToken}`
    }
});

export default instance;