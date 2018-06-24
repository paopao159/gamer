import React from "react";
import { Router, Scene } from "react-native-router-flux";
import LoginPage from "./component/Login";
import RegisterPage from "./component/Register";
import MarioPage from "./component/Mario";
export default class Route extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Login" component={LoginPage} title="Login" initial />
          <Scene key="Register" component={RegisterPage} title="Register" />
          <Scene key="Mario" component={MarioPage} title="Mario" />
        </Scene>
      </Router>
    );
  }
}
