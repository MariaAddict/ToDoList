import React from "react";
import { Modal, Input, Typography, Button } from "antd";
import "antd/dist/antd.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

class ModalAuthorization extends React.Component {
  constructor(props) {
    super(props);
    this.isOpenModal = props.isOpenModal;
    this.state = {
      name: "",
      password: "",
    };
    this.closeModal = () => {
      props.closeModal();
    };
  }

  getInputUserData = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  submitDataForm = () => {
    console.log(
      `name: ${this.state.name}, description: ${this.state.password}`
    );
    this.closeModal();
  };

  render() {
    return (
      <Modal
        title="Autorization"
        visible={true}
        onOk={this.submitDataForm}
        onCancel={this.closeModal}
        footer={[
          <Button key="link" type="primary" onClick={this.submitDataForm} block>
            Sign in
          </Button>,
        ]}
      >
        <Typography.Paragraph style={{ marginBottom: "10px" }}>
          Enter your name
        </Typography.Paragraph>
        <Input
          placeholder="Name"
          onChange={this.getInputUserData}
          name="name"
          style={{ marginBottom: "24px" }}
        />

        <Typography.Paragraph style={{ marginBottom: "10px" }}>
          Enter your password
        </Typography.Paragraph>
        <Input.Password
          placeholder="Password"
          name="password"
          onChange={this.getInputUserData}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Modal>
    );
  }
}

export default ModalAuthorization;
