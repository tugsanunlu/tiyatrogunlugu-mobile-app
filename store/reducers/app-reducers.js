const APP_ACTION_TYPES = {
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case APP_ACTION_TYPES.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
};

export { APP_ACTION_TYPES, appReducer };
