import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Imprint from "./Imprint";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Link to={"/imprint"} className="nav-link">
          Imprint
        </Link>
        <Switch>
          <Route path="/imrpint" component={Imprint} />
        </Switch>
      </div>
    );
  }
}

export default Footer;
