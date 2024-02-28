const inquirer = require("inquirer");
const logo = require("./logo")

const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "logoText",
        validate: function (logoText) {
            if (logoText.length <= 3) {
                return true
            } else {
                throw new Error("Please provide text with a maximum of three characters.")
            }
        }
    },
    {
        type: "input",
        message: "What color would you like to use for your logo's text? Please provide a color keyword or a hexadecimal number (with #):",
        name: "logoTextColor",
        validate: function (logoTextColor) {
            if (logoTextColor) {
                return true;
            } else {
                throw new Error("Please provide a color or hexadecimal color.");
            }
        }
    },
    {
        type: "list",
        message: "What shape would you like to use for your logo?",
        name: "logoShape",
        choices: ["Circle", "Triangle", "Square"],
        validate: function (logoShape) {
            if (logoShape) {
                return true
            } else {
                throw new Error("Please select a logo shape.");
            }
        }
    },
    {
        type: "input",
        message: "What color would you like to use for your logo's shape? Please provide a color keyword or a hexadecimal number (with #):",
        name: "logoColor",
        validate: function (logoColor) {
            if (logoColor) {
                return true;
            } else {
                throw new Error("Please provide a color or hexadecimal color.");
            }
        }
    },
];

const runInquirer = () => {
    inquirer.prompt(questions)
    .then((response) => {
        const logoObject = new logo.Logo(response.logoText, response.logoTextColor, response.logoShape, response.logoColor);
        logoObject.render()
    })
}

module.exports = {
    questions,
    runInquirer
}