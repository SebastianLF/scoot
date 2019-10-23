import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

import DevLogos from "./img/sprite.svg";
import logo from "./img/react.svg";

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
const Skill = styled.svg`
  height: 2rem;
  width: 2rem;
`;
const Participants = styled.div``;
const Level = styled.div``;

function App() {
  return (
    <Container>
      <List>
        <Project>
          <Title>A spotify Clone</Title>
          <Languages>JS</Languages>
          <Skills>
            <img src={logo} alt="azd" />
            <Skill />
          </Skills>
          <Level>Beginner</Level>
          <Participants>1/4</Participants>
        </Project>
      </List>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
