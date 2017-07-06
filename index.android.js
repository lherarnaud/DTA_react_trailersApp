/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AppNavigator from './src/AppNavigator';

export default class trailersApp extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

AppRegistry.registerComponent('trailersApp', () => trailersApp);