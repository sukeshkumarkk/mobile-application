import React from 'react';
import {Box, Text, Pressable} from 'native-base';
import Colors from '../../constants/Colors';
import {SIZES} from '../../utils/Fonts';
const CustomButton = props => {
  const {width, height, title, borderButton, handleOnPress} = props;
  return (
    <Pressable
      onPress={handleOnPress}
      width={width}
      height={height}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={borderButton ? Colors.white : Colors.primaryColor}
      borderColor={borderButton ? Colors.primaryColor : Colors.primaryColor}
      borderWidth={SIZES(1)}
      margin={SIZES(3)}
      borderRadius={SIZES(30)}>
      <Text
        fontFamily={'Montserrat-SemiBold'}
        color={borderButton ? Colors.primaryColor : Colors.white}>
        {title}
      </Text>
    </Pressable>
  );
};
export default CustomButton;
