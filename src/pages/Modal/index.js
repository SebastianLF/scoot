import React from 'react'
import styled from "styled-components"
// import PropTypes from 'prop-types'
import Heading from './Heading'
import Form from './Form'

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    font-size: 1rem;
`
const Main = styled.div`
    position: relative;
    background: white;
    border-radius: 5px;
    width: 60em;
    padding: 2em;
    margin: 2em auto;
`

export default function Modal(props) {
    if (!props.showModal) return null

    return (
        <Container>
            <Main>
                <Heading>Add a new project</Heading>
                <Form {...props} />
            </Main>
        </Container>
    )
}

