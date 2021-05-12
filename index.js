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
        message: 'Inters Name:',
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
    inquirer.prompt(managerQuestions).then(()=>{
        selectTeamMember()
    })
}

function selectTeamMember(){
    inquirer.prompt(selectTeamMemberList).then((selectedMember)=>{
        if(selectedMember==='Engineer'){
            engineerPrompts()
        }
        if(selectMember==='Intern'){
            internPrompts()
        }
        if(selectedMember==='Finish building team'){
            generateHTML()
        }
    })
}

function engineerPrompts(){
    inquirer.prompt(engineerQs)
}

function internPrompts(){
    inquirer.prompt(internQs)
}

init()

