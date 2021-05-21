// Build a axiosWithAuth module to create an instance of axios with the authentication header.


import axios from "axios";

import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: 'http//localhost:5000/',       
    });
};