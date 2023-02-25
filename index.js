//& variables are containers for storing data
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//& in order to include fs module the require() method is used
//& inquirer is a NPM package that provides an easy way to capture user input in node.js command line interface applications

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const render = require("./src/page-template.js");
const team = [];

// array of questions for manager
//& prompt method is used for the user to input values
const managerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
      },
    ])
    .then((respond) => {
      const manager = new Manager(
        respond.name,
        respond.id,
        respond.email,
        respond.officeNumber
      );
      team.push(manager);
      askQuestion();
    });
};

function askQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "name",
        message: "Do you want to add?",
        choices: ["Engineer", "Intern", "Quit"],
      },
    ])
    .then((answers) => {
      if (answers.name === "Engineer") {
        employeePrompt();
      } else if (answers.name === "Intern") {
        internPrompt();
      } else {
        createHTMLFile();
      }
    });
}

// array of questions for employee
//& prompt method is used for the user to input values
const employeePrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((respond) => {
      const engineer = new Engineer(
        respond.name,
        respond.id,
        respond.email,
        respond.github
      );
      team.push(engineer);
      askQuestion();
    });
};

// array of questions for intern
//& prompt method is used for the user to input values
const internPrompt = () => {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "Which school did you attend?",
    },
  ]).then((respond) => {
    const intern = new Intern(respond.name, respond.id, respond.email, respond.school)
    team.push (intern);
    askQuestion()
  })
};

// renders the HTML file
//& fs.existsSync() method is used to synchronously check if a file already exists in the given path or not...
//& it returns a boolean value which indicates the presence of a file.
//& node.js file system (fs) module allows you to work with the file system on your computer
//& fs.mkdirSync() method is used to create a directory Synchronously
const createHTMLFile = () => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
const htmlpage = render(team)
fs.writeFileSync(outputPath, htmlpage)
};

managerPrompt()
