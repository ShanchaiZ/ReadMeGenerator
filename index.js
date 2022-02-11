//1. Include packages needed for this application

const inquirer = require("inquirer");//Inquirer is an NPM package that provides an easy way to capture user input in your Node in the Command Line Input.
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs"); // file system = helps us read and write files in javascript without using html or browser
const path = require("path"); // finding out directory name and join directories

//function to initialize the README.md Generator
function init() {

  //2. Create array of questions for user input in the inquirer prompt. See Inquirer documentation for "installation".
  inquirer
    .prompt([
      {
        // A. Title of project with Validation
        type: "input",
        message: "What is a good Title for your project?",
        name: "title",
        //Validation function for Title if response is empty (less than 1. in length)
        validate: function (response) {
          if (response.length < 1) {
            return console.log("A valid project title is required!");
          }
          return true;
        }
      },
      // B. Description of project with Validation
      {
        type: "input",
        message: "What is a good Description for your project?",
        name: "description",
        //Validation function for Description if response is empty (less than 1. in length)
        validate: function (response) {
          if (response.length < 1) {
            return console.log("A valid project description is required!");
          }
          return true;
        }
      },
      // C. Installation of Project
      {
        type: "input",
        message: "How do you Install your application?",
        name: "installation",
      },
      // D. Use of Application
      {
        type: "input",
        message: "How do you Use your application?",
        name: "usage",
      },
      // E.License Usage for the Repository as a checkbox
      {
        type: "checkbox",
        message: "what license did you use for this repository?",
        choices: ["Apache License 2.0", "Will add at a later date!", "___"],
        name: "license",
      },
      // F.Contribution in an input field
      {
        type: "input",
        message: "How can people Contribute to your project?",
        name: "contributing",
      },
      // G.Tests and Updates
      {
        type: "input",
        message: "How do people update the tests for your project?",
        name: "tests",
      },
      // H.Github information
      {
        type: "input",
        message: "What is your GitHub Username?",
        name: "github",
      },
      // H.Email address
      {
        type: "input",
        message:
          "What is your email address where users and contributers can send questions?",
        name: "email",
      },
    ])

    //3. Create a function to write README file

    .then((response) => {
      return fs.writeFileSync(path.join(process.cwd(), "README.md"), generateMarkdown(response));
    });
}

/** Explanation of Code: 
 * Inquirer is a Command Line Interface for node.js and is used to provide error feedback, asking questions, parsing input, validating answers and managing hierarchical prompts. First, Inquirer prompts the 8 questions (2 of which has validation functions) for user input in the command window.
 * THEN upon receiving the answers from the user input, the input answers are written in the current working directory (cwd) of the inquirer as a readme.md file in the format indicated in generateMarkdown.js.
 */



//4. Function call to initialize app
init();


// inquirer takes an array of objects
