import React, { useEffect, useState } from 'react';
// lytics from 'appcenter-analytics';
import {
    View,
    Image,
    TouchableOpacity,
    Platform,
    Linking,
    Alert,
    PermissionsAndroid,
    ToastAndroid,
    ImageBackground,
    TextInput,
    Text,
    Dimensions,
    Modal,
    Button,
    StatusBar
} from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import images from '../../config/images';
import { useSelector } from '../../redux';
import { useDispatch } from 'react-redux';
import { deleteCurrentUser } from '../../redux/user/actions';
import { IconButton } from 'react-native-paper';
const CustomDrawerContent: React.FC<any> = ({ navigation }) => {
    const [profileImgUrl, setProfileImgUrl] = useState('');
    const user = useSelector(state => state.userReducer)
    const dispatch = useDispatch()

    const gotoHome = () => {
        //     NavigationService.navigate('UserMainHome')
    }
    const gotoNHome = () => {
        NavigationService.navigate('MainApp', {
            screen: "NewHome"
        })
    }
    const History = () => {
        NavigationService.navigate('History')
    }

    const Templates = () => {

        NavigationService.navigate('UserApp', {
            screen: "Templates"
        })
    }

    const logout = () => {
        dispatch(deleteCurrentUser())
        NavigationService.replace("Auth", {
            screen: "Login"
        })
        navigation.closeDrawer()
    }

    useEffect(() => {
        navigation.closeDrawer();
    }, [])
    return (
        <>
            {/* <StatusBar barStyle='dark-content' /> */}
            <View style={styles.container}>
                <View style={{
                    flex: 0.20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.centerFlex, { flex: 0.3 }]}>
                
                        </View>
                    </View>
                </View>

                <View style={{ flex: 0.80 }}>
                    <KeyboardAwareScrollView style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.closeDrawer();
                            gotoNHome
                        }} style={styles.drawerItemStyle}>
                            <Icon name="home" size={22} style={{ color: "white" }} />
                            <Text style={styles.drawerItemTxt}>Home</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={
                            () => {
                                navigation.closeDrawer()
                                NavigationService.navigate('UserApp', {
                                    screen: "Camera"
                                })
                            }

                        } style={styles.drawerItemStyle}>
                            <Icon name="settings" size={22} style={{ color: "white" }} />
                            <Text style={styles.drawerItemTxt}>Maintenance</Text>
                        </TouchableOpacity> */}

                        {/* <TouchableOpacity onPress={
                            () => {
                                navigation.closeDrawer()
                                NavigationService.navigate('UserApp', {
                                    screen: "Camera"
                                })
                            }

                        } style={styles.drawerItemStyle}>
                            <Icon name="photo-camera" size={22} style={{ color: "white" }} />
                            <Text style={styles.drawerItemTxt}>Scanner</Text>
                        </TouchableOpacity> */}

                        {/* <TouchableOpacity onPress={
                            () => {
                                navigation.closeDrawer()
                                NavigationService.navigate('UserApp', {
                                    screen: "Scanner"
                                })
                            }

                        } style={styles.drawerItemStyle}>
                            <Icon name="qr-code-scanner" size={22} style={{ color: "white" }} />
                            <Text style={styles.drawerItemTxt}>Barcode</Text>
                        </TouchableOpacity>
 */}



                        {/* <TouchableOpacity onPress={
                            () => {
                                navigation.closeDrawer()
                                NavigationService.navigate('UserApp', {
                                    screen: "Changepassword"
                                })
                            }

                        } style={styles.drawerItemStyle}>
                            <Icon name="vpn-key" size={22} style={{ color: "white" }} />
                            <Text style={styles.drawerItemTxt}>Change Password</Text>
                        </TouchableOpacity> */}




                        <TouchableOpacity
                            onPress={logout}
                            style={styles.drawerItemStyle}>
                            <Icon name="logout" size={22} style={{ color: "white" }} />
                            <Text style={styles.drawerItemTxt}>Logout</Text>
                        </TouchableOpacity>

                    </KeyboardAwareScrollView>
                </View>

            </View>
        </>
    );
}


export default CustomDrawerContent;
