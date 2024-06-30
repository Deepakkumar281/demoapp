import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { spacexService1 } from "../services/spacexService";

const LaunchesPage = () => {
  const [rockets, setRockets] = useState();

  useEffect(() => {
    spacexService1.getRockets().then((data) => {
      setRockets(data);
    });
  }, []);

  if (!rockets) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.launchListContainer}>
        {rockets.map((rocket) => (
          <View style={styles.launchCard} key={rocket.id}>
            {rocket?.links && rocket?.links.patch && (
              <View style={styles.image}>
                <Image source={{ uri: rocket?.links.patch.small }} style={styles.imageStyle} />
              </View>
            )}
            <View style={styles.rocketDetails}>
              <Text style={styles.rocketName}>{rocket.name}</Text>
              <Text style={styles.boldText}>
                <Text style={styles.boldText}>Date:</Text> {rocket.date_local}
              </Text>
              <Text style={styles.boldText}>
                <Text style={styles.boldText}>Success:</Text> {rocket.success ? "Yes" : "No"}
              </Text >
              {rocket.failures && rocket.failures.length > 0 && (
                <Text style={styles.boldText}>
                  <Text style={styles.boldText}>Failure Reason:</Text> {rocket.failures[0].reason}
                </Text>
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  launchListContainer: {
    padding: 10,
  },
  launchCard: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  rocketDetails: {
    flex: 1,
    padding: 10,
  },
  rocketName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color:'black'
  },
  boldText: {
    fontWeight: "bold",
    color:'black'
  },
});

export default LaunchesPage;
