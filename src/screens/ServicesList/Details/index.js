import React, { useState, useRef, useEffect } from 'react';
import { StatusBar, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { Box, Text, Divider, Card, CardItem, Image } from 'native-base';
import Header from '../../../components/Header';
import Colors from '../../../constants/Colors';
import { SIZES } from '../../../utils/Fonts';
import ActionSheet from 'react-native-actions-sheet';
import CustomInput from '../../../components/Input';
import CustomSelect from '../../../components/SelectPicker';
import CustomButton from '../../../components/Button';
import { getItems, getList, getUserfromAS, save } from '../../../utils/SharedFunctions/SharedFunctions';
import { Apicontants } from '../../../constants/Api';
const ServicesDetails = props => {
  const { values } = props?.route?.params;
  const [menu, setMenu] = useState(2);
  const [showRejectMenu, setShowRejectMenu] = useState(false);
  const actionSheetRef = useRef(null);
  const [employee, setEmployee] = useState([])
  const [data, setdata] = useState({})

  const getAllEmployee = async () => {
    let res = await getList(Apicontants.user.getAllEmployee)
    // setEmployee(res?.filter((v)=>v?.departmentId == values?.departmentId))
    setEmployee(res)
  }

  const assignTask = async () => {
    let assignedBy = await getUserfromAS("userId")
    let body = {
      status: "5",
      reqId: values?.reqId,
      assignedBy: assignedBy,
      assignedUser: data?.userId
    }
    console.log(body, "body")
    let res = await save(Apicontants.service.assign, body)
    console.log(res?.data, "data")
    if(res?.data?.status == true) {
      props.navigation.navigate('ServicesList',{up:Date.now()});
      // props.navigation.goBack()
      // ServiceDetails
    }
    // onClosePopup();
    // setShowRejectMenu(true);
  }

  useEffect(() => {
    getAllEmployee()
  }, [])

  const ServiceItem = ({ values }) => {
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
              Department : {values?.deptName || " - "}
            </Text>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-Medium'}
              color={Colors.lightGrey3}
              fontSize={SIZES(10)}
              mt={SIZES(1)}>
              SubLocation: {values?.sublocationName || ' - '}
            </Text>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-Medium'}
              color={Colors.lightGrey3}
              fontSize={SIZES(10)}>
              Due Date: {values?.dueDate || ' - '}
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
              Description: {values?.notes || ' - '}
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
                  {values?.createdUser || ' - '}
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
                {values?.status}
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

          <CustomSelect
            label={'Select Employee'}
            data={employee}
            handleGetSelectOptions={data => getItems(data, "userId", "name", "userId")}
            placeholder={'Select Employee'}
            handleSetSelectValue={value => setdata({ ...data, "userId": value })}
            selectedValue={data?.userId}
          />
        </Box>
        <Box>
          <Text>Description :</Text>
          <Text
            textAlign={'justify'}
            fontFamily={'Montserrat-SemiBold'}
            color={Colors.black}
            fontSize={SIZES(18)}
            marginTop={SIZES(3)}>
            {values?.notes}
          </Text>
        </Box>
        {/* <Text>{values?.notes}</Text> */}
        {/* <Box>
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
        </Box> */}
        {/* <CustomInput
          label={'Description'}
          placeholder={'Description about the service which was assigned'}
          multiline={true}
        /> */}
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          mt={SIZES(5)}>
          <CustomButton
            title={'Submit'}
            width={SIZES(150)}
            height={SIZES(43)}
            handleOnPress={assignTask}
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
          <ServiceItem values={values} />
        </Box>

        {values?.status == "PENDING" &&
          <Box margin={SIZES(50)}>
            <TouchableOpacity onPress={openPopup}>
              <Text>Assign to USer</Text>
            </TouchableOpacity>
          </Box>
        }
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
