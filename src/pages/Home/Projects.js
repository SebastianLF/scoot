import React from 'react'
import styled from 'styled-components'
import ProjectLine from "../../components/ProjectLine"

const Container = styled.div`
  margin: 1rem 0 2rem 0;
`

export default function Projects(props) {
    const { projects, isError, projectsToDisplay } = props

    if (isError) return <Container>Something went wrong!</Container>

    return (
        <Container>
            {projects.slice(0, projectsToDisplay).map(project =>
                <ProjectLine key={project.id} {...project} />)
            }
        </Container>
    )
}
