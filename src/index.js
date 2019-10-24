import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home"
import Project from "./pages/Project"

import "./styles.css";

const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
`;

const App = function () {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/projects/:id"><Project /></Route>
        </Switch>
      </Container>
    </Router>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
