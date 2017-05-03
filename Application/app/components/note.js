/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Style from '../../styles/notelist';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class NoteList extends Component {
  render() {
    return (
		<View key={this.props.keyval} style={styles.note}>
			<Text style={styles.noteText}>{this.props.val.date}</Text>
			<Text style={styles.noteText}>{this.props.val.text}</Text>
		
			<TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
				<Text style={styles.noteDeleteText}>D</Text>
			</TouchableOpacity>
		</View>
    );
  }
}

const styles = StyleSheet.create(Style);

