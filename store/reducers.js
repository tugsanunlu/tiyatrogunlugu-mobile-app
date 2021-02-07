const POST_ACTION_TYPES = {
  LOAD_POSTS: 'LOAD_POSTS',
  INCREASE_PAGE: 'INCREASE_PAGE',
  SET_LOADER_TOGGLE: 'SET_LOADER_TOGGLE',
};

const postReducer = (state, action) => {
  switch (action.type) {
    case POST_ACTION_TYPES.SET_LOADER_TOGGLE:
      return { ...state, isLoader: !state.isLoader };
    case POST_ACTION_TYPES.LOAD_POSTS:
      return { ...state, posts: [...state.posts, ...action.posts] };
    case POST_ACTION_TYPES.INCREASE_PAGE:
      return { ...state, page: ++state.page };

    default:
      return state;
  }
};

export { postReducer, POST_ACTION_TYPES };
