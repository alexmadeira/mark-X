import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.instagram.com/',
  params: {
    __a: 1,
  },
});

export default api;
