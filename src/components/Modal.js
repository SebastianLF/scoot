import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    display: ${props => props.showModal ? "block" : "none"}
`
const Main = styled.div`
    position: relative;
    background: white;
    width: 50%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    border-radius: 5px;
`
// TODO
const Heading = styled.h2`margin: 0 auto;`
const Form = styled.form`margin: 0 auto;`
const Title = styled.input`display:block`
const Languages = styled.select`display:block`
const Tools = styled.select`display:block`
const Level = styled.select`display:block`
const Timezone = styled.select`display:block`

export default function Modal(props) {
    console.log(props)
    return (
        <Container showModal={props.showModal}>
            <Main>
                <Heading>Add a new project</Heading>
                <Form>
                    <Title></Title>
                    <Languages></Languages>
                    <Tools></Tools>
                    <Level></Level>
                    <Timezone></Timezone>
                </Form>
            </Main>
        </Container>
    )
}
