
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';


export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {

    //window.alert(task);

    setTaskItems([...taskItems, task]); //This add a new task to a collection of tasks
    setTask(""); //Clears the text input after adding a new task

  }

  const completeTask = (index) => {

    let itemsCopy  = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tasks List</Text>
        <View styele={styles.items}>

          {

            taskItems.map((item, index) => {

                return (

                  <TouchableOpacity key={index} onPress={() => completeTask()}>

                  <Task text={item}/>

                  </TouchableOpacity>

                )
                
            })

          }
          
        </View>

      </View> 

      <KeyboardAvoidingView behavior={Platform.OS == 'web' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>

          <TextInput style={styles.input} placeholder="Write a task" value={task} onChangeText={text => setTask(text)}></TextInput>

          <TouchableOpacity onPress={() =>  handleAddTask()}>
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
    backgroundColor: 'black',
    width: '100%',
    minHeight: '100%',
   
  },

  sectionTitle: {
    fontSize:24,
    fontWeight:'bold',
    color:'white',

  },

  tasksWrapper: {
    paddingTop: 80,
    width: '70%',
    marginLeft: '15%',
    marginRight: '15%',
    marginTop: '2%',
    
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '70%',
    marginLeft: '15%',
    marginRight: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: 350,
    backgroundColor: '#6d6e6a',
    borderRadius: 70,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  addWrapper: {

    width:60,
    height:60,
    borderRadius: 60,
    backgroundColor: '#6d6e6a',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#c0c0c0',

  },

  addText: {

    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,

  },

 
});
