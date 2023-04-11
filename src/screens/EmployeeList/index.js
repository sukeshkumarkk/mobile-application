import React, {useState, useRef} from 'react';
import {StatusBar, ScrollView, TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import {Box, Text, Divider, Card, CardItem, Image} from 'native-base';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import {SIZES} from '../../utils/Fonts';
import ActionSheet from 'react-native-actions-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

const EmployeeList = props => {
  const [showFilters, setShowFilters] = useState(true);
  const actionSheetRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);

  const goToServiceDetails = () => {
    props.navigation.navigate('ServiceDetails');
  };

  const ProfileItem = () => {
    return (
      <TouchableWithoutFeedback onPress={goToServiceDetails}>
        <Card backgroundColor={Colors.white} padding={1} marginTop={SIZES(3)}>
          <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <Box>
              <Image
                source={require('../../assets/profile.png')}
                alt={'Card image'}
              />
            </Box>
            <Box ml={SIZES(2)} mt={SIZES(2)}>
              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-Regular'}
                color={Colors.black}
                fontSize={SIZES(11)}>
                    EMP0001(Unit-1)
              </Text>
              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-Regular'}
                color={Colors.lightGrey3}
                fontSize={SIZES(10)}>
                    Name: Rahul
              </Text>
              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-Regular'}
                color={Colors.lightGrey3}
                fontSize={SIZES(10)}>
                    Phone: 9999999999
              </Text>
              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-Regular'}
                color={Colors.black}
                fontSize={SIZES(10)}>
                    Department: Electrical
              </Text>
              <Box
                borderBottomWidth={1}
                borderBottomColor={Colors.lightGrey}
                width={SIZES(220)}
                marginTop={SIZES(3)}
              />
              <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                mt={SIZES(2)}
                mb={SIZES(1)}>
                  <Text
                    textAlign={'justify'}
                    fontFamily={'Montserrat-Medium'}
                    color={Colors.lightGrey3}
                    fontSize={SIZES(9)}
                 >
                    Assigned: 12        pending :13        Total: 30
                  </Text>
              </Box>
            </Box>
          </Box>
        </Card>
      </TouchableWithoutFeedback>
    );
  };

  const onClickFilter = () => {
    actionSheetRef.current?.show();
  };

  const changeDatePicker = event => {
    if (event.type == 'set') {
      console.log('hii');
    } else {
      setShowPicker(false);
    }
  };

  const FilterScreen = () => {
    return (
      <Box>
        <Text
          textAlign={'justify'}
          fontFamily={'Montserrat-SemiBold'}
          color={Colors.black}
          fontSize={SIZES(14)}
          margin={SIZES(3)}>
          Filters
        </Text>
        <Divider />
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          margin={SIZES(3)}>
          <Text
            textAlign={'justify'}
            fontFamily={'Montserrat-Regular'}
            color={Colors.black}
            fontSize={SIZES(13)}>
            Departments
          </Text>
          <Icon
            color={Colors.black}
            name="chevron-down"
            size={SIZES(18)}
            style={{marginLeft: SIZES(15)}}
          />
        </Box>
        <Divider />
        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            margin={SIZES(3)}>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-Regular'}
              color={Colors.black}
              fontSize={SIZES(13)}>
              From Date
            </Text>
            <Image
              source={require('../../assets/calendar.png')}
              width={SIZES(5)}
              height={SIZES(5)}
              resizeMode={'contain'}
              alt={'Calendar icon'}
            />
          </Box>
        </TouchableOpacity>

        <Divider />
        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            margin={SIZES(3)}>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-Regular'}
              color={Colors.black}
              fontSize={SIZES(13)}>
              To Date
            </Text>
            <Image
              source={require('../../assets/calendar.png')}
              width={SIZES(5)}
              height={SIZES(5)}
              resizeMode={'contain'}
              alt={'Calendar icon'}
            />
          </Box>
        </TouchableOpacity>

        <Divider />
        <TouchableOpacity onPress={() => setShowPicker(true)}>
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            margin={SIZES(3)}>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-Regular'}
              color={Colors.black}
              fontSize={SIZES(13)}>
              Followup Date
            </Text>
            <Image
              source={require('../../assets/calendar.png')}
              width={SIZES(5)}
              height={SIZES(5)}
              resizeMode={'contain'}
              alt={'Calendar icon'}
            />
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };

  const goToOrderDetails = () => {
    props.navigation.navigate('OrderDetails')
  }

  return (
    <>
      {showPicker && (
        <DateTimePicker
          mode="date"
          value={new Date()}
          onChange={changeDatePicker}
        />
      )}
      <ActionSheet ref={actionSheetRef}>
        <FilterScreen />
      </ActionSheet>
      <StatusBar hidden={false} backgroundColor={Colors.primaryColor} />
      <Header
        title={'Employee List'}
        handleGoBack={() => props.navigation.goBack()}
        handleClickFilter={onClickFilter}
        isDashBoard={false}
      />
      <ScrollView
        style={styles.scrollviewContainer}
        showsVerticalScrollIndicator={false}>
        <ProfileItem />
        <ProfileItem />
        <ProfileItem />
        <ProfileItem />
        <ProfileItem />
        
        <Box margin={SIZES(50)} />
        {/* <Box marginBottom={SIZES(90)} marginTop={SIZES(10)}>
          <TouchableOpacity onPress={goToOrderDetails}>
            <Text textAlign={'center'}>Next screen</Text>
          </TouchableOpacity>
        </Box> */}
      </ScrollView>
    </>
  );
};

export default EmployeeList;

const styles = {
  scrollviewContainer: {
    flex: 1,
    margin: SIZES(12),
  },
};
