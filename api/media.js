import { API } from '../utils/axios';

const getMedia = (mediaId) => {
  return API.get(`/media/${mediaId}`);
};

export { getMedia };
