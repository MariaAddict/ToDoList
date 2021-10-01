import React from "react";
import { Layout, DatePicker, Typography, Input, Button, Form } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { removeCurrentUser } from "../actions";
import { withRouter, NavLink } from "react-router-dom";

class CreateTaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      date: "",
    };
  }

  getDate = (date, dateString) => {
    this.setState({ date: dateString });
  };

  getInputTextData = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  sendDataForm = () => {
    console.log(
      `name: ${this.state.name}, description: ${this.state.description}, date: ${this.state.date}`
    );
    this.closeModal();
  };

  render() {
    return (
      <Layout
        style={{
          alignItems: "center",
          padding: "50px 10%",
          minHeight: "100%",
          textAlign: "left",
        }}
      >
        <Typography.Title>Create new task</Typography.Title>
        <Layout style={{ maxWidth: "820px", width: "100%" }}>
          <Form
            layout="vertical"
            initialValues={{
              layout: "vertical",
            }}
            onFinish={() => this.sendDataForm()}
          >
            <Form.Item label="Task name">
              <Input
                placeholder="Task name"
                onChange={this.getInputTextData}
                name="name"
              />
            </Form.Item>
            <Form.Item label="Task description">
              <Input.TextArea
                rows={4}
                placeholder="Task description"
                name="description"
                onChange={this.getInputTextData}
              />
            </Form.Item>
            <Form.Item label="Enter the due date for the task">
              <DatePicker onChange={this.getDate} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button type="link">
                <NavLink to="/tasks">Return to list</NavLink>
              </Button>
            </Form.Item>
          </Form>
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
)(withRouter(CreateTaskScreen));
