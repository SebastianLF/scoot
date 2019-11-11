import { languages, frameworks } from './data'
import faker from 'faker'
import { randomNumber, randomPicks } from './random'
import uuid from 'uuid'

const data = {
    projects: [],
    options: []
}

// Generate fake random projects
const generateProjects = () => {
    let projects = []

    for (let i = 0; i < randomNumber(100); i++) {
        const newProject = {
            id: uuid(),
            posted: 'Today',
            title: faker.name.title(),
            description: faker.lorem.paragraphs(),
            languages: randomPicks(languages, randomNumber(2)),
            skills: randomPicks(frameworks, randomNumber(8)),
            difficulty: randomPicks(['Entry', 'Intermediate', 'Experienced']),
            timezone: randomPicks(['UTC', 'UTC+2', 'UTC+8']),
            participants: randomPicks([{
                name: faker.internet.userName(),
                email: faker.internet.email()
            },
            {
                name: faker.internet.userName(),
                email: faker.internet.email()
            },
            {
                name: faker.internet.userName(),
                email: faker.internet.email()
            },
            {
                name: faker.internet.userName(),
                email: faker.internet.email()
            }], randomNumber(4))
        }

        projects.push(newProject)
    }
    return projects
}
data.projects = generateProjects()

// faking server side projects filtering.
const filter = (filters) => {

    // return all projects when filters equals 'null'.
    if (!filters) return data.projects

    return data.projects.filter((project) => {
        const languagesAndSkills = [...project.languages, ...project.skills]

        return filters.every((element) => {
            const foundElement = languagesAndSkills.some(skill => skill.id === element.id)
            if (foundElement) return true

            return false
        })
    })
}

// API
const APIprojects = {
    search: (filters) => new Promise((resolve, reject) => resolve(filter(filters)))
}

data.options = [...languages, ...frameworks]

export default {
    options: data.options,
    projects: APIprojects
}