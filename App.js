
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View styele={styles.items}>

          <Task text={"This its a first task"}/>
          <Task text={"This its a second task"}/>
          
        </View>

      </View> 

      <KeyboardAvoidingView behavior={Platform.OS == 'web' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>

          <TextInput style={styles.input} placeholder="Write a task"></TextInput>

          <TouchableOpacity>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E8EAED',
   
  },

  sectionTitle: {
    fontSize:24,
    fontWeight:'bold',

  },

  tasksWrapper: {
    paddingTop:80,
    paddingHorizontal:300,
    
  },

  writeTaskWrapper: {


  },

 
});
