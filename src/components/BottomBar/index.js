import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {SIZES} from '../../utils/Fonts/index';
import Dashboard from '../../screens/Dashboard';
import RaiseService from '../../screens/RaiseService';
import ServicesList from '../../screens/ServicesList';
import Profile from '../../screens/Profile';
import EmployeeList from '../../screens/EmployeeList';
const CustomBottomBar = () => {
  const _renderIcon = (routeName, selectedTab) => {
    console.log(selectedTab);
    let icon = '';
    switch (routeName) {
      case 'home':
        icon = require('../../assets/home.png');
        break;
      case 'ServicesList':
        icon = require('../../assets/notes.png');
        break;
      case 'money':
        icon =
          selectedTab == 'money'
            ? require('../../assets/active_emp.png')
            : require('../../assets/money.png');
        break;
      case 'user':
        icon = require('../../assets/user.png');
        break;
    }
    return (
      <Image source={icon} style={styles.bottomImage} resizeMode={'contain'} />
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.center}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.bottomTabContainer}>
      <CurvedBottomBar.Navigator
        screenOptions={{headerShown: false}}
        style={styles.bottomBar}
        strokeWidth={0.5}
        strokeColor="#DDDDDD"
        height={SIZES(55)}
        circleWidth={SIZES(55)}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({selectedTab, navigate}) => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={styles.center}
              onPress={() => navigate('RaiseService')}>
              <Image
                source={require('../../assets/plus.png')}
                style={styles.middleImage}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          name="home"
          position="LEFT"
          component={Dashboard}
        />
        <CurvedBottomBar.Screen
          name="ServicesList"
          position="LEFT"
          component={ServicesList}
        />
        <CurvedBottomBar.Screen name="RaiseService" component={RaiseService} />
        <CurvedBottomBar.Screen
          name="money"
          position="RIGHT"
          component={EmployeeList}
        />

        <CurvedBottomBar.Screen
          name="user"
          position="RIGHT"
          component={Profile}
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

export default CustomBottomBar;

export const styles = StyleSheet.create({
  bottomTabContainer: {
    flex: 1,
  },
  btnCircle: {
    bottom: SIZES(35),
  },
  bottomImage: {
    width: SIZES(24),
    height: SIZES(24),
  },
  middleImage: {
    width: SIZES(70),
    height: SIZES(70),
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
