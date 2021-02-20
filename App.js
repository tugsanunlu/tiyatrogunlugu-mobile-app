import React from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';
import { darkTheme, lightTheme } from './styles/theme';
import {
  useFonts,
  TitilliumWeb_400Regular,
  TitilliumWeb_900Black,
} from '@expo-google-fonts/titillium-web';
import Navigation from './components/Navigation';
import { PostContextProvider } from './store/context/post-context';
import { AppContextProvider, AppContext } from './store/context/app-context';

const App = () => {
  let [fontLoaded] = useFonts({
    TitilliumWeb_400Regular,
    TitilliumWeb_900Black,
  });

  return (
    fontLoaded && (
      <AppContextProvider>
        <PostContextProvider>
          <AppContext.Consumer>
            {(value) =>
              value.state.darkMode ? (
                <ThemeProvider theme={darkTheme}>
                  <Navigation />
                </ThemeProvider>
              ) : (
                <ThemeProvider theme={lightTheme}>
                  <Navigation />
                </ThemeProvider>
              )
            }
          </AppContext.Consumer>
        </PostContextProvider>
      </AppContextProvider>
    )
  );
};

export default App;
