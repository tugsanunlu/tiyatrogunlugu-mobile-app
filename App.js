import React from 'react';
import { Provider as ThemeProvider } from 'react-native-paper';
import { View } from 'react-native';
import { theme, styles } from './styles/theme';
import {
  useFonts,
  TitilliumWeb_400Regular,
  TitilliumWeb_700Bold,
} from '@expo-google-fonts/titillium-web';
import Header from './components/Header';
import Navigation from './components/Navigation';

const App = () => {
  let [fontLoaded] = useFonts({
    TitilliumWeb_400Regular,
    TitilliumWeb_700Bold,
  });

  return (
    fontLoaded && (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Header />
        </View>
        <Navigation />
      </ThemeProvider>
    )
  );
};

export default App;
