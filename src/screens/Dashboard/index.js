import React, {useState} from 'react';
import {StatusBar, ScrollView} from 'react-native';
import {Box, Text, Divider} from 'native-base';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import Pie from 'react-native-pie';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SIZES, width} from '../../utils/Fonts';
const Dashboard = () => {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <>
      <StatusBar hidden={false} backgroundColor={Colors.primaryColor} />
      <Header title={'Dashboard'} isDashboard={true} />
      <ScrollView style={styles.scrollviewContainer}>
        <Box margin={SIZES(6)}>
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}>
            <Text
              textAlign={'justify'}
              fontFamily={'Montserrat-Medium'}
              fontSize={SIZES(20)}
              color={Colors.lightGrey2}>
              Dashboard
            </Text>
            <Box
              borderWidth={SIZES(1)}
              borderColor={Colors.red1}
              padding={SIZES(2)}>
              <Box
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-evenly'}
                alignItems={'center'}>
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-SemiBold'}
                  fontSize={SIZES(11)}
                  color={Colors.lightGrey3}
                  marginLeft={SIZES(1)}
                  marginRight={SIZES(10)}>
                  Today
                </Text>
                <Icon
                  name={showFilters ? 'chevron-up' : 'chevron-down'}
                  onPress={() => {
                    setShowFilters(!showFilters);
                  }}
                  color={Colors.lightGrey3}
                />
              </Box>
              {showFilters && (
                <>
                  <Text
                    textAlign={'justify'}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={SIZES(11)}
                    color={Colors.lightGrey3}
                    marginLeft={SIZES(1)}
                    marginTop={SIZES(1)}>
                    Yesterday
                  </Text>
                  <Text
                    textAlign={'justify'}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={SIZES(11)}
                    color={Colors.lightGrey3}
                    marginLeft={SIZES(1)}
                    marginTop={SIZES(1)}>
                    This Week
                  </Text>
                  <Text
                    textAlign={'justify'}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={SIZES(11)}
                    color={Colors.lightGrey3}
                    marginLeft={SIZES(1)}
                    marginTop={SIZES(1)}>
                    This Month
                  </Text>
                  <Text
                    textAlign={'justify'}
                    fontFamily={'Montserrat-SemiBold'}
                    fontSize={SIZES(11)}
                    color={Colors.lightGrey3}
                    marginLeft={SIZES(1)}
                    marginTop={SIZES(1)}>
                    This Year
                  </Text>
                </>
              )}
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-evenly'}
            alignItems={'center'}>
            <Pie
              radius={60}
              sections={[
                {
                  percentage: 30,
                  color: Colors.red,
                },
                {
                  percentage: 30,
                  color: Colors.yellow,
                },
                {
                  percentage: 40,
                  color: Colors.blue,
                },
              ]}
              strokeCap={'butt'}
            />
            <Box>
              <Text
                textAlign={'justify'}
                fontFamily={'Montserrat-SemiBold'}
                fontSize={SIZES(15)}
                color={Colors.lightGrey2}>
                Insights
              </Text>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                marginTop={SIZES(2)}>
                <Icon name={'circle'} size={SIZES(10)} color={Colors.red} />
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-Medium'}
                  color={Colors.black}
                  fontSize={SIZES(13)}
                  marginLeft={SIZES(2)}>
                  Pending
                </Text>
              </Box>
              <Box
                flexDirection={'row'}
                marginTop={SIZES(2)}
                alignItems={'center'}>
                <Icon name={'circle'} size={SIZES(10)} color={Colors.yellow} />
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-Medium'}
                  color={Colors.black}
                  fontSize={SIZES(13)}
                  marginLeft={SIZES(2)}>
                  In Progress
                </Text>
              </Box>
              <Box
                flexDirection={'row'}
                marginTop={SIZES(2)}
                alignItems={'center'}>
                <Icon name={'circle'} size={SIZES(10)} color={Colors.blue} />
                <Text
                  textAlign={'justify'}
                  fontFamily={'Montserrat-Medium'}
                  color={Colors.black}
                  fontSize={SIZES(13)}
                  marginLeft={SIZES(2)}>
                  Completed
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt={SIZES(3)} />
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          margin={SIZES(3)}>
          <Text
            fontFamily={'Montserrat-Medium'}
            fontSize={SIZES(13)}
            color={Colors.black}>
            Department
          </Text>
          <Text
            fontFamily={'Montserrat-Medium'}
            fontSize={SIZES(13)}
            color={Colors.black}>
            Pending
          </Text>
          <Text
            fontFamily={'Montserrat-Medium'}
            fontSize={SIZES(13)}
            color={Colors.black}>
            In Progress
          </Text>
          <Text
            fontFamily={'Montserrat-Medium'}
            fontSize={SIZES(13)}
            color={Colors.black}>
            Completed
          </Text>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          margin={SIZES(4)}>
          <Text
            fontFamily={'Montserrat-Medium'}
            fontSize={SIZES(12)}
            color={Colors.black}>
            Mechanical
          </Text>
          <Text
            fontFamily={'Montserrat-Medium'}
            fontSize={SIZES(12)}
            color={Colors.red}>
            <Icon name={'arrow-down'} /> 450
          </Text>
          <Text
            fontFamily={'Montserrat-Medium'}
            fontSize={SIZES(12)}
            color={Colors.lightGreen}>
            <Icon name={'arrow-up'} /> 450
          </Text>
          <Text
            fontFamily={'Montserrat-Medium'}
            fontSize={SIZES(12)}
            color={Colors.red}>
            <Icon name={'arrow-down'} /> 450
          </Text>
        </Box>
        <Divider />
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          margin={SIZES(4)}>
          <Text
            fontFamily={'Montserrat-Medium'}
            fontSize={SIZES(12)}
            color={Colors.black}>
            Electrical
          </Text>
          <Text
            fontFamily={'Montserrat-Medium'}
            fontSize={SIZES(12)}
            color={Colors.lightGreen}>
            <Icon name={'arrow-up'} /> 450
          </Text>
          <Text
            fontFamily={'Montserrat-Medium'}
            fontSize={SIZES(12)}
            color={Colors.red}>
            <Icon name={'arrow-down'} /> 450
          </Text>
          <Text
            fontFamily={'Montserrat-Medium'}
            fontSize={SIZES(12)}
            color={Colors.red}>
            <Icon name={'arrow-down'} /> 450
          </Text>
        </Box>
        <Divider />
      </ScrollView>
    </>
  );
};

export default Dashboard;

const styles = {
  scrollviewContainer: {
    flex: 1,
  },
};
