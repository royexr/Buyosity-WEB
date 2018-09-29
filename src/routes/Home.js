import React, { Component } from "react";
import Menu from "./Menu";

class Inicio extends Component {

  render() {
    return (
      <div className="container" >
        <Menu {...this.props} ></Menu>
        <div className="jumbotron">
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Inicio;