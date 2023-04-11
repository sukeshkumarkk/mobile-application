import React from 'react';
import {TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Box, Image, Text, Input} from 'native-base';
import {SIZES, height} from '../../utils/Fonts/index';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Header = props => {
  const {
    handleGoBack,
    title,
    isDashboard,
    handleClickFilter,
    from,
    handleLogout,
    isDetails2,
    handleCancelPress
  } = props;
  return (
    <Box
      backgroundColor={Colors.primaryColor}
      height={SIZES(144)}
      borderBottomLeftRadius={SIZES(15)}
      borderBottomRightRadius={SIZES(15)}>
      {!isDashboard ? (
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={
            from === 'serviceDetails' ? undefined : 'space-between'
          }
          padding={SIZES(4)}>
          <TouchableOpacity onPress={handleGoBack}>
            <Image
              source={require('../../assets/back_white.png')}
              alt="Back Image"
            />
          </TouchableOpacity>

          <Text
            textAlign={'center'}
            fontFamily={'Montserrat-SemiBold'}
            color={Colors.white}
            fontSize={SIZES(16)}
            marginLeft={from === 'serviceDetails' ? SIZES(7) : SIZES(0)}>
            {title}
          </Text>
          {from !== 'serviceDetails' && (
            <TouchableWithoutFeedback onPress={handleLogout}>
              <Box
                backgroundColor={from === 'profile' ? undefined : Colors.white}
                pb={SIZES(1)}
                pl={SIZES(1)}
                pr={SIZES(1)}
                justifyContent={'center'}
                alignItems={'center'}>
                <Image
                  source={
                    from === 'profile'
                      ? require('../../assets/logout.png')
                      : require('../../assets/bell.png')
                  }
                  marginTop={SIZES(2)}
                />
              </Box>
            </TouchableWithoutFeedback>
          )}
        </Box>
      ) : (
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'flex-end'}
          padding={SIZES(4)}>
          <Box>
            <Image
              source={require('../../assets/bell.png')}
              marginTop={SIZES(2)}
            />
          </Box>
        </Box>
      )}
      {!isDashboard && from !== 'serviceDetails' && from !== 'profile' ? (
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-evenly'}
          alignItems={'center'}>
          <Input
            borderRadius={SIZES(25)}
            fontSize={SIZES(15)}
            fontFamily={'Montserrat-Regular'}
            placeholder={'Search Here'}
            backgroundColor={Colors.white}
            padding={SIZES(2)}
            placeholderTextColor={Colors.lightGrey2}
            w={{
              base: '75%',
            }}
            InputLeftElement={
              <Icon
                color={Colors.lightGrey3}
                name="search"
                size={SIZES(18)}
                style={{marginLeft: SIZES(15)}}
              />
            }
          />
          <TouchableWithoutFeedback onPress={handleClickFilter}>
            <Image
              source={require('../../assets/filter.png')}
              width={SIZES(9)}
              height={SIZES(9)}
              resizeMode={'contain'}
            />
          </TouchableWithoutFeedback>
        </Box>
      ) : (
        isDetails2 && (
          <Box display={'flex'} flexDirection={'row'} marginLeft={SIZES(2)}>
            <Box>
              <Image
                source={require('../../assets/profile.png')}
                margin={SIZES(1)}
                resizeMode={'contain'}
                alt={'Profile Image'}
              />
              <Pressable onPress={handleCancelPress}>
                <Image
                  source={require('../../assets/cancel.png')}
                  position={'absolute'}
                  bottom={SIZES(0)}
                  right={SIZES(0)}
                />
              </Pressable>
              
            </Box>
            <Box>
              <Image
                source={require('../../assets/profile.png')}
                margin={SIZES(1)}
                resizeMode={'contain'}
                alt={'Profile Image'}
              />
              <Pressable onPress={handleCancelPress}>
                <Image
                  source={require('../../assets/cancel.png')}
                  position={'absolute'}
                  bottom={SIZES(0)}
                  right={SIZES(0)}
                  zIndex={99999}
                />
              </Pressable>
              
            </Box>
          </Box>
        )
      )}

      {!isDashboard && from === 'profile' && (
        <Box display={'flex'} flexDirection={'row'} padding={SIZES(2)}>
          <Image
            source={require('../../assets/profile.png')}
            width={SIZES(16)}
            height={SIZES(16)}
            resizeMode={'contain'}
          />
          <Box marginTop={SIZES(1)}>
            <Text
              fontFamily={'Montserrat-Medium'}
              color={Colors.white}
              fontSize={SIZES(14)}
              marginLeft={SIZES(2)}
              marginTop={SIZES(1)}>
              Vijay
            </Text>
            <Text
              fontFamily={'Montserrat-Medium'}
              color={Colors.white}
              fontSize={SIZES(14)}
              marginTop={SIZES(1)}
              marginLeft={SIZES(2)}
              marginRight={SIZES(2)}>
              9989891918{' '}
              <Icon color={Colors.white} name="pencil" size={SIZES(13)} />
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;

const styles = {};
