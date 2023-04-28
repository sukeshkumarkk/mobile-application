import AsyncStorage from '@react-native-async-storage/async-storage';
import instance, { getApiCall, postApiCall } from '../Api';
import { Select } from 'native-base';

export const getList = async (url) => {
  try {
    let res = await getApiCall(url);
    // let res = await instance.get(url)
    console.log(res, 'res');
    if (res?.data?.status == true && res?.data?.data?.length != 0) {
      return res.data.data;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getpList = async (url, data) => {
  try {
    // let res = await instance.post(url, data)
    let res = await postApiCall(url, data);
    console.log('postRes', res);
    if (res?.data?.status == true && res?.data?.data?.length != 0) {
      return res.data.data;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const save = async (url, data) => {
  try {
    // let res = await instance.post(url, data);
    let res = await postApiCall(url, data);
    console.log(res?.data?.status, 'status');
    console.log(res?.data, 'resData');
    if (res?.data?.status == true) {
      return res;
    } else {
      return {};
    }
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const getItems = (data, key, label, value) => {
  return data?.map((item) => {
    return (
      <Select.Item key={item[key]} label={item[label]} value={item[value]} />
    );
  });
};

export const getUserfromAS = async (key) => {
  let res = await AsyncStorage.getItem('user');
  return JSON.parse(res)?.[key] || '';
};
