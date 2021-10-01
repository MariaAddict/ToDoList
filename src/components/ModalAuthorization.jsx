import React from "react";
import { Modal, Input, Typography, Button } from "antd";
import "antd/dist/antd.css";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { connect } from "react-redux";
import { setCurrentUser } from "../actions";
import { withRouter } from "react-router-dom";

class ModalAuthorization extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrentUser = this.props.setCurrentUser;
    this.state = {
      name: "",
      password: "",
      errorAuth: false
    };
    this.closeModal = () => {
      props.closeModal();
    };
    this.history = props.history;
  }

  getInputUserData = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  submitDataForm = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(
      (item) =>
        item.name === this.state.name && item.password === this.state.password
    );
    if (user) {
      this.setState({errorAuth: false});
      this.setCurrentUser(user);
      this.closeModal();
      this.props.history.push("/tasks/");
    } else {
      this.setState({errorAuth: true});
    }
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
        {this.state.errorAuth && <Typography.Text type="danger" style={{textAlign: "center"}}>Invalid username or password</Typography.Text>}
      </Modal>
    );
  }
}

export default connect(
  (state) => ({
    state: state,
  }),
  { setCurrentUser }
)(withRouter(ModalAuthorization));
