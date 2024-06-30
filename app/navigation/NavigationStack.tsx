// Import
import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './NavigationService';
import { StyleSheet, Text, Image, StatusBar } from "react-native";

import Login from '../screens/Login';
import CustomDrawerContent from '../screens/Drawer'
import NHome from '../screens/NewHome';

import { Colors } from 'react-native-paper';
import OnboardingScreen from '../screens/Splash';
//import QRCodeScreen from '../screens/QR/Scanner';
import Dashboardscreen from '../screens/dashboard/dashboard';
import CrewMembersList from '../screens/components/CrewPage';
import HomeApp from '../screens/components/HomePage';
import LaunchesPage from '../screens/components/LaunchesPage';
import RocketDetailsPage from '../screens/components/RocketDetailsPage';
import RocketsPage from '../screens/components/RocketsPage';
//import QR from '../screens/QR/Qr';


const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const UserStack = createStackNavigator();
const UserAppStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const screenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 2,
    height: 60,
    backgroundColor: "#fafafa",
    borderTopColor: "grey"
  },
};
interface IProps {
  theme: Theme;
}

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name="SplashScreen"
        component={OnboardingScreen}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
    </AuthStack.Navigator>
  );
};
const NewHome = () => {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen
        name="NewHome"
        component={NHome}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
    </UserStack.Navigator>
  );
};



const MainApp = () => {
  return (
    <Drawer.Navigator
      drawerContent={(navigation: any) => <CustomDrawerContent {...navigation} />}
    >
      <Drawer.Screen
        name="Newhome"
        options={{
          title: "Home",

          headerStyle: {
            backgroundColor: "#33198f",

          },
          headerTintColor: "white",
        }}
        component={NewHome} />
    </Drawer.Navigator>
  );
}

const UserApp = () => {
  return (
    <UserAppStack.Navigator>
   
       <UserAppStack.Screen
        name="Dashboard"
        component={Dashboardscreen}
        options={{
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: '#33198f',
          },
          headerTintColor: 'white',
        }}
      />
      <UserAppStack.Screen
        name="CrewMembersList"
        component={CrewMembersList}
        options={{
          title: 'Crew Members',
          headerStyle: {
            backgroundColor: '#33198f',
          },
          headerTintColor: 'white',
        }}
      />
      <UserAppStack.Screen
        name="HomeApp"
        component={HomeApp}
        options={{
          title: 'HomeApp',
          headerStyle: {
            backgroundColor: '#33198f',
          },
          headerTintColor: 'white',
        }}
      />
      <UserAppStack.Screen
        name="LaunchesPage"
        component={LaunchesPage}
        options={{
          title: 'Launches',
          headerStyle: {
            backgroundColor: '#33198f',
          },
          headerTintColor: 'white',
        }}
      />
       <UserAppStack.Screen
        name="RocketDetailsPage"
        component={RocketDetailsPage}
        options={{
          title: 'Rocket Details',
          headerStyle: {
            backgroundColor: '#33198f',
          },
          headerTintColor: 'white',
        }}
      />
<UserAppStack.Screen
        name="RocketsPage"
        component={RocketsPage}
        options={{
          title: 'Rockets',
          headerStyle: {
            backgroundColor: '#33198f',
          },
          headerTintColor: 'white',
        }}
      />
    </UserAppStack.Navigator>
  );
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  return (
    <NavigationContainer ref={navigationRef} theme={theme}>

      <StatusBar
        translucent={true}
        backgroundColor={Colors.black} />

      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen
          name='MainApp'
          component={MainApp}
          options={{ headerShown: false, gestureEnabled: false }} />
        <Stack.Screen
          name='UserApp'
          component={UserApp}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabbarStyle: {
    color: "#07245B",
    fontSize: 11,
  },
  unselecttabbarStyle: {
    color: "gray",
    fontSize: 11,
  }
});

export default App;