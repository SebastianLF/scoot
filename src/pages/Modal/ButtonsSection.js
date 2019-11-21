import React from 'react'
import Button from './style/Button'
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    margin: 1em 0 0 0;
`
const ButtonClose = styled(Button)`
    background: #a4b0be;
    margin: 0 1em 0 0;
`
const ButtonSubmit = styled(Button)`
    background: #38ef7d;
`

export default function ButtonsSection({ setShowModal }) {
    return (
        <Container>
            <ButtonClose onClick={() => setShowModal(false)}>Close</ButtonClose>
            <ButtonSubmit type="submit">Submit</ButtonSubmit>
        </Container>
    )
}
