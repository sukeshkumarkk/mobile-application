import { getApiCall, postApiCall } from "../Api"
import { Select } from 'native-base';

export const getList = async (url) => {
    try {
        let res = await getApiCall(url)
        if (res?.data?.status == true && res?.data?.data?.length != 0) {
            return res.data.data
        } else {
            return []
        }
    } catch (e) {
        console.log(e)
        return []
    }
}

export const getpList = async (url, data) => {
    try {
        let res = await postApiCall(url, data)
        console.log("here1")
        if (res?.data?.status == true && res?.data?.data?.length != 0) {
            console.log("here2")
            return res.data.data
        } else {
            console.log("here")
            return []
        }
    } catch (e) {
        console.log(e)
        return []
    }
}

export const save = async (url, data) => {
    try {
        let res = await postApiCall(url, data)
        console.log(res?.data?.status,"status")
        if (res?.data?.status == true) {
            return res
        } else {
            return {}
        }
    } catch (e) {
        console.log(e)
        return {}
    }
}

export  const getItems = (data, key, label, value) => {
    return data?.map(item => {
      return (
        <Select.Item
          key={item[key]}
          label={item[label]}
          value={item[value]}
        />
      );
    });
  };