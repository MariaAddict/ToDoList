import React from "react";
import { List, Typography, Card, Checkbox } from "antd";
import { connect } from "react-redux";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.tasks = this.props.tasks;
  }

  render() {
    return (
      <List
        itemLayout="horizontal"
        grid={{ gutter: 8, column: 1 }}
        dataSource={this.tasks}
        renderItem={(task) => (
          <List.Item key={task.title + task.date}>
            <Card title={task.title}>
              <Typography.Paragraph>{task.description}</Typography.Paragraph>
              <Checkbox>{task.date}</Checkbox>
            </Card>
          </List.Item>
        )}
      ></List>
    );
  }
}

export default connect(
  (state) => ({
    tasks: state.tasks,
  }),
  null
)(ToDoList);
