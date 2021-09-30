import React from "react";
import { List, Typography, Card, Checkbox } from "antd";
import { connect } from "react-redux";

const tasks = [
  {
    title: "pay product",
    description: "list: apple, ...",
    date: new Date().toDateString(),
  },
  {
    title: "pay product",
    description:
      "list: apple, ...sghjdfkghaksjhfgjk, fshkjfdh, jgiojgrier,jgsoidjgi jsgejr fdklgjls. gjksljgkljfglkaj gjsklfj aloha list: apple, ...sghjdfkghaksjhfgjk, fshkjfdh, jgiojgrier,jgsoidjgi jsgejr fdklgjls. gjksljgkljfglkaj gjsklfj aloha list: apple, ...sghjdfkghaksjhfgjk, fshkjfdh, jgiojgrier,jgsoidjgi jsgejr fdklgjls. gjksljgkljfglkaj gjsklfj aloha list: apple, ...sghjdfkghaksjhfgjk, fshkjfdh, jgiojgrier,jgsoidjgi jsgejr fdklgjls. gjksljgkljfglkaj gjsklfj aloha list: apple, ...sghjdfkghaksjhfgjk, fshkjfdh, jgiojgrier,jgsoidjgi jsgejr fdklgjls. gjksljgkljfglkaj gjsklfj aloha",
    date: new Date().toDateString(),
  },
  {
    title: "pay product",
    description: "list: apple, ...",
    date: new Date().toDateString(),
  },
  {
    title: "pay product",
    description:
      "list: apple, ... ghjdfkghaksjhfgjk, fshkjfdh, jgiojgrier,jgsoidjgi ",
    date: new Date().toDateString(),
  },
];

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.tasks = tasks;
  }

  componentDidMount() {
    console.log(this.tasks);
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
    items: state.tasks,
  }),
  null
)(ToDoList);
