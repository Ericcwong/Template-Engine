//NPM Packages
const inquirer = require("inquirer");
//npm install --save-dev jest (Jest TEST)
//File Calls
const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require ("./lib/Intern");
const manager = require ("./lib/Manager");

//Inquire questions

function employeeNames(){
    const employeeName = inquirer.prompt({
        type: "input",
        name: "employeeName",
        message: "What is their first and last name?" 
    });
    return employeeName;
}
function employeeIds(){
    const employeeId = inquirer.prompt({
        type: "input",
        name: "employeeId",
        message: "What is their employee number?"
    });
    return employeeId;
}
function employeeTitles(){
    const employeeTitle = inquirer.prompt({
        type: "list",
        name: "employeeTitle",
        message: "What is their role in this company?",
        choices: ["Manager","Engineer","Intern"]
    });
    return employeeTitle;
}
function employeeTitleManger(){
    const manager = inquirer.prompt({
        type: "input",
        name: "manager",
        message: "What is the office room number?"
    });
    return manager;
}
function employeeTitleEngineer(){
    const Engineer = inquirer.prompt({
        type: "input",
        name: "Engineer",
        message: "What is the Github username?"
    });
    return Engineer;
}
function employeeTitleIntern(){
    const intern = inquirer.prompt({
        type: "input",
        name: "Intern",
        message: "What school did they attend?"
    });
    return intern;
}

//calling all the functions when called
async function init(){
    try{
        let {employeeName} = await employeeNames();
        let {employeeId} = await employeeIds();
        const {employeeTitle} = await employeeTitles();
        switch(employeeTitle){
            case "Manager":
            const { manager } = await employeeTitleManger(employeeTitle);
            break;
            case "Engineer":
            const { Engineer } = await employeeTitleEngineer(employeeTitle.choice);
            break;
            case "Intern":
            const { intern } = await employeeTitleIntern(employeeTitle);
            break;
        }

    }
    catch(err){
        console.log(err);
    }
}
init();