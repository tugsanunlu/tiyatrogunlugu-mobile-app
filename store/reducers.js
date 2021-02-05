const postReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POSTS':
      return { ...state, posts: [...state.posts, ...action.posts] };
    case 'INCREMENT_PAGE':
      return { ...state, page: ++state.page };
    default:
      return state;
  }
};

export { postReducer };
