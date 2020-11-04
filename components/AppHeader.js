import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style = {styles.textContainer}>
      <Text style = {styles.text}>Quiz Buzzer App</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textContainer:{
  backgroundColor:'black',
  },
  text:{
    color:'white',
    padding:20,
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center'
  }
})