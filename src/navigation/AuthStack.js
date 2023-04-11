import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Intro from '../screens/Intro';
import Otp from '../screens/Otp';
import Register from '../screens/Register';
import SignupSuccess from '../screens/SignupSuccess';
import RaiseServiceSuccess from '../screens/RaiseService/Success';
import DashboardHoc from '../screens/DashboardHoc';
import ServicesDetails from '../screens/ServicesList/Details';
import ServicesDetails1 from '../screens/ServicesList/Details1';
import AssignEmployee from '../screens/AssignEmployee';
import OrderDetails from '../screens/OrderDetails';




const Stack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="SignupSuccess" component={SignupSuccess} />
      <Stack.Screen name="DashboardHoc" component={DashboardHoc} />
      <Stack.Screen
        name="RaiseServiceSuccess"
        component={RaiseServiceSuccess}
      />
      <Stack.Screen name="ServiceDetails" component={ServicesDetails} />
      <Stack.Screen name="ServiceDetails1" component={ServicesDetails1} />
      <Stack.Screen name="AssignEmployee" component={AssignEmployee} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
