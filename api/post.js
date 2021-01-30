import { API } from '../utils/axios';

const getPosts = () => {
  return API.get('/posts');
};

export { getPosts };
