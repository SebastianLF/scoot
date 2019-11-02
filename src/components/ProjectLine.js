import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import Icon from "./Icon"

import DevLogos from "../assets/img/sprite.svg";

const Container = styled.a`
    font-size: 1rem;
    height: 5rem;
    border-bottom: 1px solid #e6eaee;
    display: flex;
    align-items: center;
    padding: 1.2rem;
    border: 1px solid #e6eaee;
    border-bottom: 0;
    border-radius: 4px 4px 0 0;
    background-color: #fff;
    color: #354052;
    transition: transform 0.02s;

    &:hover {
      transform: scale(1.01);
    }
`

const Creator = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  `;
const Title = styled.div`
    flex: 0 0 15rem;
`;
const Body = styled.div`
    margin: ${props => !props.small ? "2px 0 10px 0" : props.smallicon ? "2px 0 0 0" : ""};
  `;
const Head = styled.div`
    font-size: 0.9em;
    color: palevioletred;
    margin: ${props => props.smallicon ? "3px 0 0 0" : ""};
  `;
const Languages = styled.div`
    flex: 0 0 10rem;
`;
const Language = styled.svg``;
const Skills = styled.div`
    flex: 0 0 15rem;
`;

const Participants = styled.div`flex-grow: 1`;
const Level = styled.div`flex: 0 0 5rem;`;
const Timezone = styled.div`flex: 0 0 5rem;`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `
const Date = styled.div`flex: 0 0 3rem;`;

export default function ProjectLine(props) {

  return (
    <Container href='/projects/2'>
      <Title>
        <Info>
          <Body>{props.title}</Body>
          <Head>Project</Head>
        </Info>
      </Title>

      <Languages>
        <Body small>
          {props.languages && props.languages.map((language) => <Icon key={language.id} icon={language.label}></Icon>)}
        </Body>
        <Head smallicon>Languages</Head>
      </Languages>
      <Skills>
        <Body small>
          {props.skills && props.skills.map((skill) => <Icon key={skill.id} icon={skill.label}></Icon>)}
        </Body>
        <Head smallicon>Tools & frameworks</Head>
      </Skills>
      <Level>
        <Body>Beginner</Body>
        <Head>Difficulty</Head>
      </Level>
      <Timezone>
        <Body>UTC</Body>
        <Head>Timezone</Head>
      </Timezone>
      <Participants>
        <Body>1/4</Body>
        <Head>Participants</Head>
      </Participants>
      <Date>
        <Body>{props.posted}</Body>
        <Head>Posted</Head>
      </Date>
    </Container>
  )
}
