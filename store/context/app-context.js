import React, { createContext, useReducer } from 'react';
import { appReducer } from '../reducers/app-reducers';
import { SCREENS } from '../../utils/constants';

const initialState = {
  darkMode: true,
  activeMenu: SCREENS.POSTS,
};

const AppContext = createContext(initialState);

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
