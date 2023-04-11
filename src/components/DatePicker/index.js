import React from 'react';
import {Box, Input, Text, Image} from 'native-base';
import Colors from '../../constants/Colors';
import {SIZES, height} from '../../utils/Fonts/index';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity} from 'react-native';

const CustomInput = props => {
  const {
    label,
    placeholder,
    showPicker,
    handleOpenPicker,
    handleChangeDatePicker,
    minimumDate
  } = props;
  return (
    <>
      {showPicker && (
        <DateTimePicker
          mode="date"
          minimumDate ={minimumDate}
          value={new Date()}
          onChange={handleChangeDatePicker}
        />
      )}
      <Box marginTop={SIZES(5)}>
        <Text
          textAlign={'justify'}
          fontFamily={'Montserrat-Bold'}
          color={Colors.black}
          fontSize={SIZES(13)}
          marginTop={SIZES(1)}>
          {label}
        </Text>
        <TouchableOpacity onPress={handleOpenPicker}>
          <Box
            borderBottomWidth={SIZES(1.5)}
            borderColor={Colors.lightGrey1}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-Medium'}
              color={Colors.lightGrey3}
              fontSize={SIZES(16)}
              margin={3}>
              {placeholder}
            </Text>
            <Box mr={SIZES(2)}>
              <Image source={require('../../assets/calendar.png')} />
            </Box>
          </Box>
        </TouchableOpacity>
      </Box>
    </>
  );
};

export default CustomInput;
