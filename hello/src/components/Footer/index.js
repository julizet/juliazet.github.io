import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import Imprint from "../../pages/Imprint.js";

class Footer extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div className="footer">
          <br />
          <Link to={"/imprint"} className="nav-link">
            <p>Imprint</p>
          </Link>
          <Switch>
            <Route path="/imprint" component={Imprint} />
          </Switch>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Footer;
