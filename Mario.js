import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Actions } from "react-native-router-flux";

export default class Mario extends React.Component {
  render() {
    return (
    <View>
      <View style={styles.box}>
          <Text style={styles.mat}>
            แมทช์ของคุณ
          </Text>
          <View style={styles.container}>
          {/* <View style={styles.circle}> */}
            <Text style={styles.tex}>
            รอบที่:1
            </Text>
            {/* <View style={styles.circle}> */}
            <Text style={styles.tex}>
            19 พฤษภาคม 2018 
            </Text>
            <Text style={styles.ye}>
            20:00
            </Text>
            {/* <View style={styles.circle}> */}
            </View> 
         </View>       
        </View>
      // </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //justifyContent: 'center',
    backgroundColor: '#36984C',
    margin: 15,
    width: 735,
    height: 210,
   },
   mat: {
     fontSize: 50,
     margin: 24,
     fontWeight: 'bold',
     textAlign: 'left',
     color: '#FFFFFF',
   },
   box: { 
     backgroundColor: '#343434',
       width: 1000,
       height: 1000,
   },
   tex:{
     fontSize: 30,
     margin: 10,
     textAlign: 'center',
     color: '#FFFFFF',
   },
   ye:{
    fontSize: 50,
    margin: 10,
    textAlign: 'center',
    color: '#FFFFFF',
   },
   circle: {
    height: 500,
    width: 500,
    borderRadius: 70 ,
    borderWidth: 1,
   },
});
