import { Provider as ThemeProvider } from "react-native-paper";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Logo from "./components/Logo";
import { theme } from "./styles/theme";
import {
  useFonts,
  TitilliumWeb_400Regular,
  TitilliumWeb_700Bold,
} from "@expo-google-fonts/titillium-web";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

const App = () => {
  let [fontLoaded] = useFonts({
    TitilliumWeb_400Regular,
    TitilliumWeb_700Bold,
  });

  return (
    fontLoaded && (
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Logo />
        </View>
      </ThemeProvider>
    )
  );
};

export default App;
