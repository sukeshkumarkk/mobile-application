import React from 'react';
import {Box, Select, Text} from 'native-base';
import Colors from '../../constants/Colors';
import {SIZES} from '../../utils/Fonts/index';

export default function (props) {
  const {
    label,
    data,
    handleGetSelectOptions,
    placeholder,
    selectedValue,
    handleSetSelectValue,
  } = props;

  return (
    <Box marginTop={SIZES(5)}>
      <Text
        textAlign={'justify'}
        fontFamily={'Montserrat-Bold'}
        color={Colors.black}
        fontSize={SIZES(13)}
        marginTop={SIZES(2)}
        marginBottom={SIZES(2)}>
        {label}
      </Text>
      <Select
        placeholder={placeholder ? placeholder : 'Select option'}
        fontFamily={'Montserrat-Medium'}
        fontSize={SIZES(16)}
        selectedValue={selectedValue}
        width={150}
        onValueChange={itemValue => handleSetSelectValue(itemValue)}
        borderTopWidth={0}
        borderLeftWidth={0}
        borderRightWidth={0}
        borderBottomWidth={1.5}
        width={SIZES(312)}
        borderColor={Colors.lightGre2}>
        <Select.Item label="" value="" disabled />
        {handleGetSelectOptions && handleGetSelectOptions(data)}
      </Select>
    </Box>
  );
}
