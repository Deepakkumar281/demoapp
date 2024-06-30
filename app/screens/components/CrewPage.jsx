import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from "react-native";


const CrewMembersList = () => {
  const [crewMembers, setCrewMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrewMembers = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/crew");
        const data = await response.json();
        setCrewMembers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crew members:", error);
      }
    };

    fetchCrewMembers();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {crewMembers.map((member) => (
          <View key={member.id} style={styles.crewMemberCard}>
            <Image style={styles.image} source={{ uri: member.image }} />
            <Text style={styles.name}>{member.name}</Text>
            <Text style={styles.name}>{member.agency}</Text>
            <Text style={styles.name}>Status: {member.status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
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
  crewMemberCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems:'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    color:'black'
  },
  name1: {
    
    color:'black'
  },
  learnMoreLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default CrewMembersList;
