import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StatusBar, ScrollView } from 'react-native';
import { Box, Image, Text } from 'native-base';
import Header from '../../components/NormalHeader';
import Colors from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { SIZES, height } from '../../utils/Fonts/index';
import CustomInput from '../../components/Input';
import CustomSelect from '../../components/SelectPicker';
import CustomDatePicker from '../../components/DatePicker';
import ImagePicker from 'react-native-image-crop-picker';
import CustomButton from '../../components/Button';
import { useFormValidation } from "../../Validations/UseFormValidations";
import ImgToBase64 from 'react-native-image-base64';
import { useEffect } from 'react';
import { Apicontants } from '../../constants/Api';
import { getItems, getList, save } from '../../utils/SharedFunctions/SharedFunctions';

const RaiseService = props => {
  const { data, handleChange, addObject } = useFormValidation({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [locations, setLocations] = useState([]);
  const [subLocations, setSubLocations] = useState([]);

  useEffect(() => {
    getDepartments();
    getLocations();
    getSubLocations()
  }, []);

  const getDepartments = async () => {
    const res = await getList(Apicontants.department.getAll);
    setDepartments(res);
  };

  const getLocations = async () => {
    const res = await getList(Apicontants.location.getAll);
    setLocations(res);
  };


  const getSubLocations = async () => {
    const res = await getList(Apicontants.subLocation.getAll);
    setSubLocations(res);
  };

  const changeDatePicker = event => {
    if (event.type == 'set') {
      addObject({ dueDate: event?.nativeEvent?.timestamp })
    }
    setShowDatePicker(false);
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const openCamera = () => {
    ImagePicker.openCamera({}).then(image => {
      ImgToBase64.getBase64String(image?.path)
        .then(base64String => {
          data['image'] = base64String
          console.log(base64String)
        })
        .catch(err => console.log(err));
    });
  };

  const submit = async () => {
    data["userId"] = 1
    data["roleId"] = 1
    console.log(data)
    let res = await save(Apicontants.service.raise, data)
    if(res?.data?.status == true){
      props.navigation.navigate('RaiseServiceSuccess')
    }
    console.log(res?.data)
  }

  return (
    <>
      <StatusBar hidden={false} backgroundColor={Colors.primaryColor} />
      <Header
        handleGoBack={() => {
          props.navigation.goBack();
        }}
      />
      <ScrollView style={styles.ScrollViewContainer}>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <LinearGradient
            colors={[Colors.primaryColor, Colors.lightGrey]}
            style={styles.gradientCotainer}>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-evenly'}
              alignItems={'center'}>
              <TouchableOpacity onPress={openCamera}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}>
                  <Image
                    source={require('../../assets/capture.png')}
                    style={styles.cameraIcon}
                    alt={'Camera image'}
                    resizeMode={'contain'}
                  />
                  <Text
                    textAlign={'justify'}
                    fontFamily={'Montserrat-Medium'}
                    color={Colors.lightGrey2}
                    fontSize={SIZES(16)}
                    marginTop={SIZES(1)}>
                    Capture
                  </Text>
                </Box>
              </TouchableOpacity>
              <TouchableOpacity onPress={openGallery}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}>
                  <Image
                    source={require('../../assets/gallery.png')}
                    style={styles.cameraIcon}
                    alt={'Gallery image'}
                    resizeMode={'contain'}
                  />
                  <Text
                    textAlign={'justify'}
                    fontFamily={'Montserrat-Medium'}
                    color={Colors.lightGrey2}
                    fontSize={SIZES(16)}
                    marginTop={SIZES(1)}>
                    Select Image
                  </Text>
                </Box>
              </TouchableOpacity>
            </Box>
          </LinearGradient>
        </Box>
        <Box margin={SIZES(7)}>
          <CustomInput
            label={'Description'}
            placeholder={'Enter Description'}
            value={data?.notes}
            handleOnChange={value => handleChange("notes", value)}
          />
          <CustomSelect
            label={'Select Service Department'}
            data={departments}
            handleGetSelectOptions={data => getItems(data, "departmentId", "departmentName", "departmentId")}
            placeholder={'Select Service Department'}
            handleSetSelectValue={value => handleChange("departmentId", value)}
            selectedValue={data?.departmentId}
          />
          <CustomSelect
            label={'Select Location'}
            data={locations}
            handleGetSelectOptions={data => getItems(data, "locationId", "locationName", "locationId")}
            placeholder={'Select Location'}
            handleSetSelectValue={value => handleChange("locationId", value)}
            selectedValue={data?.locationId}
          />
          <CustomSelect

            label={'Select Sub-Location'}
            data={subLocations?.filter((v) => v?.locationId == data?.locationId)}
            handleGetSelectOptions={data => getItems(data, "sublocationId", "sublocationName", "sublocationId")}
            placeholder={'Select Sub Location'}
            handleSetSelectValue={value => handleChange("sublocationId", value)}
            selectedValue={data?.sublocationId}
          />
          <CustomDatePicker
            minimumDate={new Date()}
            label={'Select Due Date'}
            placeholder={'Select Due Date'}
            showPicker={showDatePicker}
            handleOpenPicker={() => setShowDatePicker(true)}
            handleChangeDatePicker={e => changeDatePicker(e)}
          />
          <Box
            marginTop={SIZES(5)}
            justifyContent={'center'}
            alignItems={'center'}>
            <CustomButton
              title={'Submit'}
              width={SIZES(320)}
              height={SIZES(43)}
              handleOnPress={submit}
            // handleOnPress={() => {
            //   props.navigation.navigate('RaiseServiceSuccess')
            // }}
            />
          </Box>
        </Box>
        <Box margin={SIZES(50)} />
      </ScrollView>
    </>
  );
};

export default RaiseService;

const styles = {
  gradientCotainer: {
    width: SIZES(305),
    height: SIZES(180),
    justifyContent: 'center',
    borderRadius: SIZES(10),
    elevation: SIZES(10),
    marginTop: SIZES(15),
  },
  cameraIcon: {
    width: SIZES(30),
    height: SIZES(30),
  },
  ScrollViewContainer: {
    flex: 1,
  },
};
