import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ThemeProvider} from 'styled-components'
import theme from './theme'

import AllComponentPage from './pages/AllComponentPage'

const Navigator = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/"><AllComponentPage /></Route>
        <Route path="*"> 404</Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
};
export default Navigator;
