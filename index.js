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

const managerQuestions