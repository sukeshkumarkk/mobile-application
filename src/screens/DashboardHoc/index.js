import React from 'react';
import BottomBar from '../../components/BottomBar';
import {StatusBar} from 'react-native';

const DashboardHoc = () => {
  return (
    <>
      <StatusBar />
      <BottomBar />
    </>
  );
};

export default DashboardHoc;
