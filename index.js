// npm package to prompt the user and interact with the file structure
const { prompt } = require("inquirer");
const fs = require("fs");

// template for team generator
const teamHtml = require("./src/teamHtmlTemplate")

// Constructor classes 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

// empty array for team information

const teamArray = [];

// inquirer used to prompt users 

// manager 

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
            console.log("Please enter a valid name for the manager (Shift Leader ...etc).")
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
                console.log("Invalid characters used please make sure they are numbers!")
                return false;
            }
        }
    },

    // Prompt for manager email
    
    {
        type: "input",
        message: "Please enter the manager's email address.",
        name: "email",
        //  validating a number was inputed
        validate: (appInput) => {
            if (appInput) {
                return true;
            } else {
                // if the input is not valid 
                console.log("Please enter the manager's email address.")
                return false;
            }
        }
    },
]