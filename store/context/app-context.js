import React, { createContext, useReducer } from 'react';
import { appReducer } from '../reducers/app-reducers';

const initialState = {
  darkMode: true,
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
