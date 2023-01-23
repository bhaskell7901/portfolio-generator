const fs = require("fs");
const inquirer = require("inquirer");
// const mkd = require('./markdown.js');

function init(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: "name"
            },
            {
                type: 'input',
                message: 'Where are you located?',
                name: "location"
            },
            {
                type: 'input',
                message: 'Provide some background?',
                name: "personalBio"
            },
            {
                type: 'input',
                message: 'What is your LinkedIn URL?',
                name: "linkedIn"
            },
            {
                type: 'input',
                message: 'What is your GitHub URL?',
                name: "gitHub"
            },
            {
                type: "input",
                message: "Enter your email address",
                name: "email",
                default: () => {},
                // validate: (email) => {
                //     var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                //     if (validEmail) return true;
                //     else {
                //         return " <-- Please enter a valid email";
                //     }
                // }
            }
        ])
        .then( (answers) => {
            // writeToFile("index.html", md(answers));
            console.log(answers);
        })
        .catch( (err) => {
            if (err.isTtyError) {
                console.log("The prompt couldn't be rendered in this environment");
                console.log(err);
            } else {
                console.log("Something seriously went wrong:");
                console.log(err);
            }
        })
}

init();