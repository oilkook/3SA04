import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Weather(props) {

  return (
    <View  style={styles.container} >
      <Text style={{ fontSize: 30 }}> Weather  {props.zipCode} </Text>
      <View style={{width: 30, height: 30, backgroundColor: 'red'}}></View>     
      <View style={{width: 30, height: 30, backgroundColor: 'blue'}}></View>     
      <View style={{width: 30, height: 30, backgroundColor: 'green'}}></View>           
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',   
    alignItems: 'center' ,
    borderWidth: 5,
    borderColor: 'red',    
  }
})
