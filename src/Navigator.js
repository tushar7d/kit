import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ThemeProvider} from 'styled-components'
import theme from './theme'

import AllComponentPage from './pages/AllComponentPage'
import Learn from './pages/Learn'
import Home from './pages/Home'

const Navigator = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/all"><AllComponentPage /></Route>
        <Route path="/learn"><Learn /></Route>
        <Route path="/"><Home /></Route>
        <Route path="*"> 404</Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
};
export default Navigator;
