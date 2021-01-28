import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.70:81' 
    //Change here for the IP from your backend api
});

export default api;