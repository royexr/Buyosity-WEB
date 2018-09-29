import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Inicio from "./Home";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import Tablero from "./Dashboard";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => <Inicio {...props} ></Inicio>} ></Route>
      <Route path="/Contactanos" render={props => <Contact {...props} ></Contact>} ></Route>
      <Route path="/Nosotros" render={props => <About {...props} ></About>} ></Route>
      <Route path="/Login" render={props => <Login {...props} ></Login>} ></Route>
      <Route path="/Tablero" render={props => <Tablero {...props} ></Tablero>} ></Route>
    </Switch>
  </BrowserRouter>
);