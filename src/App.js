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

import HeroSearch from "./components/views/HeroSearch";
import HeroDetail from "./components/views/HeroDetail";
import { ThemeProvider } from "styled-components";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue,
    accent: yellow,
    error: orange
  },
  status: {
    danger: yellow
  }
});

const scTheme = {
  primary: red[500],
  secondary: blue[500],
  secondarySoft: blue[300],
  secondaryDark: blue[700],
  boldFont: "'Bangers', cursive",
  font: "'Oswald', sans-serif"
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={scTheme}>
              <Switch>
                <Route exact path="/" component={HeroSearch} />
                <Route exact path="/hero/:id" component={HeroDetail} />
              </Switch>
            </ThemeProvider>
          </MuiThemeProvider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
