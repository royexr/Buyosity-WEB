import React, { Component } from "react";

import Empresa from "./Entidades/Empresa";

class Dashboard extends Component {

  render() {
    return (
      <div className="container" >
        <h1>Tablero</h1>
        <div className="row">
          <div className="col-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
              <a className="nav-link" id="v-pills-empresa-tab" data-toggle="pill" href="#v-pills-empresa" role="tab" aria-controls="v-pills-empresa" aria-selected="false">Empresa</a>
              <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
              <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Home</div>
              <div className="tab-pane fade" id="v-pills-empresa" role="tabpanel" aria-labelledby="v-pills-empresa-tab"><Empresa></Empresa></div>
              <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Messages</div>
              <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Settings</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;