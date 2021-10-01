import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ProtectedRoute extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.user;
    this.component = props.component;
  }
  render() {
    return (
      <Route>
        {() => (!!this.user.name ? <this.component /> : <Redirect to="./" />)}
      </Route>
    );
  }
}

export default connect(
  (state) => ({
    user: state,
  }),
  null
)(ProtectedRoute);
