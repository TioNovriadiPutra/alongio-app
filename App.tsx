import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
// import AuthRoute from "./src/routes/AuthRoute";
import { useFonts } from "expo-font";
import AppRoute from "./src/routes/AppRoute";

const App = () => {
  const [fontsLoading] = useFonts({
    NunitoSans: require("./assets/fonts/NunitoSans.ttf"),
  });

  if (!fontsLoading) return null;

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <AuthRoute /> */}
        <AppRoute />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
