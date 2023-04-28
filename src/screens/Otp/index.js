import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { SIZES, height } from '../../utils/Fonts/index';
import Colors from '../../constants/Colors';
import { Box, Image, Text } from 'native-base';
import CustomButton from '../../components/Button';
import { save } from '../../utils/SharedFunctions/SharedFunctions';
import { Apicontants } from '../../constants/Api';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Otp = (props) => {
  const { mobile, otp } = props?.route?.params;
  const [code, setCode] = useState('')

  const verifyOtp = async () => {
    console.log(code, otp, "code")
    let res = await save(Apicontants.user.validate, { mobile: mobile, otp: otp })
    if (res?.data?.status == true) {
      await AsyncStorage.setItem("user", JSON.stringify(res?.data?.user))
      await AsyncStorage.setItem("token",JSON.stringify(res?.data?.token))
      props.navigation.navigate('DashboardHoc')
    }
  }

  return (
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
        Verification Code
      </Text>
      <Text
        textAlign={'justify'}
        fontFamily={'Montserrat-Medium'}
        color={Colors.black}
        fontSize={SIZES(12)}
        width={SIZES(239)}
        marginTop={SIZES(3)}>
        We have sent a verification code to Your Email to reset your password
      </Text>
      <Box
        marginTop={SIZES(6)}
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}>
        <OTPInputView
          onCodeFilled={(code => {
            setCode(code)
          })}
          pinCount={4}
          style={styles.otpInput}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
        />
        <Box display={'flex'} flexDirection={'row'} alignSelf={'flex-start'}>
          <Text
            textAlign={'justify'}
            fontFamily={'Montserrat-Regular'}
            color={Colors.black}
            fontSize={SIZES(13)}
            marginTop={SIZES(3)}
            marginLeft={SIZES(10)}
          >
            Didn't recieve the code?
          </Text>
          <Text
            textAlign={'justify'}
            fontFamily={'Montserrat-SemiBold'}
            color={Colors.black}
            fontSize={SIZES(14)}
            marginTop={SIZES(3)}
            marginLeft={SIZES(1)}
          >
            Resend it
          </Text>
        </Box>
      </Box>
      <Box marginTop={SIZES(10)}>
        <CustomButton
          title={'Submit'}
          width={SIZES(320)}
          height={SIZES(43)}
          handleOnPress={verifyOtp}
        />
      </Box>
    </Box>
  );
};

export default Otp;

const styles = {
  container: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    paddingTop: SIZES(20),
  },
  otpInput: {
    height: SIZES(100),
    width: SIZES(295),
  },
  underlineStyleBase: {
    width: SIZES(40),
    height: SIZES(40),
    borderWidth: 0,
    borderBottomWidth: SIZES(1),
    borderColor: Colors.black,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.black,
    width: SIZES(40),
    height: SIZES(40),
    borderBottomWidth: SIZES(2),
  },
};
