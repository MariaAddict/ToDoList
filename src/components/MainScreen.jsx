import React from "react";
import { Layout, Typography, Button } from "antd";
import "antd/dist/antd.css";
import Header from "./Header";
import ModalAuthorization from "./ModalAuthorization";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpenModal: false };
  }

  openModal = () => {
    this.setState({ isOpenModal: true});
  }

  closeModal = () => {
    this.setState({ isOpenModal: false });
  }

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
        <Typography.Paragraph>
          In order to create and view tasks, you need to log in
        </Typography.Paragraph>
        <Button type="primary" onClick={this.openModal}>
          Sign in
        </Button>
        { this.state.isOpenModal && <ModalAuthorization closeModal={this.closeModal}/> }
      </Layout>
    );
  }
}

export default MainScreen;
