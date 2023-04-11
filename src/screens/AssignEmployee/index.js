import React, {useState, useRef} from 'react';
import {
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Switch,
} from 'react-native';
import {Box, Text, Divider, Card, CardItem, Image, Radio} from 'native-base';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import {SIZES, width} from '../../utils/Fonts';
import CustomButton from '../../components/Button';

const ServicesDetails = props => {
  const [menu, setMenu] = useState(1);

  return (
    <>
      <StatusBar hidden={false} backgroundColor={Colors.primaryColor} />
      <Header
        title={'Assign Employee'}
        handleGoBack={() => props.navigation.goBack()}
        handleClickFilter={() => {
          console.log('hii');
        }}
        isDashBoard={false}
        isDetails2={false}
        from={'serviceDetails'}
      />
      <ScrollView
        style={styles.scrollviewContainer}
        showsVerticalScrollIndicator={false}>
        <Box>
          <Box backgroundColor={Colors.lightPink} borderRadius={SIZES(10)}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}>
              <Pressable
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                backgroundColor={menu === 1 ? Colors.primaryColor : undefined}
                width={SIZES(160)}
                padding={SIZES(10)}
                borderRadius={SIZES(15)}
                onPress={() => setMenu(1)}>
                <Text
                  fontFamily={'Montserrat-SemiBold'}
                  color={menu === 1 ? Colors.white : Colors.primaryColor}
                  fontSize={SIZES(14)}>
                  Guest
                </Text>
              </Pressable>
              <Pressable
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                backgroundColor={menu === 2 ? Colors.primaryColor : undefined}
                width={SIZES(160)}
                padding={SIZES(10)}
                borderRadius={SIZES(14)}
                onPress={() => setMenu(2)}>
                <Text
                  fontFamily={'Montserrat-SemiBold'}
                  color={menu === 2 ? Colors.white : Colors.primaryColor}
                  fontSize={SIZES(15)}>
                  Employee
                </Text>
              </Pressable>
            </Box>
          </Box>

          <Box mt={SIZES(2)}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              m={SIZES(3)}>
              <Box
                backgroundColor={Colors.primaryColor}
                width={SIZES(10)}
                height={SIZES(10)}
                borderRadius={SIZES(20)}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Text fontFamily={'Montserrat-Bold'} color={Colors.white}>
                  R
                </Text>
              </Box>
              <Box width={SIZES(100)}>
                <Text fontFamily={'Montserrat-Regular'} fontSize={SIZES(13)}>
                  Rahul
                </Text>
                <Text fontFamily={'Montserrat-Regular'} fontSize={SIZES(13)}>
                  9989891918
                </Text>
              </Box>
              <Box>
                <CustomButton
                  title={'Assign'}
                  width={SIZES(100)}
                  height={SIZES(30)}
                  handleOnPress={() =>
                    props.navigation.navigate('AssignEmployee')
                  }
                />
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              m={SIZES(3)}>
              <Box
                backgroundColor={Colors.primaryColor}
                width={SIZES(10)}
                height={SIZES(10)}
                borderRadius={SIZES(20)}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Text fontFamily={'Montserrat-Bold'} color={Colors.white}>
                  R
                </Text>
              </Box>
              <Box width={SIZES(100)}>
                <Text fontFamily={'Montserrat-Regular'} fontSize={SIZES(13)}>
                  Rahul
                </Text>
                <Text fontFamily={'Montserrat-Regular'} fontSize={SIZES(13)}>
                  9989891918
                </Text>
              </Box>
              <Box>
                <CustomButton
                  title={'Assign'}
                  width={SIZES(100)}
                  height={SIZES(30)}
                  handleOnPress={() =>
                    props.navigation.navigate('AssignEmployee')
                  }
                />
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              m={SIZES(3)}>
              <Box
                backgroundColor={Colors.primaryColor}
                width={SIZES(10)}
                height={SIZES(10)}
                borderRadius={SIZES(20)}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Text fontFamily={'Montserrat-Bold'} color={Colors.white}>
                  R
                </Text>
              </Box>
              <Box width={SIZES(100)}>
                <Text fontFamily={'Montserrat-Regular'} fontSize={SIZES(13)}>
                  Rahul
                </Text>
                <Text fontFamily={'Montserrat-Regular'} fontSize={SIZES(13)}>
                  9989891918
                </Text>
              </Box>
              <Box>
                <CustomButton
                  title={'Assign'}
                  width={SIZES(100)}
                  height={SIZES(30)}
                  handleOnPress={() =>
                    props.navigation.navigate('AssignEmployee')
                  }
                />
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              m={SIZES(3)}>
              <Box
                backgroundColor={Colors.primaryColor}
                width={SIZES(10)}
                height={SIZES(10)}
                borderRadius={SIZES(20)}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Text fontFamily={'Montserrat-Bold'} color={Colors.white}>
                  R
                </Text>
              </Box>
              <Box width={SIZES(100)}>
                <Text fontFamily={'Montserrat-Regular'} fontSize={SIZES(13)}>
                  Rahul
                </Text>
                <Text fontFamily={'Montserrat-Regular'} fontSize={SIZES(13)}>
                  9989891918
                </Text>
              </Box>
              <Box>
                <CustomButton
                  title={'Assign'}
                  width={SIZES(100)}
                  height={SIZES(30)}
                  handleOnPress={() =>
                    props.navigation.navigate('AssignEmployee')
                  }
                />
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              m={SIZES(3)}>
              <Box
                backgroundColor={Colors.primaryColor}
                width={SIZES(10)}
                height={SIZES(10)}
                borderRadius={SIZES(20)}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Text fontFamily={'Montserrat-Bold'} color={Colors.white}>
                  R
                </Text>
              </Box>
              <Box width={SIZES(100)}>
                <Text fontFamily={'Montserrat-Regular'} fontSize={SIZES(13)}>
                  Rahul
                </Text>
                <Text fontFamily={'Montserrat-Regular'} fontSize={SIZES(13)}>
                  9989891918
                </Text>
              </Box>
              <Box>
                <CustomButton
                  title={'Assign'}
                  width={SIZES(100)}
                  height={SIZES(30)}
                  handleOnPress={() =>
                    props.navigation.navigate('AssignEmployee')
                  }
                />
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              m={SIZES(3)}>
              <Box
                backgroundColor={Colors.primaryColor}
                width={SIZES(10)}
                height={SIZES(10)}
                borderRadius={SIZES(20)}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Text fontFamily={'Montserrat-Bold'} color={Colors.white}>
                  R
                </Text>
              </Box>
              <Box width={SIZES(100)}>
                <Text fontFamily={'Montserrat-Regular'} fontSize={SIZES(13)}>
                  Rahul
                </Text>
                <Text fontFamily={'Montserrat-Regular'} fontSize={SIZES(13)}>
                  9989891918
                </Text>
              </Box>
              <Box>
                <CustomButton
                  title={'Assign'}
                  width={SIZES(100)}
                  height={SIZES(30)}
                  handleOnPress={() =>
                    props.navigation.navigate('AssignEmployee')
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box marginBottom={SIZES(90)} marginTop={SIZES(10)}>
          <TouchableOpacity onPress={() => console.log('hii')}>
            <Text textAlign={'center'}>Next screen</Text>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </>
  );
};

export default ServicesDetails;

const styles = {
  scrollviewContainer: {
    flex: 1,
    padding: SIZES(12),
    backgroundColor: Colors.white,
  },
};
