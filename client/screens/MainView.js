import React, { useState } from "react";
import { StatusBar, StyleSheet, View, Dimensions, Image } from "react-native";
import { Text, Snackbar } from "react-native-paper";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import ramen from "../assets/ramen.png";

function MainView() {
  const [cardVisible, setCardVisible] = useState(true);

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

      <Snackbar
        style={styles.cardSurface}
        visible={cardVisible}
        onDismiss={() => console.log("Dismiss")}
      >
        <View style={styles.cardContainer}>
          <Image
            style={{ height: 125, width: 125 }}
            source={require("../assets/ramen.png")}
          />
          <View style={styles.cardContent}>
            <Text variant="titleLarge">Menya Musashi</Text>
            <Text variant="bodyMedium">Tsukemen</Text>
            <View style={styles.cardRating}>
              <Image
                source={require("../assets/naruto-black.png")}
                style={{ height: 35, width: 35 }}
              />
              <Image
                source={require("../assets/naruto-black.png")}
                style={{ height: 35, width: 35 }}
              />
              <Image
                source={require("../assets/naruto-black.png")}
                style={{ height: 35, width: 35 }}
              />
              <Image
                source={require("../assets/naruto-black.png")}
                style={{ height: 35, width: 35 }}
              />
              <Image
                source={require("../assets/naruto-black.png")}
                style={{ height: 35, width: 35 }}
              />
            </View>
          </View>
        </View>
      </Snackbar>

      {/* End Card Component */}

      {/* <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log("Pressed")}
      /> */}
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
    height: "100%",
  },
  cardSurface: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 0,
    position: "absolute",
    bottom: 0,
    marginBottom: 75,
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    height: "100%",
  },
  cardRating: {
    display: "flex",
    flexDirection: "row",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default MainView;
