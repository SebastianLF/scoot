import React, { useState } from 'react'
import styled from "styled-components"
import {
    useParams
} from "react-router-dom"
import faker from "faker"
import DevLogos from "../../assets/img/sprite.svg";

const Container = styled.div`
    position: relative;
    width: 50vw;
    margin: 0 auto;
    background-color: white;
    border-radius: 0.25rem;
    padding: 2rem;
`
const Header = styled.div`
    display: flex;
`

const EmptySlot = styled.svg`
    cursor: pointer;
    margin: 0 0 0 -8px;
    padding: 5px;
    width: 2rem;
    height: 2rem;
    border: 2px solid #fff;
    border-radius: 50%;
    color: currentColor;
    background: linear-gradient(to right, #7f00ff, #e100ff);
`

const Label = styled.span`
    font-size: 0.875em;
    color: #4A00E0;
    font-weight: 400;
    margin-right: 3px;
`
const Title = styled.h1`
    font-weight: 300;
`
const Contact = styled.div`

`
const Creator = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0.5em 0 0;
`
const Avatar = styled.img`
cursor: pointer;
margin: 0 0 0 -8px;
    width: ${props => props.small ? "2rem" : "3rem"}
    height: ${props => props.small ? "2rem" : "3rem"}
    border: 2px solid #fff;
    border-radius: 50%;
`
const Avatars = styled.div`
margin: 0 1em 0 0;
`
const Left = styled.p`
    font-size: 0.875em;
    color: #4A00E0;
`
const Name = styled.div``
const Languages = styled.div`height: 100%`
const Skills = styled.div`
    margin: 1em 0 1em 0;
`
const Skill = styled.a`
    display: inline-block;
    color: #4A00E0;
    cursor: pointer;
    padding: 4px 12px;
    margin: 0 0.25em 0 0;
    border: 1px solid #e5e5e5;
    border-radius: 28px;

    &:hover {
        text-decoration: underline;
    }

`
const Level = styled.div`
    margin: 0 1em 0 0;
`
const Timezone = styled.div`
    margin: 0 1em 0 0;
`
const Participants = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-left: auto;
`
const Description = styled.div`
    font-size: 1.05em;
    color: #636363;
    margin: 0 0 1em 0;
`
const Apply = styled.div`
`

const Status = styled.div`
        font-size: 0.8125em;
        font-weight: 600;
        display: inline-block;
        margin: 0 1.5em 0 0;
        border-radius: 3px;
        color: #fff;
        background: ${props => props.open
        ? "linear-gradient(to right, #56ab2f, #a8e063)"
        : "red"
    };
        padding: 0.25em 0.5em;
    `

const Card = styled.div`
        display:flex;
        flex-direction: column;
    `
const Infos = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
    `

const Commitment = styled.div``
const TextArea = styled.textarea`
    outline: none;
    border: 3px solid #cbd5e0;
    border-radius: 3px;
`
const Button = styled.button`
cursor: pointer;
    margin: 1em 0 1em 0;
    border: none;
    padding: 1em 2em;
    border-radius: 3px;
    color: #fff;
    background: linear-gradient(to right, #8e2de2, #4a00e0);
    box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);
`


export default function Project(props) {
    const [infos, getInfos] = useState('')
    let { id } = useParams()

    return (
        <Container>
            <Header>
                <Card>
                    <Title>{faker.name.title()}</Title>
                    <Infos>
                        <Status open>Open</Status>

                        <Avatars>
                            <Avatar src={faker.internet.avatar()} small></Avatar>
                            <Avatar src={faker.internet.avatar()} small></Avatar>
                            <EmptySlot>
                                <use xlinkHref={`${DevLogos}#icon-user-plus`} alt="add a user"></use>
                            </EmptySlot>
                            <EmptySlot>
                                <use xlinkHref={`${DevLogos}#icon-user-plus`} alt="add a user"></use>
                            </EmptySlot>
                        </Avatars>
                        <Level>
                            <Label>Level</Label>
                            Beginner
                        </Level>
                        <Timezone>
                            <Label>Timezone</Label>
                            UTC
                        </Timezone>
                        <Commitment>
                            <Label>Commitment</Label>
                            20h/week
                        </Commitment>
                    </Infos>
                </Card>
            </Header>
            <Skills>
                <Skill>Javascript</Skill>
                <Skill>Redis</Skill>
                <Skill>Atom</Skill>
            </Skills>
            <Description>
                {faker.lorem.paragraphs()}
            </Description>
            <Apply>
                <Button>Apply!</Button>
            </Apply>

        </Container>
    )
}
