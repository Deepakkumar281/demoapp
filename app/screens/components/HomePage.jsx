import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, StyleSheet } from 'react-native';
const HomeApp = () => {

  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/company');
        const data = await response.json();
        setCompanyData(data);
        console.log(data, "home");
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchCompanyData();
  }, []);

  if (!companyData) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to SpaceX Info App</Text>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigate("crew-members")}>
            <Text style={styles.navText}>Crews</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("rockets")}>
            <Text style={styles.navText}>Rockets</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("launches")}>
            <Text style={styles.navText}>Launches</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.main}>
        {companyData && (
          <View style={styles.hero}>
            <Text style={styles.heroText}>{companyData.name}</Text>
            <Text>CEO: {companyData.ceo}</Text>
            <Text>{companyData.summary}</Text>
            <Text>Headquarters: {companyData.headquarters.address}, {companyData.headquarters.city}, {companyData.headquarters.state}</Text>
            <Text>Founded: {companyData.founded}</Text>
          </View>
        )}

        <View style={styles.features}>
          <View style={styles.feature}>
            <Text style={styles.featureText}>Number of Employees</Text>
            <Text>{companyData && companyData.employees} employees</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureText}>Company Links</Text>
            <Text>Website: <Text onPress={() => Linking.openURL(companyData?.links.website)} style={styles.link}>{companyData?.links.website}</Text></Text>
            <Text>Twitter: <Text onPress={() => Linking.openURL(companyData?.links.twitter)} style={styles.link}>{companyData?.links.twitter}</Text></Text>
            <Text>Elon Musk's Twitter: <Text onPress={() => Linking.openURL(companyData.links.elon_twitter)} style={styles.link}>{companyData?.links.elon_twitter}</Text></Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureText}>Number of Launch Sites</Text>
            <Text>{companyData.launch_sites}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text>&copy; 2023 Your Website. All rights reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  navText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  main: {
    flex: 1,
    padding: 10,
  },
  hero: {
    marginBottom: 20,
  },
  heroText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  feature: {
    flex: 1,
    marginRight: 10,
  },
  featureText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  footer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
  },
});

export default HomeApp;
