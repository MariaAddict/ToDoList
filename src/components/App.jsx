import React from "react";
import MainScreen from "./MainScreen";

import { users } from "../constants";

class App extends React.Component {
  componentDidMount() {
    if (!JSON.parse(localStorage.getItem("users")))
      localStorage.setItem("users", JSON.stringify(users));
  }

  render() {
    return <MainScreen />;
  }
}

export default App;
