import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const RocketDetailsPage = () => {
  const route = useRoute();
  const { rocketId } = route.params; // Access the rocketId from route.params
  const [rocket, setRocket] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchRocket = async () => {
      try {
        const response = await fetch(`https://api.spacexdata.com/v4/rockets/${rocketId}`);
        const data = await response.json();
        setRocket(data);
      } catch (error) {
        console.error('Error fetching rocket details:', error);
      }
    };

    fetchRocket();
  }, [rocketId]);

  useEffect(() => {
    // Change the image every 20 seconds if rocket data exists
    if (rocket) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rocket.flickr_images.length);
      }, 20000); // Change every 20 seconds

      return () => clearInterval(intervalId);
    }
  }, [rocket]);

  if (!rocket) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.rocketDetails}>
        <Image
          source={{ uri: rocket.flickr_images[currentImageIndex] }}
          style={styles.rocketImage}
        />
        <Text style={styles.rocketName}>{rocket.name}</Text>
        <Text style={styles.rocketName1}>{rocket.description}</Text>
        <Text style={styles.rocketName1}>Country: {rocket.country}</Text>
        <Text style={styles.rocketName1}>Cost per Launch: ${rocket.cost_per_launch}</Text>
        {/* Add other fields as needed */}

        <View style={styles.additionalInfo}>
          <Text style={styles.detailsHeader}>Details:</Text>
          <Text style={styles.rocketName1}>
            Height: {rocket.height.meters} meters / {rocket.height.feet} feet
          </Text>
          <Text style={styles.rocketName1}>
            Diameter: {rocket.diameter.meters} meters / {rocket.diameter.feet} feet
          </Text>
          <Text style={styles.rocketName1}>Mass: {rocket.mass.kg} kg / {rocket.mass.lb} lb</Text>
          {/* Add other fields as needed */}
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  rocketDetails: {
    padding: 10,
  },
  rocketImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  rocketName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:"center",
    color:"black"
  },
  rocketName1: {
    fontSize: 16,

    color:"black"
  },
  additionalInfo: {
    marginTop: 10,
  },
  detailsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
 
    color:"black"
  },
});

export default RocketDetailsPage;
