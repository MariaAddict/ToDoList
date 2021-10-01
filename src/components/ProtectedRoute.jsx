import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        !!props.user.name ? <Component {...props} /> : <Redirect to="./" />
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
