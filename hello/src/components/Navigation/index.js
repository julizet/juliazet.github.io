/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxImportSource theme-ui */
import { Route, Link, Switch } from "react-router-dom";

import About from "../About";
import Contact from "../Contact";

const Navigation = () => {
  return (
    <div class="menu">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/about"} className="nav-link">
          About
        </Link>
        <Link to={"/contact"} className="nav-link">
          Contact
        </Link>
      </nav>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Navigation;
