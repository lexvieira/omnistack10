import React from 'react';
import { StatusBar, LogBox } from 'react-native';

import Routes from './src/routes';

LogBox.ignoreLogs([
  'Unrecognized'
]);
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
        <Routes />
      </>
    );
}

