//& variables are containers for storing data 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//& in order to include fs module the require() method is used
//& inquirer is a NPM package that provides an easy way to capture user input in node.js command line interface applications

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// render(myArrayof team members)
const testEmployee = new Employee ("name", "id", "email");
console.log(testEmployee.getName()); 
// TODO: Write Code to gather information about the development team members, and render the HTML file.
// array of questions for manager
//& prompt method is used for the user to input values
const managerPrompt = () => {
  inquirer.prompt([
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
  ]).then(respond =>{

  })
};

// array of questions for employee
//& prompt method is used for the user to input values
const employeePrompt = () => {
  inquirer.prompt([
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
  ]).then(respond => {

  })
};

// array of questions for employee
//& prompt method is used for the user to input values
const employee1Prompt = () => {
  inquirer.prompt([
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
  ]).then(respond => {

  })
};

// array of questions for employee
//& prompt method is used for the user to input values
const employee2Prompt = () => {
  inquirer.prompt([
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
  ]);
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
      name: "github",
      message: "What is the intern's GitHub username?",
    },
  ]);
};

// renders the HTML file
//& fs.existsSync() method is used to synchronously check if a file already exists in the given path or not...
//& it returns a boolean value which indicates the presence of a file.
//& node.js file system (fs) module allows you to work with the file system on your computer
//& fs.mkdirSync() method is used to create a directory Synchronously
const createHTMLFile = (htmlPage) => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
};
