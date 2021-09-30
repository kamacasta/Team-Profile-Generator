// npm package to prompt the user and interact with the file structure
const { prompt } = require("inquirer");
const fs = require("fs");

// template for team generator
const teamHtml = require("./src/teamHtmlTemplate");

// Constructor classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// empty array for team information

const teamArray = [];

// inquirer used to prompt users

// manager questions

const managerQuestions = [
  // Prompt for manager name
  {
    type: "input",
    message: "Please enter the manager's name (Shift Leader ...etc).",
    name: "name",
    // validating the input given from the user
    validate: (appInput) => {
      // if statement for if the input is true input is valid
      if (appInput) {
        return true;
      } else {
        // if the input is not valid
        console.log(
          "Please enter a valid name for the manager (Shift Leader ...etc)."
        );
        return false;
      }
    },
  },

  // Prompt for manager id number
  {
    type: "input",
    message: "Please enter the ID number associated with the manager",
    name: "id",
    //  validating a number was inputed
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        // if the input is not valid
        console.log(
          "Invalid characters used please make sure they are numbers!"
        );
        return false;
      }
    },
  },

  // Prompt for manager email

  {
    type: "input",
    message: "Please enter the manager's email address.",
    name: "email",
    //  validating a String was inputed
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        // if the input is not valid
        console.log("Please enter the manager's email address.");
        return false;
      }
    },
  },

  // Prompt for manager github

  {
    type: "input",
    message: "Please enter the manager's GitHub account.",
    name: "github",
    //  validating a String was inputed
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        // if the input is not valid
        console.log("Please enter the manager's GitHub account.");
        return false;
      }
    },
  },
];

// Engineers questions

const engineerQuestions = [
  // Prompt for manager name
  {
    type: "input",
    message: "Please enter the name of the engineer!",
    name: "name",
    // validating the input given from the user
    validate: (appInput) => {
      // if statement for if the input is true input is valid
      if (appInput) {
        return true;
      } else {
        // if the input is not valid
        console.log("Please enter the name of the engineer!");
        return false;
      }
    },
  },

  // Prompt for manager id number
  {
    type: "input",
    message: "Please enter the ID number associated with the engineer",
    name: "id",
    //  validating a number was inputed
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        // if the input is not valid
        console.log(
          "Invalid characters used please make sure they are numbers! "
        );
        return false;
      }
    },
  },

  // Prompt for manager email

  {
    type: "input",
    message: "Please enter the engineer's email address.",
    name: "email",
    //  validating a String was inputed
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        // if the input is not valid
        console.log("");
        return false;
      }
    },
  },

  // Prompt for manager github

  {
    type: "input",
    message: "Please enter the engineer's GitHub account.",
    name: "github",
    //  validating a String was inputed
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        // if the input is not valid
        console.log("Please enter the engineer's GitHub account.");
        return false;
      }
    },
  },
];

// Intern questions

const internQuestions = [
  // prompt for intern name
  {
    type: "input",
    message: "Please enter the name of the intern.",
    name: "name",
    //  validating a String was inputed
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        // if the input is not valid
        console.log("Please enter the name of the intern!");
        return false;
      }
    },
  },

  // prompt for intern id number

  {
    type: "input",
    message: "Please enter the ID number associated with the intern.",
    name: "name",
    //  validating a String was inputed
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        // if the input is not valid
        console.log(
          "Invalid characters used please make sure they are numbers!"
        );
        return false;
      }
    },
  },

  // prompt for intern email address

  {
    type: "input",
    message: "Please enter the intern's email address.",
    name: "name",
    //  validating a String was inputed
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        // if the input is not valid
        console.log("Please enter the intern's email address");
        return false;
      }
    },
  },

  // prompt for intern school they attend

  {
    type: "input",
    message: "Please enter the school name the intern attends.",
    name: "name",
    //  validating a String was inputed
    validate: (appInput) => {
      if (appInput) {
        return true;
      } else {
        // if the input is not valid
        console.log("Please enter the school name the intern attends.");
        return false;
      }
    },
  },
];

const addEmployeeToTeam = [
    {
        // user will be prompted with a list
        type:"list",
        message:"Additional employees apart of your team?",
        // if the user needs to add additional employees to the team the will be asked what type of employee is being added 
        name:"addEmployeeToTeam",
        choices: [
            "Select if you are adding a Engineer!",
            "Select if you are adding a Intern",
            "Select if you are done adding!"
        ]
    }
];


