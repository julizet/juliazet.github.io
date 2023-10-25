/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxImportSource theme-ui */
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="menu">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/about"} className="nav-link">
          About
        </Link>
        <Link to={"/contact"} className="nav-link">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
