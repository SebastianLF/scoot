import React, { useState, useEffect } from "react"
import Select from "react-select"
import styled from "styled-components"
import ProjectLine from "../../components/ProjectLine"
import Modal from "../../components/Modal"
import api from '../../utils/api'
import { languages, frameworks } from '../../utils/data'

const Container = styled.div`
  font-size: 1rem;
  color: grey;
`
const Projects = styled.div`
  margin: 1rem 0 2rem 0;
`
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
const selectStyles = {
  input: () => ({
    padding: '0.6rem'
  })
}
const searchOptions = [...languages, ...frameworks]

const Text = styled.p`
  display: inline-block;
  font-size: 1.5em;
  color: #fff;
`

const NewProject = styled.section`
  text-align: center;
  margin: 0 0 3rem 0;
`

const SubmitButton = styled.button`
  padding: 1em 1.2em;
  margin: 0 0 0 1rem;
  background: #38ef7d;
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`


export default function Home() {
  const [projects, setProjects] = useState([])
  const [isError, setIsError] = useState(false)
  const [search, setSearch] = useState(null)
  const [projectsToDisplay, setProjectsToDisplay] = useState(10)
  const [showModal, setShowModal] = useState(false)

  const displayMore = projects.length > projectsToDisplay ? true : false

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const fetchedProjects = await api.projects.search(search)
        setProjects(fetchedProjects)

      } catch (error) {

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
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <NewProject>
        <Text>Want your project to appear on this list?</Text>
        <SubmitButton onClick={() => setShowModal(true)}>Submit your project</SubmitButton>
      </NewProject>
      <Select
        options={searchOptions}
        styles={selectStyles}
        placeholder="Search..."
        onChange={filterSearch}
        isMulti
      />
      {isError ? (
        <div>Something went wrong</div>
      ) : (
          <Projects>
            {projects.slice(0, projectsToDisplay).map(project => <ProjectLine key={project.id} {...project} />)}
          </Projects>
        )
      }

      {displayMore ? (
        <Button
          onClick={() => setProjectsToDisplay(projectsToDisplay + 10)}
          type="text">
          {(projectsToDisplay - 1) >= projects.length - 1 ? 'No more to display' : 'Show more'}
        </Button>
      ) : ''
      }
    </Container>
  )
}
