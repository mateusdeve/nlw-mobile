import React from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';

import Landing from './src/pages/Landing';
import AppStack from './src/routes/AppStack';

export default function App(){
  return (
    <>
      <AppStack />
      <StatusBar />
    </>
  );
};
