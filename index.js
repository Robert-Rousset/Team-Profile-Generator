const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./develop/lib/Manager");
const Engineer = require("./develop/lib/Engineer");
const Intern = require("./develop/lib/Intern");

let allTeamMembers = [];
let allCards = [];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Manager Name: ",
  },
  {
    type: "input",
    name: "id",
    message: "ID: ",
  },
  {
    type: "input",
    name: "email",
    message: "Email: ",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Office Number: ",
  },
];
const selectTeamMemberList = [
  {
    type: "list",
    name: "teamMembers",
    message: "Select which team member you'd like to add:",
    choices: ["Engineer", "Intern", "Finish building team"],
  },
];
const engineerQs = [
  {
    type: "input",
    name: "name",
    message: "Engineer's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Engineer's ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Engineer's Email:",
  },
  {
    type: "input",
    name: "github",
    message: "Engineer's GitHub Username:",
  },
];
const internQs = [
  {
    type: "input",
    name: "name",
    message: "Intern's Name:",
  },
  {
    type: "input",
    name: "id",
    message: "Intern's ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Intern's Email:",
  },
  {
    type: "input",
    name: "school",
    message: "intern's School:",
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((managerInfo) => {
    let manager = new Manager(
      `${managerInfo.name}`,
      Number(`${managerInfo.id}`),
      `${managerInfo.email}`,
      Number(`${managerInfo.officeNumber}`)
    );
    allTeamMembers.push(manager);
    createManagerCard(manager);

    selectTeamMember();
  });
}

function selectTeamMember() {
  inquirer.prompt(selectTeamMemberList).then((list) => {
    if (list.teamMembers === "Engineer") {
      engineerPrompts();
    }
    if (list.teamMembers === "Intern") {
      internPrompts();
    }
    if (list.teamMembers === "Finish building team") {
      generateHtmlFile();
    }
  });
}

function engineerPrompts() {
  inquirer.prompt(engineerQs).then((engineerInfo) => {
    let engineer = new Engineer(
      `${engineerInfo.name}`,
      Number(`${engineerInfo.id}`),
      `${engineerInfo.email}`,
      `${engineerInfo.github}`
    );
    allTeamMembers.push(engineer);

    createEngineerCard(engineer);

    selectTeamMember();
  });
}

function internPrompts() {
  inquirer.prompt(internQs).then((internInfo) => {
    let intern = new Intern(
      `${internInfo.name}`,
      Number(`${internInfo.id}`),
      `${internInfo.email}`,
      `${internInfo.school}`
    );
    allTeamMembers.push(intern);
    createInternCard(intern);

    selectTeamMember();
  });
}

function generateHtmlFile() {
  fs.writeFile("./index.html", `${generateHtml()}`, (error) =>
    error ? console.error(error) : console.log("Great Success")
  );
}

function generateHtml() {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Generation</title>
        <link rel="stylesheet" href="./develop/dist/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    
      <body class="all">
        <header>
          <div class="jumbotron">
            <h1 class="display-4">Development Team Generator</h1>
            <p class="lead">Here are your generated Team members</p>
            <hr class="my-4" />
          </div>
        </header>
    
        <section>
        <div class="container-fluid">
        <div class="row">
    ${allCards}

        </div>
      </div>
    </section>
  </body>
</html>
    `;
}

function createManagerCard(manager) {
  let cardElement = `
    <div class="card">
      <img
        src="./develop/dist/images/manager.jpg"
        class="card-img-top"
        alt="Manager"
      />
      <div class="background"></div>
      <div class="info">
        <div class="title">
        <h5 class="card-title"><b>${manager.getName()}</b></h5>
        <p class="card-text">Role: ${manager.getRole()}</p>
        </div>
        <div class="card-body">
          <li class="ID">ID: ${manager.getId()}</li>
          <li class="email">
            Email:
            <a href="${manager.getEmail()}" rel="EMAIL"
              >${manager.getEmail()}</a
            >
          </li>
          <li class="other">Office Number: ${manager.getOfficeNumber()}</li>
        </div>
      </div>
    </div>`;
  allCards.push(cardElement);
}

function createEngineerCard(engineer) {
  let cardElement = `
  
    <div class="card">
      <img
        src="./develop/dist/images/engineer.jpg"
        class="card-img-top"
        alt="Engineer"
      />
      <div class="background"></div>
      <div class="info">
        <div class="title">
        <h5 class="card-title"><b>${engineer.getName()}</b></h5>
      <p class="card-text">Role: ${engineer.getRole()}</p>
        </div>
        <div class="card-body">
          <li class="ID">ID: ${engineer.getId()}</li>
          <li class="email">Email: <a href="mailto:${engineer.getEmail()}" rel="EMAIL">${engineer.getEmail()}</a></li>
          </li>
          <li class="other">Github: <a href="https://Github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </div>
      </div>
    </div>`;
  allCards.push(cardElement);
}
function createInternCard(intern) {
  let cardElement = `
  
    <div class="card">
    <img
    src="./develop/dist/images/intern.jpeg"
    class="card-img-top"
    alt="Intern"
  />
  <div class="background"></div>
      <div class="info">
        <div class="title">
        <h5 class="card-title"><b>${intern.getName()}</b></h5>
        <p class="card-text">Role: ${intern.getRole()}</p>
        </div>
        <div class="card-body">
        <li class="ID">ID: ${intern.getId()}</li>
        <li class="email">Email: <a href="mailto:${intern.getEmail()}" rel="EMAIL">${intern.getEmail()}</a></li>
        <li class="other">School: ${intern.getSchool()}</li>
        </div>
      </div>
    </div>`;
  allCards.push(cardElement);
}

init();
