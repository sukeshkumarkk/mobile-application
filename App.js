import React, {useEffect, useState} from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import SplashScreen from './src/screens/Splash';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {showSplash ? <SplashScreen /> : <MainNavigator />}
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
