//NPM Packages
const inquirer = require("inquirer");
const fs = require("fs-extra");
const util = require("util");
const axios = require("axios");

//File Calls
const employee = require("./lib/Employee")
const engineer = require("./lib/Engineer")
const intern = require ("./lib/Intern")
const manager = require ("./lib/Manager")