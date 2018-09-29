import React, { Component } from "react";
import Menu from "./Menu";

class About extends Component {

  render() {
    return (
      <div className="container" >
        <Menu {...this.props} ></Menu>
        <h1>Nosotros</h1>
      </div>
    )
  }
}

export default About;