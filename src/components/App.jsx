import React from "react";
import MainScreen from "./MainScreen";
import ToDoListScreen from "./ToDoListScreen";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import CreateTaskScreen from "./CreateTaskScreen";

import { users } from "../constants";

class App extends React.Component {
  componentDidMount() {
    if (!JSON.parse(localStorage.getItem("users")))
      localStorage.setItem("users", JSON.stringify(users));
  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <ProtectedRoute
          path="/tasks/"
          component={ToDoListScreen}
        />
        <ProtectedRoute
          path="/create-task/"
          component={CreateTaskScreen}
        />
        <ToDoListScreen />
      </Switch>
    );
  }
}

export default App;
