import React from 'react';
import {Box, Input, Text} from 'native-base';
import Colors from '../../constants/Colors';
import {SIZES, height} from '../../utils/Fonts/index';

const CustomInput = props => {
  const {label, placeholder, value, handleOnChange,multiline} = props;
  return (
    <Box marginTop={SIZES(3)}>
      <Text
        textAlign={'justify'}
        fontFamily={'Montserrat-Bold'}
        color={Colors.black}
        fontSize={SIZES(13)}
        marginTop={SIZES(1)}>
        {label}
      </Text>
      <Input
        variant="underlined"
        placeholder={placeholder}
        placeholderTextColor={Colors.lightGrey3}
        fontSize={SIZES(16)}
        fontFamily={'Montserrat-Medium'}
        paddingLeft={SIZES(3)}
        value={value}
        onChangeText={e => handleOnChange(e)}
        multiline={multiline ? multiline : undefined}
        numberOfLines={multiline ? 3 : undefined}
      />
    </Box>
  );
};

export default CustomInput;
