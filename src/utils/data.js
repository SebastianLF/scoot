import uuid from 'uuid'

export const languages = [
    { id: uuid(), value: 'javascript', label: 'javascript' },
    { id: uuid(), value: 'ruby', label: 'ruby' },
    { id: uuid(), value: 'python', label: 'python' },
    { id: uuid(), value: 'css3', label: 'css3' },
    { id: uuid(), value: 'html5', label: 'html5' },
    { id: uuid(), value: 'typescript', label: 'typescript' },
    { id: uuid(), value: 'cplusplus', label: 'cplusplus' },
    { id: uuid(), value: 'php', label: 'php' },
    { id: uuid(), value: 'java', label: 'java' },
    { id: uuid(), value: 'swift', label: 'swift' },
    { id: uuid(), value: 'go', label: 'go' }
]

export const frameworks = [
    { id: uuid(), value: 'react', label: 'react' },
    { id: uuid(), value: 'angular', label: 'angular' },
    { id: uuid(), value: 'symfony', label: 'symfony' },
    { id: uuid(), value: 'vue-dot-js', label: 'Vue js' },
    { id: uuid(), value: 'node-dot-js', label: 'Node js' },
    { id: uuid(), value: 'wordpress', label: 'wordpress' },
    { id: uuid(), value: 'drupal', label: 'drupal' },
    { id: uuid(), value: 'bootstrap', label: 'bootstrap' },
    { id: uuid(), value: 'codeigniter', label: 'codeigniter' },
    { id: uuid(), value: 'd3-dot-js', label: 'D3 js' },
    { id: uuid(), value: 'django', label: 'django' },
    { id: uuid(), value: 'dot-net', label: 'Dot net' },
    { id: uuid(), value: 'jquery', label: 'jquery' },
    { id: uuid(), value: 'laravel', label: 'laravel' },
    { id: uuid(), value: 'meteor', label: 'meteor' },
    { id: uuid(), value: 'rails', label: 'rails' },
]

export const tools = [
    { id: uuid(), value: 'sass', label: 'sass' },
    { id: uuid(), value: 'slack', label: 'slack' },
    { id: uuid(), value: 'trello', label: 'trello' },
    { id: uuid(), value: 'webpack', label: 'webpack' },
    { id: uuid(), value: 'bower', label: 'bower' },
    { id: uuid(), value: 'docker', label: 'docker' },
    { id: uuid(), value: 'git', label: 'git' },
    { id: uuid(), value: 'github', label: 'github' },
    { id: uuid(), value: 'gitlab', label: 'gitlab' },
    { id: uuid(), value: 'gitter', label: 'gitter' },
    { id: uuid(), value: 'inkscape', label: 'inkscape' },
]

export const browsers = [
    { id: uuid(), value: 'safari', label: 'Safari' },
    { id: uuid(), value: 'googlechrome', label: 'Google chrome' },
    { id: uuid(), value: 'internetexplorer', label: 'Internet explorer' },
    { id: uuid(), value: 'mozillafirefox', label: 'Mozilla firefox' },
]

export const systems = [
    { id: uuid(), value: 'ubuntu', label: 'ubuntu' },
    { id: uuid(), value: 'android', label: 'android' },
    { id: uuid(), value: 'debian', label: 'debian' },
    { id: uuid(), value: 'linux', label: 'linux' },
]

export const editors = [
    { id: uuid(), value: 'vim', label: 'vim' },
    { id: uuid(), value: 'visualstudiocode', label: 'Visual Studio Code' },
    { id: uuid(), value: 'webstorm', label: 'webstorm' },
    { id: uuid(), value: 'atom', label: 'atom' }
]

export const services = [
    { id: uuid(), value: 'amazonaws', label: 'amazonaws' },
    { id: uuid(), value: 'apache', label: 'apache' },
    { id: uuid(), value: 'nginx', label: 'nginx' },
    { id: uuid(), value: 'heroku', label: 'heroku' },
]

export const db = [
    { id: uuid(), value: 'mongodb', label: 'Mongodb' },
    { id: uuid(), value: 'mysql', label: 'Mysql' },
    { id: uuid(), value: 'oracle', label: 'Oracle' },
    { id: uuid(), value: 'postgresql', label: 'Postgresql' },
    { id: uuid(), value: 'redis', label: 'Redis' },
]

export const levels = [
    { id: uuid(), label: 'Beginner' },
    { id: uuid(), label: 'Intermediate' },
    { id: uuid(), label: 'Expert' }
]

export const UTCTimezones = [
    { id: uuid(), label: 'UTC-12' },
    { id: uuid(), label: 'UTC-11' },
    { id: uuid(), label: 'UTC-10' },
    { id: uuid(), label: 'UTC-9' },
    { id: uuid(), label: 'UTC-8' },
    { id: uuid(), label: 'UTC-7' },
    { id: uuid(), label: 'UTC-6' },
    { id: uuid(), label: 'UTC-5' },
    { id: uuid(), label: 'UTC-4' },
    { id: uuid(), label: 'UTC-3' },
    { id: uuid(), label: 'UTC-2' },
    { id: uuid(), label: 'UTC-1' },
    { id: uuid(), label: 'UTC+0' },
    { id: uuid(), label: 'UTC+1' },
    { id: uuid(), label: 'UTC+2' },
    { id: uuid(), label: 'UTC+3' },
    { id: uuid(), label: 'UTC+4' },
    { id: uuid(), label: 'UTC+5' },
    { id: uuid(), label: 'UTC+6' },
    { id: uuid(), label: 'UTC+7' },
    { id: uuid(), label: 'UTC+8' },
    { id: uuid(), label: 'UTC+9' },
    { id: uuid(), label: 'UTC+10' },
    { id: uuid(), label: 'UTC+11' },
    { id: uuid(), label: 'UTC+12' },
    { id: uuid(), label: 'UTC+13' },
    { id: uuid(), label: 'UTC+14' }
]

export const toolsAndframeworks = [
    ...frameworks,
    ...tools,
    ...browsers,
    ...systems,
    ...editors,
    ...services,
    ...db
]