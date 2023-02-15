import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import MainView from "./screens/MainView";

export default function App() {
  return (
    <SafeAreaProvider style={styles.statusBar}>
      <Appbar.Header>
        <Appbar.Content title="RamenGoGo" />
      </Appbar.Header>
      <MainView />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  statusBar: {
    paddingTop: StatusBar.height,
  },
});
