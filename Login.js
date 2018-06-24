import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Login extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center"
        }}
      >
        <View style={{flexDirection:'row'}}>
          <View style={{ width: "50%"}}>
            {/* <TouchableOpacity onPress={() => console.log("ee")} style={{ height: 50, backgroundColor: "#a1a0a5" }}>
            <Text
             //style={stylesInput}
             placeholder="Login"
             />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.Login()} style={{ height: 50, backgroundColor: "#a1a0a5" }}>
            <Text
             //style={stylesInput}
             placeholder="Register"
             />
            </TouchableOpacity> */}
            
            
          </View>
          
        </View>
        
        <TextInput
          style={stylesInput}
          placeholder="email"
          // onChangeText={(text) => this.setState({text})}
          value=""
        />
        <TextInput
          style={stylesInput} 
          placeholder="password"
          // onChangeText={(text) => this.setState({text})}
          value=""
        />
        <Button title='login'  onPress={() => Actions.Mario()} />
      </View>
     
    );
  }
}

const stylesButton = {
    height:80,
    
}

const stylesInput = {
  height: 50,
  borderColor: "gray",
  borderWidth: 1,
  width: "70%",
  marginBottom: 15,
  textAlign: "center",
  borderRadius: 10
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  title: {
    fontSize: 50
  }
});
