import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ThemeProvider} from 'styled-components'
import theme from './theme'

import ComponentPage from './pages/ComponentPage'

const Navigator = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/"><ComponentPage /></Route>
        <Route path="*"> 404</Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
};
export default Navigator;
