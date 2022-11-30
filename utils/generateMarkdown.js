// Calls renderLicenseBadge to return the license badge image of the user's license input
function renderLicenseBadge(license) {
  // If user input is AGPL,
  if (license === 'GNU Affero General Public License') {
    // return image of AGPL badge 
    return `![${license}](https://img.shields.io/badge/license-AGPL-blue)`;
    // If user input is GPL,
  } else if (license === 'GNU General Public License') {
    // return image of GPL badge
    return `![${license}](https://img.shields.io/badge/license-GPL-blue)`;
    // If user input is LGPL,
  } else if (license === 'GNU Lesser General Public License') {
    // return image of LGPL badge
    return `![${license}](https://img.shields.io/badge/license-LGPL-blue)`;
    // If user input is MPL,
  } else if (license === 'Mozilla Public License') {
    // return image of MPL badge
    return `![${license}](https://img.shields.io/badge/license-MPL-blue)`;
    // If user input is Apache,
  } else if (license === 'Apache License') {
    // return image of Apache badge
    return `![${license}](https://img.shields.io/badge/license-apache-blue)`;
    // If user input is MIT,
  } else if (license === 'MIT License') {
    // return image of MIT badge
    return `![${license}](https://img.shields.io/badge/license-MIT-blue)`;
  // Else, if there is no license,
  } else {
    // return an empty string
    return '';
  };
};

// Calls renderLicenseLink to return the license link of the user's license input
function renderLicenseLink(license) {
  // If user input is AGPL,
  if (license === 'GNU Affero General Public License') {
    // return link to more information on AGPL 
    return `(https://choosealicense.com/licenses/AGPL)`;
    // If user input is GPL,
  } else if (license === 'GNU General Public License') {
    // return link to more information on GPL
    return `(https://choosealicense.com/licenses/GPL)`;
    // If user input is LGPL,
  } else if (license === 'GNU Lesser General Public License') {
    // return link to more information on LGPL
    return `(https://choosealicense.com/licenses/LGPL)`;
    // If user input is MPL,
  } else if (license === 'Mozilla Public License') {
    // return link to more information on MPL
    return `(https://choosealicense.com/licenses/MPL)`;
    // If user input is Apache,
  } else if (license === 'Apache License') {
    // return link to more information on apache
    return `(https://choosealicense.com/licenses/apache)`;
    // If user input is MIT,
  } else if (license === 'MIT License') {
    // return link to more information on MIT
    return `(https://choosealicense.com/licenses/MIT)`;
  // Else, if there is no license,
  } else {
    // return an empty string
    return '';
  };
};

// Calls renderLicenseSection to return the license section of a README based on the user's license input
function renderLicenseSection(license) {
  // If user input is not 'no license',
  if (license !== 'No license') {
    // return license section for the README
    return `
  ## License
  This application is distributed under the ${license}. Please review the [${(license)}](${renderLicenseLink(license)}) for more information. 
  `
    // Else, if there is no license,
  } else {
    // return an empty string
    return '';
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
