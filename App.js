
import React, {useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View , Image} from 'react-native';
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
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
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

      <KeyboardAvoidingView behavior={Platform.OS == 'android' | 'ios' | 'web' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>

          <TextInput style={styles.input} placeholder="Write a task" value={task} onChangeText={text => setTask(text)}>
          </TextInput>

          <TouchableOpacity>
                  <View style={styles.datePickerWrapper}>
                      <Image source={require('./assets/watch.png')} resizeMode = 'cover' style = {styles.datePickerIcon}/>
                  </View>
          </TouchableOpacity>

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
    backgroundColor: '#045b62',
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
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 70,
    borderColor: 'white',
    borderWidth: 1,
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },

  addWrapper: {

    width:60,
    height:60,
    borderRadius: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#c0c0c0',

  },

  addText: {

    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,

  },

  datePickerWrapper: {

    width:60,
    height:60,
    borderRadius: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#c0c0c0',
  },


  datePickerIcon: {
    flex: 1,
    flexDirection: 'column',
  },
 
});
