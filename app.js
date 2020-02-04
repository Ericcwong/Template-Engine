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
    return employeeName;
}
function employeeId(){
    const employeeId = inquirer.prompt({
        type: "input",
        name: "employeeId",
        message: "Please enter your employee number?"
    });
    return employeeId;
}
function employeeTitle(){
    const employeeTitle = inquirer.prompt({
        type: "list",
        name: "employeeTitle",
        message: "What is your role in this company?",
        choices: ["Manager","Engineer","Intern"]
    });
    return employeeTitle;
}

async function init(){
    try{
        let {employeeName} = await employeeName();
        let { employeeId } = await employeeId();
        const { employeeTitle } = await employeeTitle();

    }
    catch(err){
        console.log(err);
    }
}
init();