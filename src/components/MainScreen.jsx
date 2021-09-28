import React from "react";
import { Layout, Typography, Button } from "antd";
import "antd/dist/antd.css";
import Header from "./Header";

class MainScreen extends React.Component {
  render() {
    return (
      <Layout
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Header />
        <Typography.Paragraph >In order to create and view tasks, you need to log in</Typography.Paragraph>
        <Button type="primary">
          Sign in
        </Button>
      </Layout>
    );
  }
}

export default MainScreen;
