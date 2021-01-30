import { API } from '../utils/axios';

const getPosts = () => {
  return API.get('/posts', {
    params: {
      _embed: 1,
    },
  });
};

const getPostById = (postId) => {
  return API.get(`/posts/${postId}`, {
    params: {
      _embed: 1,
    },
  });
};

export { getPosts, getPostById };
