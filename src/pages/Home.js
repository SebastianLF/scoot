import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import "../styles.css";

import DevLogos from "../img/sprite.svg";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  color: grey;
`;

const List = styled.div`
  height: 7rem;
`;

const Project = styled.a`
  border-bottom: 1px solid #e6eaee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.2rem;
`;

const Creator = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
const Title = styled.div``;
const Languages = styled.div`
  display: flex;
`;
const Language = styled.svg``;
const Icons = styled.div`
  display: flex;
`;
const Icon = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
  margin: 0 0.25rem 0 0;
`
const Participants = styled.div``;
const Level = styled.div``;
const Timezone = styled.div``;

export default function Home() {
    return (
        <Container>
            <List>
                <Project href='/projects/2'>
                    {/* <Creator></Creator> */}
                    <Title>A spotify Clone</Title>
                    <Languages>
                        <Icon><use xlinkHref={`${DevLogos}#icon-javascript`} alt="azd"></use></Icon>
                    </Languages>
                    <Icons>
                        <Icon><use xlinkHref={`${DevLogos}#icon-react`} alt="react"></use></Icon>
                        <Icon><use xlinkHref={`${DevLogos}#icon-redux1`} alt="redux"></use></Icon>
                        <Icon><use xlinkHref={`${DevLogos}#icon-github`} alt="github"></use></Icon>
                        <Icon><use xlinkHref={`${DevLogos}#icon-node-dot-js`} alt="node"></use></Icon>
                        <Icon><use xlinkHref={`${DevLogos}#icon-git`} alt="git"></use></Icon>
                    </Icons>
                    <Level>Beginner</Level>
                    <Timezone>UTC</Timezone>
                    <Participants>1/4</Participants>
                </Project>
            </List>
        </Container>
    );
}
