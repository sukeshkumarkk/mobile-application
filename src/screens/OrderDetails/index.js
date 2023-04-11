import React, {useState, useRef} from 'react';
import {StatusBar, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import {Box, Text, Divider, Card, CardItem, Image} from 'native-base';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import {SIZES} from '../../utils/Fonts';

const OrderDetails = props => {
  const [menu, setMenu] = useState(2);
  const [showRejectMenu, setShowRejectMenu] = useState(false);

  return (
    <>
     
      <StatusBar hidden={false} backgroundColor={Colors.primaryColor} />
      <Header
        title={'Order Summary'}
        handleGoBack={() => props.navigation.goBack()}
        handleClickFilter={() => {
          console.log('hii');
        }}
        isDashBoard={false}
        from={'serviceDetails'}
      />
      <ScrollView
        style={styles.scrollviewContainer}
        showsVerticalScrollIndicator={false}>
        <Box>
          <Image source={require('../../assets/slider.png')} />
        </Box>
        
      </ScrollView>
    </>
  );
};

export default OrderDetails;

const styles = {
  scrollviewContainer: {
    flex: 1,
    margin: SIZES(12),
  },
};
