// inquirer provides the functionality to prompt questions.
const inquirer = require('inquirer');
// fs to write the a readme.me file
const fs = require('fs');

const promptUser = () =>
    // function to creata the array of questions fot user 
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your application?',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'instructions to be followed?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'how do you use your appllication?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'how do you use your appllication?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instractions?',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'What are the guidelines to be followed?',
        },

        {
            type: 'list',
            name: 'license',
            message: 'what license did you used?',
            choices: ["Apach", "ISC", "MTI"],
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Enter your Github user name.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email.',
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter a url.',
        },

    ]);
// here I used the markdown, and run a generateMarkdown function to return our output.
function generateMarkdown(answers) {
    return `# ${answers.title}
## License badge: ![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)
## Table of Content
- [Description](#description)
- [Installation](#installation)
- [Instructions](#instructions)
- [Usage](#usage)
- [Guidelines](#guidelines)
- [Test instruction](#test-instruction)
- [Question](#question)
## Description 

${answers.description}

## Installation 

${answers.installation}

## Instructions

${answers.instructions}

## Usage 

${answers.usage}

## Guidelines: 

${answers.guidelines}

## Test instruction 

${answers.test}

## Question
Here is a link to my Github profile: (http://github.com/${answers.Github})

If you have any questions you can reach me via E-mail: ${answers.email} 

You can click on the following link to see the walkthrough video:${answers.link} `;
}

// function to initialize
const init = () => {
    promptUser().then((answers) => {
        try {
            const readMe = generateMarkdown(answers);
            fs.writeFileSync('README.md', readMe);
            console.log('Successfully wrote to README.md');
        } catch (error) {
            console.log(error);
        }
    });
};
// call a function to run it
init();
