import React from "react";
import { withRouter } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import theme from "./style/theme";
import Navigation from "./components/Navigation";
import Toggle from "./components/Toggle";
import Badges from "./components/Badges";

const Layout = withRouter(({ location, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="header">
          <Toggle />
          <Navigation />
          <Badges />
        </div>
        {children}
      </div>
    </ThemeProvider>
  );
});

export default Layout;
