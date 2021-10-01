import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        JSON.parse(localStorage.getItem("current user")) ? <Component {...props} /> : <Redirect to="./" />
      }
    </Route>
  );
};

export default connect(
  (state) => ({
    user: state,
  }),
  null
)(ProtectedRoute);
