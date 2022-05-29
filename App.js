import React,{useState} from 'react';
import {
   Text,
   View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
// import Constants from 'expo-constants';
import {colors} from './src/utils/colors';
import {Focus} from './src/features/focus';
import {Timer} from './src/features/timer';
import {FocusHistory } from './src/features/focushistory';
 

export default function App () {
  console.log('hello')
  const [currentSubject, setCurrentSubject] = useState([null]);
  const [history, setHistoty] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
    {!currentSubject? ( 
      <>
        <Focus addSubject={setCurrentSubject}/>
        <FocusHistory history={history}/>
      </>  
     ): (
       <Timer
       focusSubject={currentSubject}
       onTimerEnd={(subject) => {
         setHistoty([...history,subject])
       }}
       clearSubject={() => setCurrentSubject(null)}
       />
     )}
     <View>
      <Text style={
      {color: colors.white}}> I am going to render the timer for{currentSubject}
      </Text>
     </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex : 1,
    padding : Platform.OS === 'andriod' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.red
  },
  // text: {
  //   color: colors.white
  // }
})

