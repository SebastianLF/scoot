import React, { useState, useEffect } from "react"
import Select from "react-select"
import styled from "styled-components"
import ProjectLine from "../../components/ProjectLine"
import api from '../../utils/api'
import { languages, frameworks } from '../../utils/data'

const Container = styled.div`
  font-size: 1rem;
  color: grey;
`
const Projects = styled.div``


export default function Home() {
  const [projects, setProjects] = useState([])
  const [isError, setIsError] = useState(false)
  const [search, setSearch] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await api.projects.search(search)
        console.log(fetchedProjects)

        setProjects(fetchedProjects)

      } catch (error) {
        console.log(error);

        setIsError(true)
      }
    }

    fetchProjects()
  }, [search])

  const filterSearch = (e) => {
    setSearch(e)
  }

  return (
    <Container>
      <Select
        options={languages}
        placeholder="Search..."
        onChange={filterSearch}
        isMulti
      />
      {isError ? (
        <div>Something went wrong</div>
      ) : (
          <Projects>
            {projects.map(project => <ProjectLine key={project.id} {...project} />)}
          </Projects>
        )
      }

    </Container>
  )
}
