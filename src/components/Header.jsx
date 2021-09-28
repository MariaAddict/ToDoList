import React from "react";
import { Typography } from "antd";
import "antd/dist/antd.css";

class Header extends React.Component {
  render() {
    return (
      <header style={{ marginTop: 50 }}>
        <Typography.Title code={false} style={{ textAlign: "center" }}>
          To do list
        </Typography.Title>
      </header>
    );
  }
}

export default Header;
