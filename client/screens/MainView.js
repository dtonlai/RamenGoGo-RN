import React from "react";
import { StatusBar, StyleSheet, View, Dimensions, Image } from "react-native";
import { Card, FAB, Text } from "react-native-paper";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import ramen from "../assets/ramen.png";

function MainView() {
  return (
    <View style={styles.container}>
      {/* Start Map Component */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          // image={require("../assets/ramen.png")}
          // width={20}
          // height={20}
        >
          <Image
            source={require("../assets/ramen.png")}
            style={{ height: 35, width: 35 }}
          />
        </Marker>
      </MapView>
      {/* End Map Component */}

      {/*  Start Card Component */}
      <View style={styles.card}>
        <Image
          source={require("../assets/ramen.png")}
          style={{ height: 150, width: 150 }}
        />
        <Text variant="titleLarge">Shoyu Ramen</Text>
      </View>

      {/* End Card Component */}

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}

const statusBarHeight = StatusBar.height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: "50%",
  },
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: Dimensions.get("window").width,
    height: "50%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default MainView;
