import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Imprint from "./pages/Imprint";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/imprint" component={Imprint} />
    </Switch>
  );
};

export default Routes;
