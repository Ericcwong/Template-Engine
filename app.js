//NPM Packages
const inquirer = require("inquirer");
//npm install --save-dev jest (Jest TEST)
//File Calls
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require ("./lib/Intern");
const Manager = require ("./lib/Manager");
let teamArray = [];

//validation for the questions
function validateString(string){
    return string !== '';
}
function validateNumber(number){
   var reg = /^\d+$/;
   return reg.test(number) || "Please enter a number!";
}
function validateEmail(email){
        return /\S+@\S+\.\S+/.test(email)
}
//Inquire questions

function employeeNames(){
    const employeeName = inquirer.prompt({
        type: "input",
        name: "employeeName",
        message: "What is their first and last name?",
        validate: validateString
    });
    return employeeName;
}
function employeeIds(){
    const employeeId = inquirer.prompt({
        type: "input",
        name: "employeeId",
        message: "What is their employee number?",
        validate: validateNumber
    });
    return employeeId;
}
function employeeEmails(){
    const employeeEmail = inquirer.prompt({
        type: "input",
        name: "employeeEmail",
        message: "What is their employee email?",
        validate: validateEmail
    });
    return employeeEmail;
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
function employeeTitleManager(){
    const managerRoom = inquirer.prompt({
        type: "input",
        name: "managerRoom",
        message: "What is the office room number?",
        validate: validateNumber
    });
    return managerRoom;
}
function employeeTitleEngineer(){
    const engineer = inquirer.prompt({
        type: "input",
        name: "engineer",
        message: "What is their Github username?",
        validate: validateString
    });
    return engineer;
}
function employeeTitleIntern(){
    const intern = inquirer.prompt({
        type: "input",
        name: "Intern",
        message: "What school did they attend?",
        validate: validateString
    });
    return intern;
}

//calling all the functions when called
async function init(){
    try{
        const {employeeTitle} = await employeeTitles();
        let { employeeName } = await employeeNames();
        let { employeeId } = await employeeIds();
        let {employeeEmail } = await employeeEmails();
        let { managerRoom } = await employeeTitleManager();
        
        switch(employeeTitle){
            case "Manager":
            let { manager } = await employeeTitleManager(employeeTitle);
            let newManager = new Manager(
                employeeName,
                employeeId,
                employeeEmail,
                managerRoom
            )
            teamArray.push(newManager);
            break;
            case "Engineer":
            let { engineer } = await employeeTitleEngineer(employeeTitle.choice);
            break;
            case "Intern":
            let { intern } = await employeeTitleIntern(employeeTitle);
            break;
        }
        console.log(teamArray)
    }
    catch(err){
        console.log(err);
    }
}
init();