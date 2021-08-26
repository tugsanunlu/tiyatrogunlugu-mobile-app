const POST_ACTION_TYPES = {
  LOAD_POSTS: 'LOAD_POSTS',
  SET_POSTS: 'SET_POSTS',
  CLEAR_POSTS: 'CLEAR_POSTS',
  INCREASE_PAGE: 'INCREASE_PAGE',
  SET_LOADER_TOGGLE: 'SET_LOADER_TOGGLE',
  SET_CATEGORY: 'SET_CATEGORY',
};

const postReducer = (state, action) => {
  switch (action.type) {
    case POST_ACTION_TYPES.SET_LOADER_TOGGLE:
      return { ...state, isLoader: !state.isLoader };
    case POST_ACTION_TYPES.LOAD_POSTS:
      return { ...state, posts: [...state.posts, ...action.posts] };
    case POST_ACTION_TYPES.SET_POSTS:
      return { ...state, posts: action.posts };
    case POST_ACTION_TYPES.CLEAR_POSTS:
      return { ...state, posts: [], page: 1 };
    case POST_ACTION_TYPES.INCREASE_PAGE:
      return { ...state, page: ++state.page };
    case POST_ACTION_TYPES.SET_CATEGORY:
      return { ...state, category: action.category };

    default:
      return state;
  }
};

export { POST_ACTION_TYPES, postReducer };
