const ACTION_TYPES = {
  LOAD_POSTS: 'LOAD_POSTS',
  INCREASE_PAGE: 'INCREASE_PAGE',
};

const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_POSTS:
      return { ...state, posts: [...state.posts, ...action.posts] };
    case ACTION_TYPES.INCREASE_PAGE:
      return { ...state, page: ++state.page };
    default:
      return state;
  }
};

export { postReducer, ACTION_TYPES };
