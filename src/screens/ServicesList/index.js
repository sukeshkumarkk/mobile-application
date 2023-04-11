import React, {useState, useRef} from 'react';
import {StatusBar, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {Box, Text, Divider, Card, CardItem, Image} from 'native-base';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import {SIZES} from '../../utils/Fonts';
import ActionSheet from 'react-native-actions-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';

const ServicesList = props => {
  const [showFilters, setShowFilters] = useState(true);
  const actionSheetRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);

  const goToServiceDetails = () => {
    props.navigation.navigate('ServiceDetails');
  };

  const ServiceItem = () => {
    return (
      <TouchableWithoutFeedback onPress={goToServiceDetails}>
        <Card backgroundColor={Colors.white} padding={1} marginTop={SIZES(3)}>
          <Box display={'flex'} flexDirection={'row'}>
            <Box>
              <Image
                source={require('../../assets/cardimage.png')}
                alt={'Card image'}
              />
            </Box>
            <Box ml={SIZES(1)}>
              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-SemiBold'}
                color={Colors.black}
                fontSize={SIZES(15)}>
                SRC00001(Unit-1)
              </Text>
              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-Regular'}
                color={Colors.black}
                fontSize={SIZES(12)}
                mt={SIZES(1)}>
                Department : Electrical
              </Text>
              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-Medium'}
                color={Colors.lightGrey3}
                fontSize={SIZES(10)}
                mt={SIZES(1)}>
                SubLocation: Ricemill-1
              </Text>
              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-Medium'}
                color={Colors.lightGrey3}
                fontSize={SIZES(10)}>
                Due Date: 05-12-2020
              </Text>
              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-Medium'}
                color={Colors.lightGrey3}
                fontSize={SIZES(10)}>
                Followup Date: 05-12-2020
              </Text>
              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-Medium'}
                color={Colors.lightGrey3}
                fontSize={SIZES(10)}>
                Description: Ricemill-1
              </Text>
              <Box
                borderBottomWidth={1}
                borderBottomColor={Colors.lightGrey}
                width={SIZES(210)}
                marginTop={SIZES(5)}
              />
              <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                mt={SIZES(1)}
                mb={SIZES(1)}>
                <Box>
                  <Text
                    textAlign={'justify'}
                    fontFamily={'Montserrat-Medium'}
                    color={Colors.lightGrey3}
                    fontSize={SIZES(9)}
                    width={SIZES(130)}>
                    EMP00001(20-11-2022 13:00)
                  </Text>
                  <Text
                    textAlign={'justify'}
                    fontFamily={'Montserrat-Medium'}
                    color={Colors.primaryColor}
                    fontSize={SIZES(9)}
                    width={SIZES(130)}>
                    2 days ago
                  </Text>
                </Box>

                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-SemiBold'}
                  color={Colors.primaryColor}
                  fontSize={SIZES(11)}>
                  Pending
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
        title={'Raised Service List'}
        handleGoBack={() => props.navigation.goBack()}
        handleClickFilter={onClickFilter}
        isDashBoard={false}
      />
      <ScrollView
        style={styles.scrollviewContainer}
        showsVerticalScrollIndicator={false}>
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <Box margin={SIZES(50)} />
      </ScrollView>
    </>
  );
};

export default ServicesList;

const styles = {
  scrollviewContainer: {
    flex: 1,
    margin: SIZES(12),
  },
};
