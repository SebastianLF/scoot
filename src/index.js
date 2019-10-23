import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  color: grey;
`;

const List = styled.ul`
  height: 7rem;
`;

const Project = styled.li`
  border-bottom: 1px solid #e6eaee;
  display: flex;
  justify-content: space-around;
  padding: 1.2rem;
`;

const Title = styled.div``;
const Languages = styled.div``;
const Skills = styled.div``;
const Participants = styled.div``;
const Level = styled.div``;

function App() {
  return (
    <Container>
      <List>
        <Project>
          <Title>A spotify Clone</Title>
          <Languages>JS</Languages>
          <Skills>Redux, Node, Git</Skills>
          <Level>Beginner</Level>
          <Participants>1/4</Participants>
        </Project>
      </List>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
