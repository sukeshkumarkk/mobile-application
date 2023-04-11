import React, {useState, useRef} from 'react';
import {StatusBar, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import {
  Box,
  Text,
  Divider,
  Card,
  CardItem,
  Image,
  Radio,
  Switch,
} from 'native-base';
import Header from '../../../components/Header';
import Colors from '../../../constants/Colors';
import {SIZES, width} from '../../../utils/Fonts';
import CustomButton from '../../../components/Button';

const ServicesDetails = props => {
  const [menu, setMenu] = useState(1);
  const [assignEmployee, setAssignEmployee] = useState(false);
  const [radioValue, setRadioValue] = useState('');
  const [toggle, setToggle] = useState(true);

  const ServiceItem = () => {
    return (
      <Card backgroundColor={Colors.white} padding={3} marginTop={SIZES(3)}>
        <Box display={'flex'} flexDirection={'row'}>
          <Box ml={SIZES(1)}>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-SemiBold'}
              color={Colors.black}
              fontSize={SIZES(15)}>
              SRC00001(Unit-1)
            </Text>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-Regular'}
              color={Colors.black}
              fontSize={SIZES(12)}
              mt={SIZES(1)}>
              Department : Electrical
            </Text>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-Medium'}
              color={Colors.lightGrey3}
              fontSize={SIZES(10)}
              mt={SIZES(1)}>
              SubLocation: Ricemill-1
            </Text>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-Medium'}
              color={Colors.lightGrey3}
              fontSize={SIZES(10)}>
              Due Date: 05-12-2020
            </Text>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-Medium'}
              color={Colors.lightGrey3}
              fontSize={SIZES(10)}>
              Followup Date: 05-12-2020
            </Text>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-Medium'}
              color={Colors.lightGrey3}
              fontSize={SIZES(10)}>
              Description: Ricemill-1
            </Text>
            <Box
              borderBottomWidth={1}
              borderBottomColor={Colors.lightGrey}
              width={SIZES(300)}
              marginTop={SIZES(5)}
            />
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              mt={SIZES(1)}
              mb={SIZES(1)}>
              <Box>
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-Medium'}
                  color={Colors.lightGrey3}
                  fontSize={SIZES(9)}
                  width={SIZES(130)}>
                  EMP00001(20-11-2022 13:00)
                </Text>
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-Medium'}
                  color={Colors.primaryColor}
                  fontSize={SIZES(9)}
                  width={SIZES(130)}>
                  2 days ago
                </Text>
              </Box>

              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-SemiBold'}
                color={Colors.primaryColor}
                fontSize={SIZES(11)}>
                Pending
              </Text>
            </Box>
          </Box>
        </Box>
      </Card>
    );
  };

  const cancelPress = () => {
    alert()
  }

  return (
    <>
      <Box
        position={'absolute'}
        bottom={0}
        zIndex={99999}
        backgroundColor={Colors.white}>
        {!assignEmployee ? (
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-evenly'}
            alignItems={'center'}
            width={'100%'}
            padding={SIZES(2)}
            borderWidth={SIZES(1)}
            borderColor={Colors.black}
            borderRadius={SIZES(15)}>
            <Text
              fontFamily={'Montserrat-Regular'}
              color={Colors.black}
              fontSize={SIZES(10)}
              width={SIZES(130)}>
              unit 1security new cabin wiring purposeunit 1security new cabin
            </Text>
            <Box>
              <Text
                fontFamily={'Montserrat-SemiBold'}
                color={Colors.black}
                fontSize={SIZES(12)}
                textAlign={'center'}>
                Add
              </Text>
              <Text
                fontFamily={'Montserrat-SemiBold'}
                color={Colors.black}
                fontSize={SIZES(12)}
                textAlign={'center'}>
                Comment
              </Text>
            </Box>
            <Image
              source={require('../../../assets/doc.png')}
              width={SIZES(18)}
              height={SIZES(18)}
              resizeMode={'contain'}
            />
          </Box>
        ) : (
          <Box
            borderWidth={SIZES(1)}
            borderColor={Colors.black}
            borderRadius={SIZES(15)}
            width={width}
            padding={SIZES(3)}>
            <Box backgroundColor={'#f4f4f4'} borderRadius={SIZES(15)}>
              <Text
                fontFamily={'Montserrat-Bold'}
                color={Colors.primaryColor}
                textAlign={'center'}
                fontSize={SIZES(12)}
                margin={SIZES(3)}>
                ADD Department /User
              </Text>
            </Box>
            <Box display={'flex'} margin={SIZES(2)}>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={radioValue}
                onChange={nextValue => {
                  setRadioValue(nextValue);
                }}>
                <Radio value="one" m={5} borderColor={Colors.primaryColor}>
                  <Text
                    fontFamily={'Montserrat-Bold'}
                    color={Colors.primaryColor}
                    textAlign={'center'}
                    fontSize={SIZES(14)}>
                    Assign Employee
                  </Text>
                </Radio>
                {radioValue === 'one' && (
                  <Box
                    borderWidth={1}
                    borderRadius={SIZES(5)}
                    width={width - 40}>
                    <Text
                      fontFamily={'Montserrat-Bold'}
                      color={Colors.primaryColor}
                      textAlign={'center'}
                      fontSize={SIZES(14)}
                      padding={SIZES(4)}>
                      Company Employee
                    </Text>
                    <Divider />
                    <Text
                      fontFamily={'Montserrat-Bold'}
                      color={Colors.primaryColor}
                      textAlign={'center'}
                      fontSize={SIZES(14)}
                      padding={SIZES(4)}>
                      Guest Employee
                    </Text>
                  </Box>
                )}

                <Radio value="two" m={5} borderColor={Colors.primaryColor}>
                  <Text
                    fontFamily={'Montserrat-Bold'}
                    color={Colors.primaryColor}
                    textAlign={'center'}
                    fontSize={SIZES(14)}>
                    Assign Employee
                  </Text>
                </Radio>
                {radioValue === 'two' && (
                  <Box
                    borderWidth={1}
                    borderRadius={SIZES(5)}
                    width={width - 40}>
                    <Text
                      fontFamily={'Montserrat-Bold'}
                      color={Colors.primaryColor}
                      textAlign={'center'}
                      fontSize={SIZES(14)}
                      padding={SIZES(3)}>
                      Mechanical
                    </Text>
                    <Divider />
                    <Text
                      fontFamily={'Montserrat-Bold'}
                      color={Colors.primaryColor}
                      textAlign={'center'}
                      fontSize={SIZES(14)}
                      padding={SIZES(3)}>
                      Civil
                    </Text>
                  </Box>
                )}
              </Radio.Group>
              <Box marginTop={SIZES(1)}>
                <CustomButton
                  title={'Next'}
                  height={SIZES(43)}
                  handleOnPress={() =>
                    props.navigation.navigate('AssignEmployee')
                  }
                />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      <StatusBar hidden={false} backgroundColor={Colors.primaryColor} />
      <Header
        title={'SRC00001(UNit-1)'}
        handleGoBack={() => props.navigation.goBack()}
        handleClickFilter={() => {
          console.log('hii');
        }}
        isDashBoard={false}
        isDetails2={true}
        handleCancelPress={cancelPress}
        from={'serviceDetails'}
      />
      <ScrollView
        style={styles.scrollviewContainer}
        showsVerticalScrollIndicator={false}>
        <Box>
          <ServiceItem />
        </Box>
        <Box marginTop={SIZES(5)}>
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
                width={SIZES(105)}
                padding={SIZES(10)}
                borderRadius={SIZES(15)}
                onPress={() => setMenu(1)}>
                <Text
                  fontFamily={'Montserrat-SemiBold'}
                  color={menu === 1 ? Colors.white : Colors.primaryColor}
                  fontSize={SIZES(14)}>
                  Comments
                </Text>
              </Pressable>
              <Pressable
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                backgroundColor={menu === 2 ? Colors.primaryColor : undefined}
                width={SIZES(105)}
                padding={SIZES(10)}
                borderRadius={SIZES(14)}
                onPress={() => setMenu(2)}>
                <Text
                  fontFamily={'Montserrat-SemiBold'}
                  color={menu === 2 ? Colors.white : Colors.primaryColor}
                  fontSize={SIZES(15)}>
                  Images
                </Text>
              </Pressable>
              <Pressable
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                width={SIZES(105)}
                borderRadius={SIZES(15)}
                padding={SIZES(10)}
                backgroundColor={menu === 3 ? Colors.primaryColor : undefined}
                onPress={() => setMenu(3)}>
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-SemiBold'}
                  color={menu === 3 ? Colors.white : Colors.primaryColor}
                  fontSize={SIZES(14)}>
                  Status
                </Text>
              </Pressable>
            </Box>
          </Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'flex-end'}
          mt={SIZES(2)}>
          <Text
            textAlign={'justify'}
            fontFamily={'Montserrat-SemiBold'}
            color={Colors.primaryColor}
            margin={SIZES(1)}>
            Images
          </Text>
          <Switch
            size="md"
            value={toggle}
            onValueChange={value => setToggle(value)}
          />
        </Box>
        {menu === 1 && !toggle && (
          <Box marginTop={SIZES(1)}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              backgroundColor={'#F4F4F4'}
              padding={SIZES(2)}
              borderRadius={SIZES(8)}
              margin={SIZES(2)}
              mt={2}>
              <Image
                source={require('../../../assets/profile.png')}
                width={SIZES(10)}
                height={SIZES(10)}
                resizeMode={'contain'}
              />
              <Box margin={SIZES(1)}>
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-SemiBold'}
                  color={Colors.primaryColor}
                  fontSize={SIZES(12)}>
                  Emp code
                </Text>
                <Text
                  fontFamily={'Montserrat-SemiBold'}
                  color={Colors.black}
                  fontSize={SIZES(12)}>
                  unit 1security new cabin wiring purpose
                </Text>
              </Box>
            </Box>

            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              backgroundColor={'#F4F4F4'}
              padding={SIZES(2)}
              borderRadius={SIZES(8)}
              margin={SIZES(2)}
              mt={2}>
              <Image
                source={require('../../../assets/profile.png')}
                width={SIZES(10)}
                height={SIZES(10)}
                resizeMode={'contain'}
              />
              <Box margin={SIZES(1)}>
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-SemiBold'}
                  color={Colors.primaryColor}
                  fontSize={SIZES(12)}>
                  Emp code
                </Text>
                <Text
                  fontFamily={'Montserrat-SemiBold'}
                  color={Colors.black}
                  fontSize={SIZES(12)}>
                  unit 1security new cabin wiring purpose
                </Text>
              </Box>
            </Box>

            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              backgroundColor={'#F4F4F4'}
              padding={SIZES(2)}
              borderRadius={SIZES(8)}
              margin={SIZES(2)}
              mt={2}>
              <Image
                source={require('../../../assets/profile.png')}
                width={SIZES(10)}
                height={SIZES(10)}
                resizeMode={'contain'}
              />
              <Box margin={SIZES(1)}>
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-SemiBold'}
                  color={Colors.primaryColor}
                  fontSize={SIZES(12)}>
                  Emp code
                </Text>
                <Text
                  fontFamily={'Montserrat-SemiBold'}
                  color={Colors.black}
                  fontSize={SIZES(12)}>
                  unit 1security new cabin wiring purpose
                </Text>
              </Box>
            </Box>

            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              backgroundColor={'#F4F4F4'}
              padding={SIZES(2)}
              borderRadius={SIZES(8)}
              margin={SIZES(2)}
              mt={2}>
              <Image
                source={require('../../../assets/profile.png')}
                width={SIZES(10)}
                height={SIZES(10)}
                resizeMode={'contain'}
              />
              <Box margin={SIZES(1)}>
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-SemiBold'}
                  color={Colors.primaryColor}
                  fontSize={SIZES(12)}>
                  Emp code
                </Text>
                <Text
                  fontFamily={'Montserrat-SemiBold'}
                  color={Colors.black}
                  fontSize={SIZES(12)}>
                  unit 1security new cabin wiring purpose
                </Text>
              </Box>
            </Box>

            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              backgroundColor={'#F4F4F4'}
              padding={SIZES(2)}
              borderRadius={SIZES(8)}
              margin={SIZES(2)}
              mt={2}>
              <Image
                source={require('../../../assets/profile.png')}
                width={SIZES(10)}
                height={SIZES(10)}
                resizeMode={'contain'}
              />
              <Box margin={SIZES(1)}>
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-SemiBold'}
                  color={Colors.primaryColor}
                  fontSize={SIZES(12)}>
                  Emp code
                </Text>
                <Text
                  fontFamily={'Montserrat-SemiBold'}
                  color={Colors.black}
                  fontSize={SIZES(12)}>
                  unit 1security new cabin wiring purpose
                </Text>
              </Box>
            </Box>
          </Box>
        )}

        {menu === 1 && toggle && (
          <>
            <Box backgroundColor={'#F4F4F4'} mt={3}>
              <Box
                display={'flex'}
                flexDirection={'row'}
                padding={SIZES(2)}
                borderRadius={SIZES(8)}
                margin={SIZES(2)}
                mt={2}>
                <Image
                  source={require('../../../assets/profile.png')}
                  width={SIZES(10)}
                  height={SIZES(10)}
                  resizeMode={'contain'}
                />
                <Box margin={SIZES(1)}>
                  <Text
                    textAlign={'justify'}
                    fontFamily={'Montserrat-SemiBold'}
                    color={Colors.primaryColor}
                    fontSize={SIZES(12)}>
                    Emp code
                  </Text>
                  <Box
                    mt={SIZES(2)}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Image
                      source={require('../../../assets/rect.png')}
                      width={SIZES(75)}
                      height={SIZES(75)}
                      resizeMode={'contain'}
                    />
                    <Image
                      source={require('../../../assets/rect.png')}
                      resizeMode={'contain'}
                      width={SIZES(75)}
                      height={SIZES(75)}
                    />
                    <Image
                      source={require('../../../assets/rect.png')}
                      resizeMode={'contain'}
                      width={SIZES(75)}
                      height={SIZES(75)}
                    />
                  </Box>
                  <Box
                    mt={SIZES(2)}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Image
                      source={require('../../../assets/rect.png')}
                      width={SIZES(75)}
                      height={SIZES(75)}
                      resizeMode={'contain'}
                    />
                    <Image
                      source={require('../../../assets/rect.png')}
                      resizeMode={'contain'}
                      width={SIZES(75)}
                      height={SIZES(75)}
                    />
                    <Image
                      source={require('../../../assets/rect.png')}
                      resizeMode={'contain'}
                      width={SIZES(75)}
                      height={SIZES(75)}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                display={'flex'}
                alignItems={'flex-end'}
                justifyContent={'flex-end'}
                mb={SIZES(4)}>
                <Text
                  fontFamily={'Montserrat-Regular'}
                  color={Colors.primaryColor}
                  fontSize={SIZES(12)}>
                  Upload on: 20-10-2022 12:00
                </Text>
              </Box>
            </Box>
            <Box backgroundColor={'#F4F4F4'} mt={3}>
              <Box
                display={'flex'}
                flexDirection={'row'}
                padding={SIZES(2)}
                borderRadius={SIZES(8)}
                margin={SIZES(2)}
                mt={2}>
                <Image
                  source={require('../../../assets/profile.png')}
                  width={SIZES(10)}
                  height={SIZES(10)}
                  resizeMode={'contain'}
                />
                <Box margin={SIZES(1)}>
                  <Text
                    textAlign={'justify'}
                    fontFamily={'Montserrat-SemiBold'}
                    color={Colors.primaryColor}
                    fontSize={SIZES(12)}>
                    Emp code
                  </Text>
                  <Box
                    mt={SIZES(2)}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Image
                      source={require('../../../assets/rect.png')}
                      width={SIZES(75)}
                      height={SIZES(75)}
                      resizeMode={'contain'}
                    />
                    <Image
                      source={require('../../../assets/rect.png')}
                      resizeMode={'contain'}
                      width={SIZES(75)}
                      height={SIZES(75)}
                    />
                    <Image
                      source={require('../../../assets/rect.png')}
                      resizeMode={'contain'}
                      width={SIZES(75)}
                      height={SIZES(75)}
                    />
                  </Box>
                  <Box
                    mt={SIZES(2)}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Image
                      source={require('../../../assets/rect.png')}
                      width={SIZES(75)}
                      height={SIZES(75)}
                      resizeMode={'contain'}
                    />
                    <Image
                      source={require('../../../assets/rect.png')}
                      resizeMode={'contain'}
                      width={SIZES(75)}
                      height={SIZES(75)}
                    />
                    <Image
                      source={require('../../../assets/rect.png')}
                      resizeMode={'contain'}
                      width={SIZES(75)}
                      height={SIZES(75)}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                display={'flex'}
                alignItems={'flex-end'}
                justifyContent={'flex-end'}
                mb={SIZES(4)}>
                <Text
                  fontFamily={'Montserrat-Regular'}
                  color={Colors.primaryColor}
                  fontSize={SIZES(12)}>
                  Upload on: 20-10-2022 12:00
                </Text>
              </Box>
            </Box>
            <Box backgroundColor={'#F4F4F4'} mt={3}>
              <Box
                display={'flex'}
                flexDirection={'row'}
                padding={SIZES(2)}
                borderRadius={SIZES(8)}
                margin={SIZES(2)}
                mt={2}>
                <Image
                  source={require('../../../assets/profile.png')}
                  width={SIZES(10)}
                  height={SIZES(10)}
                  resizeMode={'contain'}
                />
                <Box margin={SIZES(1)}>
                  <Text
                    textAlign={'justify'}
                    fontFamily={'Montserrat-SemiBold'}
                    color={Colors.primaryColor}
                    fontSize={SIZES(12)}>
                    Emp code
                  </Text>
                  <Box
                    mt={SIZES(2)}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Image
                      source={require('../../../assets/rect.png')}
                      width={SIZES(75)}
                      height={SIZES(75)}
                      resizeMode={'contain'}
                    />
                    <Image
                      source={require('../../../assets/rect.png')}
                      resizeMode={'contain'}
                      width={SIZES(75)}
                      height={SIZES(75)}
                    />
                    <Image
                      source={require('../../../assets/rect.png')}
                      resizeMode={'contain'}
                      width={SIZES(75)}
                      height={SIZES(75)}
                    />
                  </Box>
                  <Box
                    mt={SIZES(2)}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Image
                      source={require('../../../assets/rect.png')}
                      width={SIZES(75)}
                      height={SIZES(75)}
                      resizeMode={'contain'}
                    />
                    <Image
                      source={require('../../../assets/rect.png')}
                      resizeMode={'contain'}
                      width={SIZES(75)}
                      height={SIZES(75)}
                    />
                    <Image
                      source={require('../../../assets/rect.png')}
                      resizeMode={'contain'}
                      width={SIZES(75)}
                      height={SIZES(75)}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                display={'flex'}
                alignItems={'flex-end'}
                justifyContent={'flex-end'}
                mb={SIZES(4)}>
                <Text
                  fontFamily={'Montserrat-Regular'}
                  color={Colors.primaryColor}
                  fontSize={SIZES(12)}>
                  Upload on: 20-10-2022 12:00
                </Text>
              </Box>
            </Box>
          </>
        )}

        {menu === 2 && (
          <>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-evenly'}
              alignItems={'center'}
              mt={SIZES(5)}>
              <Box>
                <Image source={require('../../../assets/img.png')} />
                <Text
                  fontFamily={'Montserrat-Regular'}
                  color={Colors.black}
                  fontSize={SIZES(9)}
                  textAlign={'center'}>
                  Upload on: 20-10-2022 12:00
                </Text>
                <Text
                  fontFamily={'Montserrat-Regular'}
                  color={Colors.black}
                  fontSize={SIZES(9)}
                  textAlign={'center'}
                  marginTop={SIZES(1)}>
                  Upload By: EMP0001(signed)
                </Text>
              </Box>
              <Box>
                <Image source={require('../../../assets/img.png')} />
                <Text
                  fontFamily={'Montserrat-Regular'}
                  color={Colors.black}
                  fontSize={SIZES(9)}
                  textAlign={'center'}>
                  Upload on: 20-10-2022 12:00
                </Text>
                <Text
                  fontFamily={'Montserrat-Regular'}
                  color={Colors.black}
                  fontSize={SIZES(9)}
                  textAlign={'center'}
                  marginTop={SIZES(1)}>
                  Upload By: EMP0001(signed)
                </Text>
              </Box>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-evenly'}
              alignItems={'center'}
              mt={SIZES(5)}>
              <Box>
                <Image source={require('../../../assets/img.png')} />
                <Text
                  fontFamily={'Montserrat-Regular'}
                  color={Colors.black}
                  fontSize={SIZES(9)}
                  textAlign={'center'}>
                  Upload on: 20-10-2022 12:00
                </Text>
                <Text
                  fontFamily={'Montserrat-Regular'}
                  color={Colors.black}
                  fontSize={SIZES(9)}
                  textAlign={'center'}
                  marginTop={SIZES(1)}>
                  Upload By: EMP0001(signed)
                </Text>
              </Box>
              <Box>
                <Image source={require('../../../assets/img.png')} />
                <Text
                  fontFamily={'Montserrat-Regular'}
                  color={Colors.black}
                  fontSize={SIZES(9)}
                  textAlign={'center'}>
                  Upload on: 20-10-2022 12:00
                </Text>
                <Text
                  fontFamily={'Montserrat-Regular'}
                  color={Colors.black}
                  fontSize={SIZES(9)}
                  textAlign={'center'}
                  marginTop={SIZES(1)}>
                  Upload By: EMP0001(signed)
                </Text>
              </Box>
            </Box>
          </>
        )}
        {menu === 3 && (
          <Box m={SIZES(5)}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              mt={SIZES(3)}>
              <Box
                width={SIZES(7)}
                height={SIZES(6)}
                backgroundColor={Colors.primaryColor}
              />
              <Text
                fontFamily={'Montserrat-Regular'}
                color={Colors.black}
                fontSize={SIZES(11)}
                marginLeft={SIZES(2)}
                width={SIZES(250)}>
                Created by Rohit(EMP00012) on 20-10-2022 12:00
              </Text>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              mt={SIZES(3)}>
              <Box
                width={SIZES(7)}
                height={SIZES(6)}
                backgroundColor={Colors.primaryColor}
              />
              <Text
                fontFamily={'Montserrat-Regular'}
                color={Colors.black}
                fontSize={SIZES(11)}
                marginLeft={SIZES(2)}
                width={SIZES(250)}>
                Created by Rohit(EMP00012) on 20-10-2022 12:00
              </Text>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              mt={SIZES(3)}>
              <Box
                width={SIZES(7)}
                height={SIZES(6)}
                backgroundColor={Colors.primaryColor}
              />
              <Text
                fontFamily={'Montserrat-Regular'}
                color={Colors.black}
                fontSize={SIZES(11)}
                marginLeft={SIZES(2)}
                width={SIZES(250)}>
                Created by Rohit(EMP00012) on 20-10-2022 12:00
              </Text>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              mt={SIZES(3)}>
              <Box
                width={SIZES(7)}
                height={SIZES(6)}
                backgroundColor={Colors.primaryColor}
              />
              <Text
                fontFamily={'Montserrat-Regular'}
                color={Colors.black}
                fontSize={SIZES(11)}
                marginLeft={SIZES(2)}
                width={SIZES(250)}>
                Created by Rohit(EMP00012) on 20-10-2022 12:00
              </Text>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              mt={SIZES(3)}>
              <Box
                width={SIZES(7)}
                height={SIZES(6)}
                backgroundColor={Colors.lightGrey}
              />
              <Text
                fontFamily={'Montserrat-Regular'}
                color={Colors.black}
                fontSize={SIZES(11)}
                marginLeft={SIZES(2)}
                width={SIZES(250)}>
                Created by Rohit(EMP00012) on 20-10-2022 12:00
              </Text>
            </Box>
          </Box>
        )}

        <Box marginBottom={SIZES(90)} marginTop={SIZES(10)}>
          <TouchableOpacity onPress={() => setAssignEmployee(true)}>
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
    margin: SIZES(12),
    backgroundColor: Colors.white,
  },
};
