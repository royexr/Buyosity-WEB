import React, { Component } from "react";
import Menu from "./Menu";

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {usuario: "", contraseña: ""};

    this.handleChange = this.handleChange.bind(this);
    this.Login = this.Login.bind(this);
  }
  
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  Login(e){

    console.log("presionaste el boton");
    e.preventDefault();

    fetch("http://localhost:3001/usuario/Login", {
      method: "POST",
      mode: "cors", 
      cache: "default",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow",
      referrer: "client",
      body: JSON.stringify({"usuario": this.state.usuario, "contraseña": this.state.contraseña}), // body data type must match "Content-Type" header
    })
    .then(res => res.json())
    .then((response) => {
      console.log('Success:', JSON.stringify(response));
      this.props.history.push("/Tablero")
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    return(
      <div className="container" >
        <Menu {...this.props} ></Menu>
        <div className="row" >
          <div className="col-10 offset-1 col-sm-6 offset-sm-3 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4" >
            <div className="container" >
              <form method="POST" onSubmit={this.Login} >
                <h1>Login</h1>
                <div className="form-group" >
                  <label htmlFor="usuario" >Usuario:</label>
                  <div className="input-group" >
                    <div className="input-group-prepend" >
                      <span className="input-group-text" ><i className="fas fa-user" ></i></span>
                    </div>
                    <input type="text" className="form-control" name="usuario" id="usuario" aria-describedby="usuarioHelp" placeholder="Ingrese usuario" onChange={this.handleChange} value={this.state.usuario} autoComplete="off" ></input>
                  </div>
                </div>
                <div className="form-group" >
                  <label htmlFor="contraseña" >Contraseña:</label>
                  <div className="input-group" >
                    <div className="input-group-prepend" >
                      <span className="input-group-text" ><i className="fas fa-lock" ></i></span>
                    </div>
                    <input type="password" className="form-control" name="contraseña" id="contraseña" aria-describedby="usuarioHelp" placeholder="Ingrese contraseña" onChange={this.handleChange} value={this.state.contraseña} autoComplete="off" ></input>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" >Ingresar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;