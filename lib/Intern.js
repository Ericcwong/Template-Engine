const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.title = "Intern"
    }
    getSchool(){
        return this.school;
    }
    getrole(){
        return this.title;
    }
}
module.exports = Intern;