//NPM Packages
const inquirer = require("inquirer");
const fs = require("fs-extra");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
//npm install --save-dev jest (Jest TEST)
//File Calls
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require ("./lib/Intern");
const Manager = require ("./lib/Manager");
const generateHTML = require("./templates/generateHTML");
let teamArray = [];
let teamCards =""

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

//Roles
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
        name: "intern",
        message: "What school did they attend?",
        validate: validateString
    });
    return intern;
}

//calling all the functions when called
async function init(){
    do{
        try{

            const {employeeTitle} = await employeeTitles();
            let { employeeName } = await employeeNames();
            let { employeeId } = await employeeIds();
            let {employeeEmail } = await employeeEmails();
            
            switch(employeeTitle){
                case "Manager":
                let { managerRoom } = await employeeTitleManager(employeeTitle);
                let newManager = new Manager(
                    employeeName,
                    employeeId,
                    employeeEmail,
                    managerRoom
                )
                teamArray.push(newManager);
                console.log("New Manager added!")
                break;
                case "Engineer":
                let { engineer } = await employeeTitleEngineer(employeeTitle);
                let newEngineer = new Engineer(
                    employeeName,
                    employeeId,
                    employeeEmail,
                    engineer
                )
                teamArray.push(newEngineer);
                console.log("New Engineer added!")
                break;
                case "Intern":
                let { intern } = await employeeTitleIntern(employeeTitle);
                let newIntern = new Intern(
                    employeeName,
                    employeeId,
                    employeeEmail,
                    intern
                )
                teamArray.push(newIntern);
                console.log("New Intern added!")
                break;
            }

        }
        catch(err){
            console.log(err);
        }
        done = await inquirer.prompt({
            type: "list",
            name: "finish",
            message: "Do you have any more employees?",
            choices: ["Yes", "No"]

        });
    }while (done.finish === "Yes")
    console.log(teamArray)
    // teamArray.forEach(Obj => function generateCard
    const createHTML = generateHTML(teamCards);
    writeFile("./output/Team.html",createHTML);
    }
init();