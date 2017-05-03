/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Styles from '../../styles/mainpage';
import Reflux from 'reflux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Note from './note';
import NoteHelper from '../../helpers/note';
import { NoteStore } from '../../store/note';

export default class MainPage extends Reflux.Component {
	
	componentDidMount()
	{
		NoteHelper.List((resultJson)=>{
			this.setState({noteList : resultJson});
		});
	}

	state = {
			noteList : [],
			noteText : ''
	}

  render() {
	 let notes = this.state.noteList.map((val,key) =>{
		return <Note key = {key} keyval={key} val={val} deleteMethod = {()=>this.deleteNote(key)}/> 
	 });
    return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}> - TODO LIST - </Text>
			</View>
			<ScrollView style={styles.scrollContainer}>
				{notes}
			</ScrollView>
			
			<View style={styles.footer}>
				<TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
					<Text style={styles.addButtonText}> + </Text>
				</TouchableOpacity>
				
				<TextInput style={styles.TextInput} 
					onChangeText = {(noteText) => this.setState({noteText})} value = {this.state.noteText}
					placeholder = '> note' placeholderTextColor = "white" underlineColorAndroid = 'transparent'>
				</TextInput>
			
			</View>
		</View>
    );
  }
  
  addNote()
  {
	  if(this.state.noteText)
	  {
		  var d = new Date();
		  this.state.noteList.push({'date' : d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate(), "note" : this.state.noteText});
		  this.setState({noteList : this.state.noteList});
		  this.setState({noteText : ""});
	  }
  }
  
  deleteNote (key)
  {
		this.state.noteList.splice(key,1);
		this.setState({noteList : this.state.noteList});
  }
}

const styles = StyleSheet.create(Styles);

