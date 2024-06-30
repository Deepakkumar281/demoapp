import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  FlatList,
  ScrollView,
  TouchableHighlight,
  Image
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Avatar, Button, Card, FAB, IconButton, Text } from 'react-native-paper';
import { useSelector } from '../../redux';
import { useDispatch } from 'react-redux';
import { List, Title, Paragraph } from 'react-native-paper'
import styles from './styles';
import NavigationService from '../../navigation/NavigationService';

import { ListResponse } from '../../models/common/listResponse';
import TemplateList from '../../components/templates/TemplateList';
import { useRoute } from '@react-navigation/native';
import { setScreenUpdated } from '../../redux/screen/actions';
import images from '../../config/images';

const SCREEN_NAME = "LIST_TEMPLATES"
type CompanyData = {
  name: string;
  ceo: string;
  summary: string; // Assuming 'summary' exists in the data
  headquarters: {
    address: string;
    city: string;
    state: string;
  };
  founded: string;
  employees: number;
  links: {
    website: string;
    twitter: string;
    elon_twitter: string;
  };
  launch_sites: number;
  // Add other properties as per your data structure
};
const NewHome: React.FC<any> = ({ navigation }) => {
  const user = useSelector(state => state.userReducer)
  const screen = useSelector(state => state.screenReducer)
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState<ListResponse<any>>()
  const dispatch = useDispatch()

  useEffect(() => {
    navigation.closeDrawer();
    if (screen.screenName === SCREEN_NAME) {
      // onAdded()
      dispatch(setScreenUpdated(""))
    }
  }, [screen.screenName])

  useEffect(() => {
    navigation.closeDrawer();
   
  }, [])
 

  const [companyData, setCompanyData] = useState<CompanyData | null>(null);

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
      <View >
        <Text>Loading...</Text>
      </View>
    );
  }
  const DemoMenu = () => {
    return (
      <View>
                <Title style={{alignSelf:"center", width:"90%", fontWeight:"bold", paddingTop:"5%",textAlign:'center'}}>Welcome to SpaceX Info App</Title>

    <ScrollView style={styles.main}>
    <View>
          <View style={styles.cardview}>
          <View style={{ flexDirection: 'column' }}>
              <TouchableHighlight underlayColor="transparent"
               onPress={
                    () => {
                      NavigationService.navigate('UserApp', {
                        screen: "CrewMembersList",
                      })
                    }
                  }>
                <Card style={styles.card}>
                  <Image
                    resizeMode='contain'
                    source={images.s1}
                    style={{ height: 85, width: 60 }} /></Card>
              </TouchableHighlight>

              <Text style={{ textAlign: "center" }}>Crews</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <TouchableHighlight underlayColor="transparent"
              onPress={
                () => {
                  NavigationService.navigate("UserApp", {
                    screen: "RocketsPage",
                  })
                }
              } >
                 
                <Card style={styles.card}>
               
                  <Image
                    resizeMode='contain'
                    source={images.s2}
                    style={{ height: 85, width: 60 }} />
                   
                </Card>
              
              </TouchableHighlight>

              <Text style={{ textAlign: "center" }}>Rockets</Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
              <TouchableHighlight underlayColor="transparent"
               onPress={
                    () => {
                      NavigationService.navigate('UserApp', {
                        screen: "LaunchesPage",
                      })
                    }
                  }>
                <Card style={styles.card}>
                  <Image
                    resizeMode='contain'
                    source={images.s3}
                    style={{ height: 85, width: 60 }} /></Card>
              </TouchableHighlight>

              <Text style={{ textAlign: "center" }}>Launches</Text>
            </View>
            
          </View>
        </View>
        {companyData && (
          <View style={styles.hero}>
            <Text style={styles.heroText}>{companyData.name}</Text>
            <Text style={styles.hero1}>CEO: {companyData.ceo}</Text>
            <Text style={styles.rocketName1}>{companyData.summary}</Text>
            <Text style={styles.rocketName1}>Headquarters: {companyData.headquarters.address}, {companyData.headquarters.city}, {companyData.headquarters.state}</Text>
            <Text style={styles.rocketName1}>Founded: {companyData.founded}</Text>
          </View>
        )}

        <View style={styles.features}>
          <View style={styles.feature}>
            <Text style={styles.featureText}>Number of Employees</Text>
            <Text style={styles.rocketName1}>{companyData && companyData.employees} employees</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureText}>Number of Launch Sites</Text>
            <Text style={styles.rocketName1}>{companyData.launch_sites}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
    )
  }
 

  const renderMenu = () => {
   
//     if (user.userRoles.includes("Supervisor")) {
//       return supervisorMenu()
//     } else if (user.userRoles.includes("Admin")) {
//       return adminMenu()
//     }
//     else if(user.userRoles.includes('Mechanic')){
// return MachanicMenu()
//     } 
//     else if(user.userRoles.includes('Driver')){
//       return DriverMenu()
//           } 
    

  } 

  return (
    <View style={styles.container}>
        <ScrollView>
         
          {DemoMenu()}
            
        </ScrollView>  

      
          {/* <FAB icon="plus" onPress={addTemplate} style={styles.fab} /> */}
          
         
        {/* {(user.user_roles === 'Admin') &&
          <FAB 
            icon="file"    
            style={styles.fab}
            onPress={addTemplate}
          /> 
        } */}
      </View>
  );
};

export default NewHome;