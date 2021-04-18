import { StyleSheet } from 'react-native';
import { configureFonts, DefaultTheme, DarkTheme } from 'react-native-paper';

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

const lightTheme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#428bca',
    background: '#ffffff',
  },
};

const darkTheme = {
  ...DarkTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DarkTheme.colors,
    primary: '#428bca',
    background: '#222222',
  },
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
});

export { lightTheme, darkTheme, styles, fonts };
