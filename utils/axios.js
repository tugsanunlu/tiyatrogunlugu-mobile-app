import axios from 'axios';
import { APP } from './constants';

const API = axios.create({
  baseURL: APP.API_URL,
});

export { API };
