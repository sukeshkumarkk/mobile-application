import React from 'react';
import {Checkbox, Box, Text} from 'native-base';
import Colors from '../../constants/Colors';
import {SIZES} from '../../utils/Fonts';

const CustomCheckbox = props => {
  const {title, handleOnClick,value} = props;
  return (
    <Box marginTop={SIZES(6)}>
      <Checkbox onChange={handleOnClick}>
        <Text
          fontFamily={'Montserrat-Bold'}
          fontSize={SIZES(13)}
          color={Colors.black}>
          {title}
        </Text>
      </Checkbox>
    </Box>
  );
};

export default CustomCheckbox;
