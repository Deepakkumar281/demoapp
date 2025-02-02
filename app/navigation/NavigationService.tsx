import * as React from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function replace(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack,
  replace
};
