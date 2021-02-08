import { StyleSheet } from 'react-native';
import { configureFonts, DefaultTheme } from 'react-native-paper';

const fonts = {
  regular: 'TitilliumWeb_400Regular',
  medium: 'TitilliumWeb_900Black',
};

const fontConfig = {
  web: {
    regular: {
      fontFamily: fonts.regular,
    },
    medium: {
      fontFamily: fonts.medium,
    },
  },
  android: {
    regular: {
      fontFamily: fonts.regular,
    },
    medium: {
      fontFamily: fonts.medium,
    },
  },
  ios: {
    regular: {
      fontFamily: fonts.regular,
    },
    medium: {
      fontFamily: fonts.medium,
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#428bca',
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});

export { theme, styles, fonts };
