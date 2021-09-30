import React from 'react';
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
    constructor(props) {
        super(props);
        this.data = props;
      }
    render() {return (
    <Route>
      {
        () =>  localStorage.getItem("users") ? <this.data.component  {...this.data} /> : <Redirect to="./" />
      }
    </Route>
)}
}

export default ProtectedRoute;
