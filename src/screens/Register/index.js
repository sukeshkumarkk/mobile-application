import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { Box, Image, Text, Pressable } from 'native-base';
import { SIZES, height, width } from '../../utils/Fonts/index';
import Colors from '../../constants/Colors';
import CustomInput from '../../components/Input';
import CustomButton from '../../components/Button';
import CustomSelect from '../../components/SelectPicker';
import { Apicontants } from '../../constants/Api';
import { getList, getItems, save } from '../../utils/SharedFunctions/SharedFunctions';
import { useFormValidation } from "../../Validations/UseFormValidations";

const Register = props => {
  const [menu, setMenu] = useState(1);
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data, errors, handleChange, addObject } = useFormValidation({
    // validationSchema: schema,
    // submit: submit
  });

  useEffect(() => {
    getDepartments();
    getLocations();
  }, []);

  const getDepartments = async () => {
    const res = await getList(Apicontants.department.getAll);
    setDepartments(res);
  };

  const getLocations = async () => {
    const res = await getList(Apicontants.location.getAll);
    setLocations(res);
  };

  const registerNow = async () => {
    data['roleId'] = 2
    data['password'] = "123456"
    let res = await save(Apicontants.user.save, data);
    if (res?.data?.status == true) {
      props.navigation.navigate('SignupSuccess');
    }

  };

  return (
    <>
      {isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator color={Colors.primaryColor} size={'large'} />
        </View>
      ) : (
        <Box
          style={styles.container}
          display={'flex'}
          justifyItems={'center'}
          alignItems={'center'}>
          <Image
            source={require('../../assets/horizontal_logo.png')}
            width={SIZES(300)}
            height={SIZES(102)}
            alt={'Logo'}
            resizeMode={'contain'}
          />
          <Text
            textAlign={'justify'}
            fontFamily={'Montserrat-SemiBold'}
            color={Colors.black}
            fontSize={SIZES(18)}
            marginTop={SIZES(3)}>
            Signup Process
          </Text>
          <Box
            width={SIZES(360)}
            height={SIZES(10)}
            marginTop={SIZES(6)}
            backgroundColor={Colors.lightPink}
            borderRadius={SIZES(10)}>
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
                width={SIZES(175)}
                height={SIZES(10)}
                borderRadius={SIZES(15)}
                onPress={() => setMenu(1)}>
                <Text
                  fontFamily={'Montserrat-Medium'}
                  color={menu === 1 ? Colors.white : Colors.black}
                  fontSize={SIZES(15)}>
                  Guest
                </Text>
              </Pressable>
              <Pressable
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                width={SIZES(175)}
                height={SIZES(10)}
                borderRadius={SIZES(15)}
                backgroundColor={menu === 2 ? Colors.primaryColor : undefined}
                onPress={() => setMenu(2)}>
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-Medium'}
                  color={menu === 2 ? Colors.white : Colors.black}
                  fontSize={SIZES(15)}>
                  Employee
                </Text>
              </Pressable>
            </Box>
          </Box>

          <ScrollView style={styles.scrollviewContainer}>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Image
                source={require('../../assets/profile.png')}
                marginTop={SIZES(6)}
                alt={'Profile Image'}
              />
              <Image
                source={require('../../assets/camera.png')}
                marginTop={SIZES(6)}
                alt={'Camera Image'}
                position={'absolute'}
                top={SIZES(12)}
                left={SIZES(width / 2 + 15)}
                zIndex={99999}
              />
            </Box>
            <Box width={SIZES(382)} padding={SIZES(5)}>
              {menu === 2 && (
                <CustomInput
                  label={'Emp code'}
                  placeholder={'Emp code'}
                  value={data?.empCode}
                  handleOnChange={value => handleChange("empCode", value)}
                />
              )}
              <CustomInput
                label={'First name'}
                placeholder={'Enter First Name'}
                value={data?.firstName}
                handleOnChange={value => handleChange("firstName", value)}
              />
              <CustomInput
                label={'Last name'}
                placeholder={'Enter Last Name'}
                value={data?.lastName}
                handleOnChange={value => handleChange("lastName", value)}
              />
              <CustomInput
                label={'Email'}
                placeholder={'Enter Email'}
                value={data?.email}
                handleOnChange={value => handleChange("email", value)}
              />
              <CustomInput
                label={'Mobile'}
                placeholder={'Enter Mobile'}
                value={data?.mobile}
                handleOnChange={value => handleChange("mobile", value)}
              />
              <CustomSelect
                label={'Select Service Department'}
                data={departments}
                handleGetSelectOptions={data => getItems(data, "departmentId", "departmentName", "departmentId")}
                placeholder={'Select Service Department'}
                handleSetSelectValue={value => handleChange("departmentId", value)}
                selectedValue={data?.departmentId}
              />
              <CustomSelect
                label={'Select Location'}
                data={locations}
                handleGetSelectOptions={data => getItems(data, "locationId", "locationName", "locationId")}
                placeholder={'Select Location'}
                handleSetSelectValue={value => handleChange("locationId", value)}
                selectedValue={data?.locationId}
              />
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                mt={SIZES(5)}>
                <CustomButton
                  title={'Sign Up'}
                  width={SIZES(330)}
                  height={SIZES(43)}
                  handleOnPress={registerNow}
                />
              </Box>
            </Box>
          </ScrollView>
        </Box>
      )}
    </>
  );
};

export default Register;
const styles = {
  container: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    paddingTop: SIZES(20),
  },
  scrollviewContainer: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
