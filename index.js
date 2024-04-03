const inquirer = require('inquirer');
const fs = require('fs');
inquirer.registerPrompt('search-list', require('inquirer-search-list'));
function promptUser() {
  return inquirer.prompt([
    {
      type: "search-list",
      message: "Select Lincense",
      name: "License",
      choices: ["MIT License", "Apache License 2.0", "GPL License"],
      validate: function(answer) {
        
          return true;}
  },
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
      name: 'Contributing',
      message: 'Enter Contributing guide lines used for your project:'
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Enter tests used for your project:' 
    },
    
    {
      type: 'input',
      name: 'Username',
      message: 'Enter your GitHub username'
    },
    {
      type: 'input',
      name: 'Email',
      message: 'Enter your Email Address'
    },
 
  ]);
}

function generateREADME(answers) {
  console.log(answers)
  let badge 
  if (answers.License == "MIT License"){ 
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (answers.License == "Apache License 2.0"){
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (answers.License == "GPL License"){
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  return `
  ${badge}
  # Title
  ${answers.title}

  ## Description
  ${answers.description}
  
  ## Table Of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.Usage}

  ## License
  ${answers.License}

  ## Contributing
  ${answers.Contributing}

  ## Tests
  ${answers.Tests}

  ## Questions
  You can reach me at this email address if you have any further questions ${answers.Email}
  [GitHub profile](https://GitHub.com/${answers.Username})
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