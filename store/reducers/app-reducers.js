const APP_ACTION_TYPES = {
  TOGGLE_DARK_MODE: 'TOGGLE_DARK_MODE',
  SET_ACTIVE_MENU: 'SET_ACTIVE_MENU',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case APP_ACTION_TYPES.TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    case APP_ACTION_TYPES.SET_ACTIVE_MENU:
      return { ...state, activeMenu: action.activeMenu };

    default:
      return state;
  }
};

export { APP_ACTION_TYPES, appReducer };
