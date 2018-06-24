import React from 'react';
import { StyleSheet, Text, View,TextInput ,Button } from 'react-native';
import { Actions } from "react-native-router-flux";

export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Register</Text>
        <TextInput
          style={stylesInput}
          placeholder="username"
          // onChangeText={(text) => this.setState({text})}
          value=""
        />
        <TextInput
          style={stylesInput} // onChangeText={(text) => this.setState({text})}
          placeholder="Display Name"
          value=""
        />
        <TextInput
          style={stylesInput} // onChangeText={(text) => this.setState({text})}
          placeholder="Password"
          value=""
        />
        <Button title='ยกเลิก'  onPress={() => Actions.Login()} />
        <Button title='สมัครสมาชิก' onPress={() => Actions.Login()} />       
      </View>
    );
  }
}
const stylesInput = {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "70%",
    marginBottom: 15,
    textAlign: "center",
    borderRadius:10
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
