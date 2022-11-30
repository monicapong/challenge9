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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;