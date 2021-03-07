import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "./style/App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import About from "./components/About";
import Contact from "./components/Contact";
import Imprint from "./components/Imprint";

const Main = withRouter(({ location }) => {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/imprint" component={Imprint} />
    </div>
  );
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
