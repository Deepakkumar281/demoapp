import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { spacexService } from '../services/spacexService';
import { useNavigation } from '@react-navigation/native';

const RocketsPage = () => {
  const navigation = useNavigation();

  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    spacexService.getRockets().then((data) => {
      setRockets(data);
      console.log(data, "data");
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.rocketsListContainer}>
        {rockets.map((rocket) => (
          <TouchableOpacity
            key={rocket.id}
            style={styles.rocketCard}
            onPress={() => navigation.navigate('RocketDetailsPage', { rocketId: rocket.id })}
          >
            <Image source={{ uri: rocket.flickr_images[0] }} style={styles.rocketImage} />
            <View style={styles.rocketDetails}>
              <Text style={styles.rocketName}>{rocket.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rocketsListContainer: {
    padding: 10,
  },
  rocketCard: {
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  rocketImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  rocketDetails: {
    padding: 10,
  },
  rocketName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:"center",
    color:"black"
  },
});

export default RocketsPage;
