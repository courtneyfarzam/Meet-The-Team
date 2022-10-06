const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const generateHTML = require('./src/generateHTML');

const teamRoster = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'welcome',
            message: 'Welcome to Team Database Generator! Are you ready to begin?'
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter your name."
        },    {
            type: '',
            name: '',
            message: ''
        },    {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
    ])
    .then((managerData) => {
        // need to push here
    })
}

const addEmployee = () => {
    console.log(`cool thing here`);

    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'welcome',
            message: 'Welcome to Team Database Generator! Are you ready to begin?'
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter your name."
        },    {
            type: '',
            name: '',
            message: ''
        },    {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
    ])
    .then((employeeData) => {
        // need to push here
    })
}

const writeToFile = (data) => {
    fs.writeFile('./dist/index.html', data, (err) => {
        if(err) {
            console.log('Oops, there was an error!')
        } else {
            console.log('Please check the "dist" folder for your files! Thank you!')
        }
    })
}

addManager()
.then(addEmployee)
.then((roster) => {
    generateHTML(roster)
})
.then((info) => {
    return writeToFile(info)
})
.catch((err) => {
    console.log(err)
})
