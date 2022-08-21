import axios from 'axios';
import { base_url } from './configuration';
import { timeout } from './configuration'

const headers = {
        'Content-Type': 'application/json',
    };

const axiosInstance = axios.create({
  baseURL: base_url,
  timeout,
  headers,
});
export default axiosInstance