import { StyleSheet, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import Home from "./app/screens/home";
import { store } from "./app/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    height: "100%",
    width: "90%",
  },
});
