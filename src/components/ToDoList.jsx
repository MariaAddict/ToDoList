import React from "react";
import { List, Typography, Card, Checkbox } from "antd";
import { connect } from "react-redux";
import { setTaskChecked } from "../actions";

class ToDoList extends React.Component {
  render() {
    return (
      <List
        itemLayout="horizontal"
        grid={{ gutter: 8, column: 1 }}
        dataSource={this.props.tasks}
        renderItem={(task) => (
          <List.Item key={task.id}>
            <Card title={task.title}>
              <Typography.Paragraph>{task.description}</Typography.Paragraph>
              <Checkbox
                checked={task.checked}
                onChange={() => {
                  this.props.setTaskChecked({...task, checked: !task.checked })
                }
              }
              >
                {task.date}
              </Checkbox>
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
  { setTaskChecked }
)(ToDoList);
