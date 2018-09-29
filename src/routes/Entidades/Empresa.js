import React, { Component } from "react";

class Empresa extends Component {
  constructor(props) {
    super(props);

    this.componentWillMount = this.componentWillMount.bind(this);
    this.Delete = this.Delete.bind(this);
    this.Update = this.Update.bind(this);

    this.state = {empresas: []};
  }

  Delete(e) {
    e.preventDefault();
    console.log(e.target.parentElement.parentElement.id);
    fetch("http://localhost:3001/empresa/" + e.target.parentElement.parentElement.id, {
      method: "DELETE",
      mode: "cors",
      cache: "default",
      credentials: "same-origin",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow",
      referrer: "client"
    })
    .then(res => res.json())
    .then((response) => {
        console.log('Success:', JSON.stringify(response));
    })
    .catch(error => console.error('Error:', error));
  }

  Update(e) {
    
  }

  componentWillMount() {
    fetch("http://localhost:3001/empresa/", {
      mode: "cors",
      cache: "default"
    })
    .then(res => res.json())
    .then((myJson) => {
      console.log(myJson);
      this.setState({empresas: myJson});
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <table className="table" >
          <thead>
            <tr>
              <th scope="col" >RUC</th>
              <th scope="col" >Nombre</th>
              <th scope="col" >Descripcion</th>
              <th scope="col" >Operaciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empresas.map( (empresa) => {
              return (
              <tr id={empresa._id} key={empresa._id} >
                <td>{empresa.RUC}</td>
                <td>{empresa.Nombre}</td>
                <td>{empresa.Descripcion}</td>
                <td>
                  <i className="fas fa-trash-alt mx-1 btn btn-outline-danger" onClick={this.Delete} ></i>
                  <i className="fas fa-pencil-alt mx-1 btn btn-outline-primary" onClick={this.Update} ></i>
                </td>
              </tr>
              )})}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Empresa;