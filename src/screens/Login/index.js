import React, { useState } from 'react';
import { Box, Image, Text } from 'native-base';
import { SIZES, height } from '../../utils/Fonts/index';
import Colors from '../../constants/Colors';
import CustomButton from '../../components/Button';
import CustomInput from '../../components/Input';
import CustomCheckbox from '../../components/Checkbox';
import { useFormValidation } from '../../Validations/UseFormValidations';
import { save } from '../../utils/SharedFunctions/SharedFunctions';
import { Apicontants } from '../../constants/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable } from 'react-native';

const Login = (props) => {
  const { data, handleChange } = useFormValidation({});
  const [empForm, setEmpForm] = useState(true);

  const submit = async () => {
    if (empForm) {
      let res = await save(Apicontants.user.login, data);
      if (res?.data?.status == true) {
        await AsyncStorage.setItem('user', JSON.stringify(res?.data?.user));
        await AsyncStorage.setItem('token', JSON.stringify(res?.data?.token));
        props.navigation.navigate('DashboardHoc');
      }
    } else {
      let res = await save(Apicontants.user.sentOtp, data);
      console.log('move to otp', res);
      if (res?.data?.status == true) {
        props.navigation.navigate('Otp', {
          mobile: data?.mobile,
          otp: res?.data?.data?.otp,
        });
      }
    }
  };

  return (
    <>
      <Box
        style={styles.container}
        display={'flex'}
        justifyItems={'center'}
        alignItems={'center'}
      >
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
          marginTop={SIZES(3)}
        >
          Login Account
        </Text>
        <Text
          textAlign={'justify'}
          fontFamily={'Montserrat-Medium'}
          color={Colors.black}
          fontSize={SIZES(12)}
          marginTop={SIZES(3)}
        >
          Hello, Welcome back to Service App
        </Text>
        <Box width={SIZES(370)} padding={SIZES(8)}>
          {empForm ? (
            <>
              <CustomInput
                label={'Emp code'}
                placeHolder={'Emp code'}
                value={data?.code}
                handleOnChange={(value) => handleChange('code', value)}
              />
              <CustomInput
                label={'Enter Password'}
                placeHolder={'Enter Password'}
                value={data?.password}
                handleOnChange={(value) => handleChange('password', value)}
              />
            </>
          ) : (
            <>
              <CustomInput
                label={'Mobile Number'}
                placeHolder={'Enter Mobile Number'}
                value={data?.mobile}
                handleOnChange={(value) => handleChange('mobile', value)}
              />
            </>
          )}
          <CustomCheckbox
            title={'Log With Mobile Number'}
            handleOnClick={() => {
              setEmpForm(!empForm);
            }}
            value={empForm}
          />
        </Box>
        <Box marginTop={SIZES(10)}>
          <CustomButton
            title={'Log In'}
            width={SIZES(320)}
            height={SIZES(43)}
            handleOnPress={submit}
          />
        </Box>
        <Pressable onPress={() => props.navigation.navigate('Register')}>
          <Text
            textAlign={'justify'}
            fontFamily={'Montserrat-SemiBold'}
            color={Colors.black}
            fontSize={SIZES(18)}
            marginTop={SIZES(3)}
          >
            Don't have Account?
          </Text>
        </Pressable>
      </Box>
    </>
  );
};
export default Login;

const styles = {
  container: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    paddingTop: SIZES(20),
  },
};
