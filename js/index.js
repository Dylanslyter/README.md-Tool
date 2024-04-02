const inquirer = require('inquirer');
const fs = require('fs');

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project:'
    },
    {
      type: 'input',
      name: 'Table_Of_Contents',
      message: 'Enter a Table of contents for your project:'
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Enter Installation for your project:'
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Enter the Usage for your project:'
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Enter the Usage for your project:'
    },
    {
      type: 'input',
      name: 'License',
      message: 'Enter the Lisence used for your project:'
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Enter Contributing guide lines used for your project:'
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Enter tests used for your project:' //test 
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'Enter qustions used for your project:'
    },
 
  ]);
}

function generateREADME(answers) {
  console.log(answers)
  return `
  # Title
  ${answers.title}

  ## Description
  ${answers.description}
  
  #Table Of Contents
  ${answers.Table_Of_Contents}

  #Installation
  ${answers.Installation}

  #Usage
  ${answers.Usage}

  #License
  ${answers.License}

  #Contributing
  ${answers.Contributing}

  #Tests
  ${answers.Tests}

  #Questions
  ${answers.Questions}
  `;
}

async function init() {
  try {
    const answers = await promptUser(); 
    const readmeContent = generateREADME(answers); 
    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md generated successfully!');
  } catch (error) {
    console.error('Error generating README:', error);
  }
}

init();