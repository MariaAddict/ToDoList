import React from "react";
import MainScreen from "./MainScreen";
import ToDoListScreen from "./ToDoListScreen";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import CreateTaskScreen from "./CreateTaskScreen";
import { connect } from "react-redux";

import { setCurrentUser } from "../actions";
import { users } from "../constants";

class App extends React.Component {
  componentDidMount() {
    if (!JSON.parse(localStorage.getItem("users")))
      localStorage.setItem("users", JSON.stringify(users));

    const currentUser = JSON.parse(localStorage.getItem("current user"));
    this.props.setCurrentUser(currentUser);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <ProtectedRoute path="/tasks/" component={ToDoListScreen} />
        <ProtectedRoute path="/create-task/" component={CreateTaskScreen} />
        <ToDoListScreen />
      </Switch>
    );
  }
}

export default connect(
  (state) => ({
    user: state,
  }),
  { setCurrentUser }
)(App);
