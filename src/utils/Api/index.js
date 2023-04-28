import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const baseUrl = 'http://52.72.124.96:8085/';
export const postApiCall = async (url, bodyFormData) => {
  try {
    let token = await AsyncStorage.getItem('token');
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: "'application/json'",
    };
    if (token != null) {
      headers['Authorization'] = `Bearer ${token?.slice(1, -1)}`;
    }
    let config = {
      headers: headers,
    };
    let res = await axios.post(baseUrl + url, bodyFormData, config);
    console.log('resss', res);
    return res;
  } catch (e) {
    console.log(e.message);
  }
};

export const getApiCall = async (url) => {
  try {
    let token = await AsyncStorage.getItem('token');
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: "'application/json'",
    };
    if (token != null) {
      headers['Authorization'] = `Bearer ${token?.slice(1, -1)}`;
    }
    let config = {
      headers: headers,
    };
    let res = await axios.get(baseUrl + url, config);
    return res;
  } catch (e) {
    console.log(e.message);
  }
};
