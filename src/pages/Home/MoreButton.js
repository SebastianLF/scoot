import React from 'react'
import styled from "styled-components"

const Button = styled.button`
  padding: 1em 1.2em;
  display: block;
  margin: 0 auto;
  background: #fff;
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

export default function MoreButton(props) {
    const { setProjectsToDisplay, projectsToDisplay, projectsLength } = props
    const label = (projectsToDisplay - 1) >= projectsLength - 1 ? 'No more to display' : 'Show more'
    const displayMore = projectsLength > projectsToDisplay ? true : false

    if (!displayMore) return null

    return (
        <Button
            onClick={() => setProjectsToDisplay(projectsToDisplay + 10)}
            type="text"
        >
            {label}
        </Button>
    )
}
