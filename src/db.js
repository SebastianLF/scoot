const projects = [
    {
        title: '',
        description: '',
        creator: '',
        languages: [javascript],
        skills: [],
        difficulty: '',
        timezone: '',
        participants: [],
        created_at: ''
    },
    {
        title: '',
        description: '',
        creator: '',
        languages: [python],
        skills: [],
        difficulty: '',
        timezone: '',
        participants: [],
        created_at: ''
    }
]

function filterBy(type) {
    return projects.filter((project) => project.languages.includes(type))
}

export default {
    filterBy
}