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
            type: 'input',
            name: 'name',
            message: "Welcome to Team Database Generator! Please enter the Team Manager's name."
        },    
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Manager's ID."
        },    
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's email."
        },
        {
            type: 'input',
            name: 'phone',
            message: "Please enter the Manager's office number"
        }
    ])
    .then((managerData) => {
        // need to push into teamRoster here
        menuOptions();
    })
}

const addEmployee = () => {
    console.log(`cool thing here`);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employee's name."
        },    
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID."
        },    
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address."
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's GitHub username."
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the school that the intern is attending."
        }
    ])
    .then((employeeData) => {
        // need to push to teamRoster here
        menuOptions();
    })
}

const menuOptions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'options', 
            message: 'What would you like to do next?',
            choices: ['Add Another Employee', 'Get Team Roster']
        }
    ])
    .then((input) => {
        switch (input.options) {
            case 'Add Another Employee': 
                addEmployee();
                break;
            case 'Get Team Roster': 
                let employeeData = generateHTML(teamRoster);
                writeToFile(employeeData)
                break;
        
            default: console.log(`That didn't work :(`)
                break;
        }
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
