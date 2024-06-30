import React, { useEffect, useState, useRef, useMemo } from 'react';
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
  //TextInput,
  Text,
  Dimensions,
  Modal,
  StyleSheet,
} from 'react-native';
import { TextInput, DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
import NavigationService from '../../navigation/NavigationService';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from 'react-redux';
import styles from './styles';
import AppStyle from '../../config/styles';
import images from '../../config/images';
import CommonTextInput from '../../components/CommonTextInput';
import SubmitNormalButton from '../../components/SubmitNormalButton';
import Loader from '../../components/Loader';

import { setCurrentUser } from '../../redux/user/actions';
import { useSelector } from '../../redux';
import OutlineTextinput from '../../components/OutlineTextinput';
import SubmitGreenButton from '../../components/SubmitGreenButton';
import SocialButton from '../../components/SocialButton';
import SecondaryButton from '../../components/SecondaryButton';
import SubmitButton from '../../components/SubmitButton';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login: React.FC<any> = ({ navigation }) => {
  const pwdRef: any = useRef(null);
  const [secure, setSecure] = useState(true);
  const [emailAddressTxt, setEmailAddressTxt] = useState('');
  const [passwordTxt, setPasswordTxt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  
  // This is a mocked user data for testing purposes.
  const hardcodedUserData = {
    username: 'test',
    password: '12345678', // For testing only, don't store passwords in plain text in production.
  };
  const onLogin = () => {
    if (emailAddressTxt === hardcodedUserData.username && passwordTxt === hardcodedUserData.password) {
      setIsLoading(true);
      setTimeout(() => {
        dispatch(
          setCurrentUser({
            username: emailAddressTxt,
            password: passwordTxt,
          })
        );
        NavigationService.replace('MainApp');
        setIsLoading(false);
      }, 1000); // Simulating a network delay for illustration.
    } else {
      setIsLoading(false);
      showMessage('Invalid login details. Try again.');
    }
  };


  const emailAddress = (value: any) => {
    setEmailAddressTxt(value.trim())
  }
  const password = (value: any) => {
    setPasswordTxt(value.trim())
  }
  const hidPassowrd = () => {
    if (secure == false) {
      setSecure(true)
    }
    else {
      setSecure(false)
    }

  }
  const forgotPasswordBtn = () => {
    NavigationService.navigate('VerifyEmail')
  }

  const showMessage = (message: string) => {
    setTimeout(() => {
      Alert.alert("", message);
    }, 100);
  }


  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView 
        keyboardShouldPersistTaps="always"
        style={styles.container} 
        contentContainerStyle={{ flexGrow: 1 }}> 
      <View style={styles.logs}> 
        <Image
      style={styles.logoImg}
      source={images.s4} />
</View>
          
        
       


        <OutlineTextinput
          mode='outline'
          txtStyle={styles.emailTxt}
          onChangeText={emailAddress}
          placeHolder={"Username"}
          showRightButton={false}
          isSecure={false}          
         
          values={emailAddressTxt}
          returnKeyType='next'
          onSubmitEditing={() => pwdRef.current.focus()}
          otherProps={{
            'textContentType': "username"
          }}
         
        />
        {/* <CommonTextInput
        txtStyle={styles.emailTxt}
        onChangeText={password}

        // onChangeText = {changeTxt(value)}
        placeHolder={"Password"}
        showRightButton={true}
        isSecure={secure}
        values={passwordTxt}
        onPress={hidPassowrd}
      /> */}
        <View style={styles.passwordContainer}>
          <TextInput
          mode='outlined'
            theme={{
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                text: AppStyle.color.COLOR_BLACK,
                primary: AppStyle.color.COLOR_GREY,
                background: AppStyle.color.COLOR_WHITE,
              },
            }}
            label="Password"
            ref={pwdRef}
            selectionColor="#000"
            style={styles.pwdTxt}
            textContentType="password"
            secureTextEntry={secure}
            placeholder={"Password"}
            value={passwordTxt}
            onChangeText={password} />
          <TouchableOpacity style={styles.password}
            onPress={() => {
              setSecure((prev) => !prev)
            }}>
            {secure ?
              (
                <Icon name="eye-off" size={25} color={"#222"}/>
              ) :
              (
                <Icon name="eye" size={25} color={"#222"}/>
              )
            }

          </TouchableOpacity>
        </View>
        {/*
        <TouchableOpacity style={styles.forgotPwd} onPress={forgotPasswordBtn}>
          <Text style={styles.forgotPwdTxt}>Forgot Password?</Text>
        </TouchableOpacity>
          */}

        <SubmitNormalButton
          loading={isLoading}
          title={'Sign In'}
          btnStyle={styles.btnStyle}
          onPress={onLogin}
        />

      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
