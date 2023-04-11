import React from 'react';
import {Box, Image, StatusBar, Text} from 'native-base';
import Colors from '../../../constants/Colors';
import {SIZES} from '../../../utils/Fonts/index';
const RaiseServiceSuccess = () => {
  return (
    <>
      <StatusBar hidden />
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        backgroundColor={Colors.primaryColor}
        style={styles.container}>
        <Text
          textAlign={'center'}
          fontFamily={'Montserrat-SemiBold'}
          width={SIZES(300)}
          color={Colors.white}
          fontSize={16}>
          We were In process to Process your Service Request, It takes 2 to 3
          working days to close the service request
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

export default RaiseServiceSuccess;
