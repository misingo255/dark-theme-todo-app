import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Task = (props) => {

    return(

        <View style={styles.item}>

            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <View style={styles.circular}>

            </View>
            
        </View>

    ) 
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius:12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55bdf6',
        borderRadius: 6,
        marginRight: 15,
    },

    itemText: {
        maxWidth: '80%',
        fontWeight: 'bold',
    },

    circular: {
        width: 12,
        height:12,
        borderRightColor: '#55bdf6',
        borderWidth: 2,
        borderRadius: 5,

    },


});



export default Task;