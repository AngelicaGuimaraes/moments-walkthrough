import axios from "axios";

axios.defaults.baseURL = 'https://angel-drf-api.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;