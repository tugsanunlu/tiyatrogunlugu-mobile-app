import { API } from '../utils/axios';

const getPosts = (page) => {
  return API.get('/posts', {
    params: {
      _embed: 1,
      page,
    },
  });
};

const getPostsByCategoryId = ({ page, categoryId }) => {
  return API.get('/posts', {
    params: {
      _embed: 1,
      categories: categoryId,
      page,
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

export { getPosts, getPostById, getPostsByCategoryId };
