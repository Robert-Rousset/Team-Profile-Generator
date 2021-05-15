const inquirer = require('inquirer')
const fs = require('fs')

const Manager = require('./Main/lib/Manager')
const Engineer = require('./Main/lib/Engineer')
const Intern = require('./Main/lib/Intern')

let allTeamMembers = [];
let allCards = [];

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
        let manager = new Manager(`${managerInfo.name}`, Number(`${managerInfo.id}`), `${managerInfo.email}`, Number(`${managerInfo.officeNumber}`))
        allTeamMembers.push(manager)
        createManagerCard(manager)
     
        selectTeamMember()
    })
}

function selectTeamMember(){
    inquirer.prompt(selectTeamMemberList).then((list)=>{
        if(list.teamMembers==="Engineer"){
            engineerPrompts()
        }
        if(list.teamMembers==="Intern"){
            internPrompts()
        }
        if(list.teamMembers==="Finish building team"){
            generateHtmlFile()
        }
    })
}

function engineerPrompts(){
    inquirer.prompt(engineerQs).then((engineerInfo)=>{
        let engineer = new Engineer(`${engineerInfo.name}`, Number(`${engineerInfo.id}`), `${engineerInfo.email}`, `${engineerInfo.github}`)
        allTeamMembers.push(engineer)

        createEngineerCard(engineer)

        selectTeamMember()
    })
}

function internPrompts(){
    inquirer.prompt(internQs).then((internInfo)=>{
        let intern = new Intern(`${internInfo.name}`, Number(`${internInfo.id}`), `${internInfo.email}`, `${internInfo.school}`)
        allTeamMembers.push(intern)
        createInternCard(intern)

        selectTeamMember()
    })
}

function generateHtmlFile(){
    fs.writeFile('./Main/dist/index.html', `${generateHtml()}`, (error) => 
    error ? console.error(error) : console.log('Great Success')) 
}

function generateHtml(){
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossorigin="anonymous"
        />
      </head>
    
      <body>
        <header>
          <div class="jumbotron">
            <h1 class="display-4">Development Team Generator</h1>
            <p class="lead">Here are your generated Team members</p>
            <hr class="my-4" />
          </div>
        </header>
    
        <section>
    
    ${allCards}

        </div>
      </div>
    </section>
  </body>
</html>
    `
}

function createManagerCard(manager){
    let cardElement = `<div class="container-fluid">
    <div class="row">
      <div class="card" style="width: 18rem">
        <img
          src="./Assets/manager.jpg"
          class="card-img-top"
          alt="manager"
        />
        <div>
          <h5 class="card-title">Name: ${manager.getName()}</h5>
          <p class="card-text">Role: ${manager.getRole()}</p>
        </div>
        <div class="card-body">
          <li class="ID">ID: ${manager.getId()}</li>
          <li>Email: <a href="mailto:${manager.getEmail()}" rel="EMAIL">${manager.getEmail()}</a></li>
          <li>Office Number: ${manager.getOfficeNumber()}</li>
        </div>
      </div>`
  allCards.push(cardElement)
}
function createEngineerCard(engineer){
    let cardElement = `<div class="card" style="width: 18rem">
    <img
      src="./Assets/engineer.jpg"
      class="card-img-top"
      alt="Engineer"
    />
    <div>
      <h5 class="card-title">Name: ${engineer.getName()}</h5>
      <p class="card-text">Role: ${engineer.getRole()}</p>
    </div>
    <div class="card-body">
      <li class="ID">ID: ${engineer.getId()}</li>
      <li>Email: <a href="mailto:${engineer.getEmail()}" rel="EMAIL">${engineer.getEmail()}</a></li>
      <li>Github: <a href="https://Github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
    </div>
  </div>`
  allCards.push(cardElement)

}
function createInternCard(intern){
    let cardElement = `<div class="card" style="width: 18rem">
    <img
      src="./Assets/intern.jpeg"
      class="card-img-top"
      alt="Intern"
    />
    <div>
      <h5 class="card-title">Name: ${intern.getName()}</h5>
      <p class="card-text">Role: ${intern.getRole()}</p>
    </div>
    <div class="card-body">
      <li class="ID">ID: ${intern.getId()}</li>
      <li>Email: <a href="mailto:${intern.getEmail()}" rel="EMAIL">${intern.getEmail()}</a></li>
      <li>School: ${intern.getSchool()}</li>
    </div>
  </div>`
  allCards.push(cardElement)
}

init()

