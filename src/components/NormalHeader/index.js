import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Text, Image} from 'native-base';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SIZES, width} from '../../utils/Fonts';

const NormalHeader = props => {
  const {handleGoBack} = props;
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      padding={SIZES(5)}>
      <TouchableOpacity onPress={handleGoBack}>
        <Image source={require('../../assets/back.png')} alt="Back Image" />
      </TouchableOpacity>

      <Text
        textAlign={'center'}
        fontFamily={'Montserrat-SemiBold'}
        color={Colors.black}
        fontSize={SIZES(16)}
        marginLeft={SIZES(20)}>
        Raise A Service
      </Text>
    </Box>
  );
};

export default NormalHeader;
