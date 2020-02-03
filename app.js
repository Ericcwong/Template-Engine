//NPM Packages
const inquirer = require("inquirer");
//npm install --save-dev jest (Jest TEST)
//File Calls
const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require ("./lib/Intern");
const manager = require ("./lib/Manager");

//Inquire questions

function employeeName(){
    const employeeName = inquirer.prompt({
        type: "input",
        name: "employeeName",
        message: "What is your name?" 
    });
}
function employeeId(){
    const employeeId = inquirer({
        type: "input",
        name: "employeeId",
        message: "Please enter your employee number?"
    });
}
function employeeTitle(){
    const employeeTitle = inquirer({
        type: "list",
        name: "employeeTitle",
        message: "What is your role in this company?",
        choices: ["Manager","Engineer","Intern"]

    });
}

async function 