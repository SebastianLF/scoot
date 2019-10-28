import { languages, frameworks } from './data'
import selection from '../assets/selection.json'
import faker from 'faker'
import { randomNumber, randomPicks } from './random'

// const options = initOptions(selection)

// function initOptions(selection) {
//     return selection.icons.map((skill) => skill.properties && skill.properties.name ? ({
//         value: skill.properties.name,
//         label: skill.properties.name
//     }) : '')
// }

const projects = {
    getAll: () => generateProjects(),
}

const generateProjects = () => new Promise((resolve, reject) => {
    let projects = []

    try {
        for (let i = 0; i < randomNumber(20); i++) {
            const newProject = {
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
        return resolve(projects)
    } catch (error) {
        return reject('Error!')
    }
})


export default {
    options: [...languages, ...frameworks],
    projects,
    generateProjects
}