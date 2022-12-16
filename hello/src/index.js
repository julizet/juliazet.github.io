import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "theme-ui";
import theme from "./style/theme";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import "./style/App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import About from "./components/About";
import Contact from "./components/Contact";
import Imprint from "./components/Imprint";
import Navigation from "./components/Navigation/index.js";
import Toggle from "./components/Toggle/index.js";
import Badges from "./components/Badges";

const Main = withRouter(({ location }) => {
  return (
    <ThemeProvider theme={theme}>
      {}
      <div className="App">
        <div className="header">
          <Toggle />
          <Navigation />
          <Badges />
        </div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/imprint" component={Imprint} />
      </div>
    </ThemeProvider>
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
