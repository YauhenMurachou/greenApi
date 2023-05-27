import axios, { AxiosInstance } from 'axios';

export const axiosBase: AxiosInstance = axios.create({
  baseURL:
    'https://api.green-api.com/',
});
