import React from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';
import { theme } from './styles/theme';
import {
  useFonts,
  TitilliumWeb_400Regular,
  TitilliumWeb_900Black,
} from '@expo-google-fonts/titillium-web';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { PostContextProvider } from './store/post-context';

const App = () => {
  let [fontLoaded] = useFonts({
    TitilliumWeb_400Regular,
    TitilliumWeb_900Black,
  });

  return (
    fontLoaded && (
      <PostContextProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <Navigation />
        </ThemeProvider>
      </PostContextProvider>
    )
  );
};

export default App;
