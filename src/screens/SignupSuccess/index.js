import React from 'react';
import {Box, Image, StatusBar, Text} from 'native-base';
import Colors from '../../constants/Colors';
import {SIZES} from '../../utils/Fonts/index';
const SignupSuccess = () => {
  return (
    <>
      <StatusBar hidden />
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        backgroundColor={Colors.primaryColor}
        style={styles.container}>
        <Image
          source={require('../../assets/logo.png')}
          alt={'Logo Image'}
          height={SIZES(200)}
          width={SIZES(180)}
          resizeMode={'contain'}
        />
        <Text
          textAlign={'center'}
          fontFamily={'Montserrat-SemiBold'}
          width={SIZES(300)}
          color={Colors.white}
          fontSize={16}>
          We were In process to verify your identity,if you think this is a
          mistake, please contact admin for next steps.
        </Text>
      </Box>
    </>
  );
};

const styles = {
  container: {
    flexGrow: 1,
  },
};

export default SignupSuccess;
