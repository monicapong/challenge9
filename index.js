// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a concise description explaining the what, why, and how of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is required to install this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions to use this application?'
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'What is the pathway to a screenshot of the application?'
    },
    {
        type: 'input',
        name: 'screenshotAlt',
        message: 'Please provide an alt description for your screenshot.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any collaborators with links to their GitHub profile.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license was used for this project?',
        choices: ['GNU Affero General Public License', 'GNU General Public License', 'GNU Lesser General Public License', 'Mozilla Public License', 'Apache License', 'MIT License', 'No license']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can other developers contribute to this application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can other developers test the application?'
    },
    {
        type: 'input',
        name: 'deployed',
        message: 'What is the link to the deployed application?'
    },
    {
        type: 'input',
        name: 'repository',
        message: 'What is the link to the GitHub repository?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
