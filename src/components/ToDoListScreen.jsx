import React from "react";
import { Layout, Button } from "antd";
import "antd/dist/antd.css";
import Header from "./Header";
import ToDoList from "./ToDoList";

class ToDoListScreen extends React.Component {
  render() {
    return (
      <Layout
        style={{
          alignItems: "center",
          padding: "50px 10%",
        }}
      >
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

export default ToDoListScreen;
