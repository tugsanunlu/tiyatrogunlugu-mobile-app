import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import LRUCache from 'lru-cache';
import { APP } from './constants';

const defaultCache = new LRUCache({ maxAge: 1000 * 60 * 60 }); // 1 hour

const API = axios.create({
  baseURL: APP.API_URL,
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
    defaultCache,
  }),
});

export { API };
