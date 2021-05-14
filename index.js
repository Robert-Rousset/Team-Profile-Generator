const inquirer = require('inquirer')
const Employee = require('./Main/lib/Employee')
const Manager = require('./Main/lib/Manager')
const Engineer = require('./Main/lib/Engineer')
const Intern = require('./Main/lib/Intern')

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Your Name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Office Number: ',
    }
];
const selectTeamMemberList = [
    {
        type: 'list',
        name: 'teamMembers',
        message: "Select which team member you'd like to add:",
        choices: ['Engineer', 'Intern', 'Finish building team'],
    }
];
const engineerQs = [
    {
        type: 'input',
        name: 'name',
        message: "Engineer's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Engineer's ID:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Engineer's Email:"
    },
    {
        type: 'input',
        name: 'github',
        message: "Engineer's GitHub Username:",
    }
]
const internQs = [
    {
        type: 'input',
        name: 'name',
        message: "Intern's Name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Intern's ID:",

    },
    {
        type: 'input',
        name: 'email',
        message: "Intern's Email:",

    },
    {
        type: 'input',
        name: 'school',
        message: "intern's School:",
    },
]

function init() {
    inquirer.prompt(managerQuestions).then((managerInfo)=>{
        let employee = new Manager(`${managerInfo.name}`, Number(`${managerInfo.id}`), `${managerInfo.email}`, Number(`${managerInfo.officeNumber}`))
        console.log(employee)
        generateCard(employee)
        selectTeamMember()
    })
}

function selectTeamMember(){
    inquirer.prompt(selectTeamMemberList).then((stuff)=>{
        if(stuff.teamMembers==="Engineer"){
            engineerPrompts()
        }
        if(stuff.teamMembers==="Intern"){
            internPrompts()
        }
        if(stuff.teamMembers==="Finish building team"){
            generateHTML()
        }
    })
}

function engineerPrompts(){
    inquirer.prompt(engineerQs).then((engineerInfo)=>{
        let employee = new Engineer(`${engineerInfo.name}`, Number(`${engineerInfo.id}`), `${engineerInfo.email}`, `${engineerInfo.github}`)
        console.log(employee)
        generateCard(employee)
        selectTeamMember()
    })
}

function internPrompts(){
    inquirer.prompt(internQs).then((internInfo)=>{
        let employee = new Intern(`${internInfo.name}`, Number(`${internInfo.id}`), `${internInfo.email}`, `${internInfo.github}`)
        console.log(employee)
        generateCard(employee)
        selectTeamMember()
    })
}

function generateHTML(){

}

const allMembers = []

init()

