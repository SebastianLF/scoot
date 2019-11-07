import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home"
import Project from "./pages/Project"

import "./styles.css";

const Container = styled.div`
  max-width: 60vw;
  margin: 6rem auto;
  min-height: 100vh;
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
