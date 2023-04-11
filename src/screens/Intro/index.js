import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Image, StatusBar, Text} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {SIZES, height} from '../../utils/Fonts/index';
import Colors from '../../constants/Colors';
import CustomButton from '../../components/Button';

const Intro = props => {
  const goToLogin = () => {
    props.navigation.navigate('Login');
  };

  const goToRegister = () => {
    props.navigation.navigate('Register');
  };

  return (
    <>
      <StatusBar hidden />
      <LinearGradient
        colors={[Colors.white, Colors.primaryColor30]}
        style={styles.gradientCotainer}>
        <Image
          source={require('../../assets/horizontal_logo.png')}
          width={SIZES(370)}
          height={SIZES(120)}
          alt={'Logo'}
          resizeMode={'contain'}
        />
      </LinearGradient>
      <Box
        display={'flex'}
        justifyContent={'center'}
        backgroundColor={Colors.white}
        alignItems={'center'}>
        <Image
          source={require('../../assets/intro.png')}
          width={SIZES(390)}
          height={SIZES(398)}
          alt={'Intro Image'}
          resizeMode={'contain'}
        />
      </Box>
      <Box
        backgroundColor={Colors.lightGrey}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        padding={SIZES(5)}
        style={styles.footerContainer}>
        <Box display={'flex'} flexDirection={'row'}>
          <CustomButton
            title={'Log In'}
            width={SIZES(135)}
            height={SIZES(43)}
            borderButton={true}
            handleOnPress={goToLogin}
          />
          <CustomButton
            title={'Sign Up'}
            width={SIZES(135)}
            height={SIZES(43)}
            borderButton={false}
            handleOnPress={goToRegister}
          />
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Text
            textAlign={'justify'}
            fontFamily={'Montserrat-Regular'}
            color={Colors.black}
            fontSize={SIZES(12)}
            width={SIZES(265)}
            marginTop={SIZES(1)}>
            By clicking “signup as Employee” you agree to our Mobile Terms and
            Privacy Policy.
          </Text>
        </Box>
      </Box>
    </>
  );
};
export default Intro;

const styles = StyleSheet.create({
  gradientCotainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES(10),
  },
  footerContainer: {
    flexGrow: 1,
  },
});
