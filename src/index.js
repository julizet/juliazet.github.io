import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Routes from "./Routes";
import Layout from "./Layout";
import "./style/App.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Layout>
          <Routes />
        </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
