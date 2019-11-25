import React, { useState, useEffect } from "react"
import Select from "react-select"
import styled from "styled-components"
import Modal from "../Modal"
import Projects from "./Projects"
import MoreButton from "./MoreButton"
import api from '../../utils/api'
import { languages, frameworks } from '../../utils/data'

const searchOptions = [...languages, ...frameworks]

const Container = styled.div`
font-size: 1rem;
  color: grey;
`

const selectStyles = {
  input: () => ({
    padding: '0.6rem'
  })
}

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
        onChange={(e) => setSearch(e)}
        isMulti
      />
      <Projects
        isError={isError}
        projects={projects}
        projectsToDisplay={projectsToDisplay}
      />
      <MoreButton
        setProjectsToDisplay={setProjectsToDisplay}
        projectsToDisplay={projectsToDisplay}
        projectsLength={projects.length}
      />
    </Container>
  )
}
