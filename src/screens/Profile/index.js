import React, {useState, useRef} from 'react';
import {StatusBar, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import {Box, Text, Divider, Card, CardItem, Image} from 'native-base';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import {SIZES} from '../../utils/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = props => {

  const goToLogout = async () => {
    await AsyncStorage.clear()
    props.navigation.navigate('DashboardHoc')
    // props.navigation.navigate('Login');
  };

  return (
    <>
      <StatusBar hidden={false} backgroundColor={Colors.primaryColor} />
      <Header
        title={'My Profile'}
        handleGoBack={() => props.navigation.goBack()}
        handleClickFilter={() => {
          console.log('hii');
        }}
        handleLogout={goToLogout}
        isDashBoard={false}
        from={'profile'}
      />
      <ScrollView
        style={styles.scrollviewContainer}
        showsVerticalScrollIndicator={false}>
        <Text
          fontFamily={'Montserrat-SemiBold'}
          color={Colors.lightGrey2}
          fontSize={SIZES(14)}
          marginLeft={SIZES(2)}
          marginTop={SIZES(1)}>
          Professional Details
        </Text>
        <Card backgroundColor={Colors.white} padding={3} marginTop={SIZES(3)}>
          <Text
            fontFamily={'Montserrat-Medium'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            EMP Code: EMP00001
          </Text>
          <Text
            fontFamily={'Montserrat-Medium'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            Department: Electrical
          </Text>
          <Text
            fontFamily={'Montserrat-Medium'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            Designation: Electrician
          </Text>
          <Text
            fontFamily={'Montserrat-Medium'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            Location: Unit-II
          </Text>
        </Card>
        <Text
          fontFamily={'Montserrat-SemiBold'}
          color={Colors.lightGrey2}
          fontSize={SIZES(14)}
          marginLeft={SIZES(2)}
          marginTop={SIZES(1)}>
          Roles & Responsibilty
        </Text>
        <Card backgroundColor={Colors.white} padding={3} marginTop={SIZES(3)}>
          <Text
            fontFamily={'Montserrat-SemiBold'}
            color={Colors.lightGrey2}
            fontSize={SIZES(14)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            Individual
          </Text>
          <Text
            fontFamily={'Montserrat-Regular'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            1 To monitor all the activities related to all wheat variety
            purchase.
          </Text>
          <Text
            fontFamily={'Montserrat-Regular'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            2 To give the detils of ordered, intransit & to be shipped or
            transported quantities of wheat to General Manger.
          </Text>
          <Text
            fontFamily={'Montserrat-Regular'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            3 To handle all the disputes that will arrive for the supplied
            quantities of wheat as well as for the to be shipped quantities of
            wheat if any.
          </Text>
          <Text
            fontFamily={'Montserrat-Regular'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            4 To communicate with the vendors for the purchases as well as
            transport related topics in consultation with GM.
          </Text>
          <Text
            fontFamily={'Montserrat-Regular'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            5 To daily monitor the wheat availability in the market & give
            aappropriate feedback to GM so that wheat purchase forecast can be
            planned.
          </Text>

          <Text
            fontFamily={'Montserrat-Regular'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            6 Should ensure timely unloading of the purchased wheat in the
            designated lots & godowns.
          </Text>
        </Card>

        <Card backgroundColor={Colors.white} padding={3} marginTop={SIZES(3)}>
          <Text
            fontFamily={'Montserrat-SemiBold'}
            color={Colors.lightGrey2}
            fontSize={SIZES(14)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            Department
          </Text>
          <Text
            fontFamily={'Montserrat-Regular'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            1 To monitor all the activities related to all wheat variety
            purchase.
          </Text>
          <Text
            fontFamily={'Montserrat-Regular'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            2 To give the detils of ordered, intransit & to be shipped or
            transported quantities of wheat to General Manger.
          </Text>
          <Text
            fontFamily={'Montserrat-Regular'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            3 To handle all the disputes that will arrive for the supplied
            quantities of wheat as well as for the to be shipped quantities of
            wheat if any.
          </Text>
          <Text
            fontFamily={'Montserrat-Regular'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            4 To communicate with the vendors for the purchases as well as
            transport related topics in consultation with GM.
          </Text>
          <Text
            fontFamily={'Montserrat-Regular'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            5 To daily monitor the wheat availability in the market & give
            aappropriate feedback to GM so that wheat purchase forecast can be
            planned.
          </Text>

          <Text
            fontFamily={'Montserrat-Regular'}
            color={Colors.lightGrey2}
            fontSize={SIZES(12)}
            marginLeft={SIZES(2)}
            marginTop={SIZES(1)}>
            6 Should ensure timely unloading of the purchased wheat in the
            designated lots & godowns.
          </Text>
        </Card>

        <Box margin={SIZES(50)} />
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = {
  scrollviewContainer: {
    flex: 1,
    margin: SIZES(12),
  },
};
