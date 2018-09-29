import React, { Component } from "react";
import Menu from "./Menu";

class Contact extends Component {

  render() {
    return (
      <div className="container" >
        <Menu {...this.props} ></Menu>
        <h1>Contactanos</h1>
      </div>
    )
  }
}

export default Contact;