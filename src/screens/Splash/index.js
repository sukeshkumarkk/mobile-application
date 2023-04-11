import React from 'react';
import { ActivityIndicator } from 'react-native';
import {Box, Image, StatusBar} from 'native-base';
import Colors from '../../constants/Colors';
import {SIZES} from '../../utils/Fonts/index';
const Splash = () => {
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
        <ActivityIndicator color={Colors.white} size={'large'}/>
      </Box>
    </>
  );
};

const styles = {
  container: {
    flexGrow: 1,
  },
};

export default Splash;
