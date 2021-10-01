import React from "react";
import { Layout, Button, Typography } from "antd";
import "antd/dist/antd.css";
import Header from "./Header";
import ToDoList from "./ToDoList";
import { connect } from "react-redux";
import { removeCurrentUser } from "../actions";
import { withRouter } from "react-router-dom";

class ToDoListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.data =  this.props;
  }

  signOut() {
    this.props.removeCurrentUser();
    this.props.history.push("/");
  }

  render() {
    return (
      <Layout
        style={{
          alignItems: "center",
          padding: "50px 10%",
          minHeight: "100%",
        }}
      >
        <Typography.Paragraph>{`Hello, ${this.props.user.name}`}</Typography.Paragraph>
        <Button key="link" type="primary" onClick={() => this.signOut()} block>
          Sign out
        </Button>
        <Layout style={{ maxWidth: "820px" }}>
          <Header />
          <Button
            type="primary"
            style={{
              alignSelf: "flex-end",
              marginBottom: "20px",
            }}
          >
            Create new task
          </Button>
          <ToDoList />
        </Layout>
      </Layout>
    );
  }
}

export default connect(
  (state) => ({
    user: state,
  }),
  { removeCurrentUser }
)(withRouter(ToDoListScreen));
