import axios from 'axios';

const API_URL = (process.env.NODE_ENV === 'production')
    ? ''
    : 'http://localhost:8080';

export const $http = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
});
