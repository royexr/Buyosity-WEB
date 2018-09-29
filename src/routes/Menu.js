import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {

  render(){

    var Inicio, Contactanos, Nosotros, Login;

    switch (this.props.location.pathname) {
      case "/":
        Inicio = "active";
        break;
      case "/Contactanos":
        Contactanos = "active";
        break;
      case "/Nosotros":
        Nosotros = "active";
        break;
      case "/Login":
        Login = "active";
        break;
      default:
        Inicio = "active";
        break;
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Buyosity</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className={"nav-link " + Inicio}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contactanos" className={"nav-link " + Contactanos}>Contactanos</Link>
              </li>
              <li className="nav-item">
                <Link to="/Nosotros" className={"nav-link " + Nosotros} >Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" className={"nav-link " + Login} >Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Menu;