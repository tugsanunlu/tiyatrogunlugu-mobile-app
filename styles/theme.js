import { configureFonts, DefaultTheme } from "react-native-paper";

const fontConfig = {
  web: {
    regular: {
      fontFamily: "TitilliumWeb_400Regular",
    },
    medium: {
      fontFamily: "TitilliumWeb_700Bold",
    },
  },
  android: {
    regular: {
      fontFamily: "TitilliumWeb_400Regular",
    },
    medium: {
      fontFamily: "TitilliumWeb_700Bold",
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

export { theme };
