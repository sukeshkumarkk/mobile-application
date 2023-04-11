import React, {useEffect, useReducer} from 'react';
import {ActivityIndicator} from 'react-native';
import AuthContext from '../context/AuthContext';
import {postApiCall} from '../utils/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import {Apicontants} from '../constants/Api';


function StackNavigator() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SHOW_LOADER':
          return {
            isLoading: true,
          };
        case 'HIDE_LOADER':
          return {
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            isLoading: false,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  useEffect(() => {
    const getUserId = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userId');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };
    getUserId();
  }, []);

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('userId');
    dispatch({type: 'SIGN_OUT'});
  };

  const handleSignIn = async (mobile, password) => {
    const url = Apicontants.login;
    const response = await postApiCall(url, {mobile, password});
    if (response.data.status === 'valid') {
      await AsyncStorage.setItem('userId', response.data.data.user_id);
      dispatch({type: 'SIGN_IN', token: response.data.data.user_id});
    } else {
      dispatch({type: 'HIDE_LOADER'});
      alert(response.data.message);
    }
  };

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        dispatch({type: 'SHOW_LOADER'});
        handleSignIn(data.email, data.password);
      },
      signOut: () => {
        dispatch({type: 'SHOW_LOADER'});
        handleSignOut();
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      {!state.isLoading ? (
        <>{state.userToken == null ? <AuthStack /> : <HomeStack />}</>
      ) : (
        <ActivityIndicator size={'large'} color={'#0967e3'} />
      )}
    </AuthContext.Provider>
  );
}

export default StackNavigator;
