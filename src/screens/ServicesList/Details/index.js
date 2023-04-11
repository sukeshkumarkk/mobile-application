import React, {useState, useRef} from 'react';
import {StatusBar, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import {Box, Text, Divider, Card, CardItem, Image} from 'native-base';
import Header from '../../../components/Header';
import Colors from '../../../constants/Colors';
import {SIZES} from '../../../utils/Fonts';
import ActionSheet from 'react-native-actions-sheet';
import CustomInput from '../../../components/Input';
import CustomButton from '../../../components/Button';
const ServicesDetails = props => {
  const [menu, setMenu] = useState(2);
  const [showRejectMenu, setShowRejectMenu] = useState(false);
  const actionSheetRef = useRef(null);

  const ServiceItem = () => {
    return (
      <Card backgroundColor={Colors.white} padding={3} marginTop={SIZES(3)}>
        <Box display={'flex'} flexDirection={'row'}>
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
              width={SIZES(300)}
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
    );
  };

  const openPopup = () => {
    showRejectMenu
      ? props.navigation.navigate('ServiceDetails1')
      : actionSheetRef.current?.show();
  };

  const onClosePopup = () => {
    actionSheetRef.current?.hide();
  };

  const PopupScreen = () => {
    return (
      <Box padding={SIZES(5)}>
        <Box>
          <Text
            fontFamily={'Montserrat-Bold'}
            color={Colors.black}
            fontSize={SIZES(13)}>
            Upload Image
          </Text>
          <Box
            width={SIZES(100)}
            height={SIZES(100)}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            borderWidth={SIZES(1)}
            margin={SIZES(3)}>
            +
          </Box>
        </Box>
        <CustomInput
          label={'Description'}
          placeholder={'Description about the service which was assigned'}
          multiline={true}
        />
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          mt={SIZES(5)}>
          <CustomButton
            title={'Submit'}
            width={SIZES(150)}
            height={SIZES(43)}
            handleOnPress={() => {
              onClosePopup();
              setShowRejectMenu(true);
            }}
          />
        </Box>
      </Box>
    );
  };

  return (
    <>
      <ActionSheet ref={actionSheetRef}>
        <PopupScreen />
      </ActionSheet>
      <Box
        position={'absolute'}
        bottom={SIZES(3)}
        zIndex={999999}
        left={SIZES(3)}
        right={SIZES(3)}>
        <Box backgroundColor={Colors.lightPink} borderRadius={SIZES(10)}>
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems={'center'}>
            <Pressable
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              backgroundColor={menu === 1 ? Colors.primaryColor : undefined}
              width={SIZES(160)}
              padding={SIZES(10)}
              borderRadius={SIZES(15)}
              onPress={() => setMenu(1)}>
              <Text
                fontFamily={'Montserrat-Medium'}
                color={menu === 1 ? Colors.white : Colors.red}
                fontSize={SIZES(15)}>
                {showRejectMenu ? 'Reject' : 'Reopen'}
              </Text>
            </Pressable>
            <Pressable
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              width={SIZES(160)}
              borderRadius={SIZES(15)}
              padding={SIZES(10)}
              backgroundColor={menu === 2 ? Colors.primaryColor : undefined}
              onPress={() => setMenu(2)}>
              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-Medium'}
                color={menu === 2 ? Colors.white : Colors.black}
                fontSize={SIZES(15)}>
                {showRejectMenu ? 'Accept' : 'Completed'}
              </Text>
            </Pressable>
          </Box>
        </Box>
      </Box>
      <StatusBar hidden={false} backgroundColor={Colors.primaryColor} />
      <Header
        title={'SRC00001(UNit-1)'}
        handleGoBack={() => props.navigation.goBack()}
        handleClickFilter={() => {
          console.log('hii');
        }}
        isDashBoard={false}
        from={'serviceDetails'}
      />
      <ScrollView
        style={styles.scrollviewContainer}
        showsVerticalScrollIndicator={false}>
        <Box>
          <Image source={require('../../../assets/slider.png')} />
        </Box>
        <Box>
          <ServiceItem />
        </Box>

        <Box margin={SIZES(50)}>
          <TouchableOpacity onPress={openPopup}>
            <Text>Next screen</Text>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </>
  );
};

export default ServicesDetails;

const styles = {
  scrollviewContainer: {
    flex: 1,
    margin: SIZES(12),
  },
};
