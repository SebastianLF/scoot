import React from 'react'
import styled from "styled-components"
import DevLogos from "../assets/img/sprite.svg";

const Container = styled.svg`
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 0.25rem 0 0;
  `

export default function Icon(props) {
    return (
        <Container>
            <use xlinkHref={`${DevLogos}#icon-${props.icon}`} alt={props.icon}></use>
        </Container>
    )
}
