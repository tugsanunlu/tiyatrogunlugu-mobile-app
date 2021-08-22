import React, { createContext, useReducer } from 'react';
import { postReducer } from '../reducers/post-reducers';

const initialState = {
  posts: [],
  page: 1,
  category: null,
  isLoader: false,
};

const PostContext = createContext(initialState);

const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContextProvider, PostContext };
