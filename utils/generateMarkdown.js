//Create a function that returns a license badge based on which license is passed in
//Create a function that returns the license link
//Create a function that returns the license section of README
//If there is no license, return an empty string

// 1. Create a function to generate the license for README

function licenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " ";
  if (licenseType === "Apache License 2.0") {
    licenseString = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  };
  //add more licenses here if needed
  return licenseString;
}

//2. Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)  
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [GitHub](#github)
  8. [E-mail](#e-mail)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${licenseBadge(data)}

## GitHub
${data.github}

## E-mail
${data.email}`;
}

module.exports = generateMarkdown;
