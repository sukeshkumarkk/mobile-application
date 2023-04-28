import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RaiseServiceSuccess from '../screens/RaiseService/Success';
import DashboardHoc from '../screens/DashboardHoc';
import ServicesDetails from '../screens/ServicesList/Details';
import EmployeeServiceList from '../screens/ServicesList/EmployeeServiceList';

const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DashboardHoc" component={DashboardHoc} />
      <Stack.Screen
        name="RaiseServiceSuccess"
        component={RaiseServiceSuccess}
      />
      <Stack.Screen name="ServiceDetails" component={ServicesDetails} />
      <Stack.Screen name="EmployeeServiceList" component={EmployeeServiceList} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
