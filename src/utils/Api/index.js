import axios from 'axios';
const baseUrl = 'http://52.72.124.96:8085/';


export const postApiCall = async (url, bodyFormData) => {
  try {
    let headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*", "Accept": "'application/json'" }
    let res = await axios.post(baseUrl + url, bodyFormData, headers)
    return res
  } catch (e) {
    console.log(e.message,"post")
  }
};

export const getApiCall = async (url) => {
  try {
    let headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*", "Accept": "'application/json'" }
    let res = await axios.get(baseUrl + url, headers)
    return res
  } catch (e) {
    console.log(e.message,"get")
  }
};
