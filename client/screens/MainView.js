import React, { useState } from "react";
import { StatusBar, StyleSheet, View, Dimensions, Image } from "react-native";
import { Card, Chip, FAB, Text, Banner } from "react-native-paper";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import ramen from "../assets/ramen.png";

function MainView() {
  const [bannerVisible, setBannerVisible] = useState(true);

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
        <View style={styles.cardImage}>
          <Image
            source={require("../assets/ramen.png")}
            style={{ height: 125, width: 125 }}
          />
        </View>

        <View style={styles.cardContent}>
          <Text variant="titleLarge">Menya Musashi</Text>
          <Text variant="bodyMedium">Shoyu Ramen</Text>
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
    height: "100%",
  },
  card: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: Dimensions.get("window").width,
    height: "25%",
    position: "absolute",
    bottom: 0,
    margin: 75,
    borderRadius: 5,
  },
  cardImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-around",
    height: "100%",
  },
  cardRating: {
    flex: 1,
    flexDirection: "row",
  },
  fab: {
    position: "absolute",
    margin: 16,
    // right: 0,
    bottom: 0,
  },
});

export default MainView;
