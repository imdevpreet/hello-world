import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {TextInput } from 'react-native-paper'
// import Constants from 'expo-constants';
import { colors } from '../utils/colors';
import {RoundedButton} from '../components/roundedbutton';
import {spacing } from '../utils/sizes'

export const Focus = ( {addSubject}) => {
  const [subject, setSubject] = useState(null)
  return(
  <View style = {styles.container}>
   <View style = {styles.inputContainer}>
    <TextInput
    style={styles.textInput}
     onChangeText={setSubject} label = "Focus Item" />
     <View style={styles.button}>
    <RoundedButton style={styles.button}t itle="+" size={50} onPress={() =>addSubject(subject)} />
    </View>
   </View>
  </View>
  );
};
const styles = StyleSheet.create({
   container: {
    
   },
   button: {
     justifyContent: "center"
   },
   textInput: {
     flex: 1,
     marginRight: spacing.sm,
   },
   inputContainer: {
     padding: spacing.lg,
     justifyContent: "top",
     flexDirection:"row"
   },
  //  text: {
  //    color: colors.white,
  //  },
  });