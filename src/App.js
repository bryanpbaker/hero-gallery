import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "normalize.css";
import CssBaseline from "material-ui/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import red from "material-ui/colors/red";
import blue from "material-ui/colors/blue";
import yellow from "material-ui/colors/yellow";
import orange from "material-ui/colors/orange";
import "./App.css";

import HeroSearch from "./components/views/HeroSearch/HeroSearch";
import HeroDetail from "./components/views/HeroDetail/HeroDetail";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue,
    error: orange
  },
  status: {
    danger: yellow
  }
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/" component={HeroSearch} />
              <Route exact path="/test" component={HeroDetail} />
            </Switch>
          </MuiThemeProvider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
