const inquirer = require('inquirer')

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Your Name: ',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'ID: ',
    },
    {
        type: 'input',
        name: 'managerEmail',
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
        name: 'engineerName',
        message: "Engineer's name:"
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "Engineer's ID:"
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Engineer's Email:"
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: "Engineer's GitHub Username:",
    }
]
const internQs = [
    {
        type: 'input',
        name: 'internName',
        message: "Intern's Name:",
    },
    {
        type: 'input',
        name: 'internID',
        message: "Intern's ID:",

    },
    {
        type: 'input',
        name: 'internEmail',
        message: "Intern's Email:",

    },
    {
        type: 'input',
        name: 'internSchool',
        message: "intern's School:",
    },
]

function init() {
    inquirer.prompt(managerQuestions).then((managerAnswers)=>{
        allMembers.push(managerAnswers)
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
        allMembers.push(engineerInfo)
        selectTeamMember()
    })
}

function internPrompts(){
    inquirer.prompt(internQs).then((internInfo)=>{
        allMembers.push(internInfo)
        selectTeamMember()
    })
}

function generateHTML(){
    console.log(allMembers)
}

const allMembers = []

init()

