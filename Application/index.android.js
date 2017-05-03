/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import MainPage from './app/components/mainpage';

export default class Main extends Component {
  render() {
    return (
		<MainPage />
    );
  }
}

AppRegistry.registerComponent('salman', () => Main);
