# SVG Logo Maker

A command-line application that collects user input to generate a logo and save it as an SVG File. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

**Features include**:

- Allows user to provide input utilizing a command-line interface to include relevant logo information such as:
    - A string that will be displayed over the shape 
    - Text color
    - A shape (circle, triangle, square)
    - Shape color
- Dynamically generates a `SVG` file that incorporates all four of the user's desired traits
- Exports the generated `logo.svg` file to this application's directory 

This exercise was provided by Northwestern University and edX through the Coding boot camp. Submitted as fulfillment of the Module 10 exercise during the December, 2023 - June, 2024 cohort.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Credits](#credits)
- [License](#license)

## Installation

- Prerequisites:
    - Download and install [Node.js](https://nodejs.org/en)

1. Download this repository's contents to your local machine utilizing the green `Code` button. 
    - The "Download ZIP" option is sufficient for installation. Ensure that you extract the folder's contents.
2. Open the downloaded directory in your preferred command-line interface. 
    - Possible options including "Terminal" on Mac, "Git Bash" on Windows, or VSCode.
3. Within the downloaded directory, run the following command: 
    > npm install 
    - This will install the Node.js packages "Inquirer" and "Jest" and their dependencies which are detailed in the `package.json` file.

## Usage

Once the installation instructions have been completed, the application can be utilized. 

1. Utilizing your preferred command-line interface, set your working directory to this application's downloaded directory.
2. Within the downloaded directory, initialize the application using the command:
    > node index.js
3. This will present you with a series of prompts that will be utilized to develop a `logo.svg` file. Type your response and use the "Enter"/"Return" button to submit your response and advance to the next prompt.
    - For the color prompts, provide a color keyword or a hexadecimal number (including `#`). 
        - If an unrecognized color keyword or hexadecimal color is provided, the generator will default to black.
    - For the "Shape" information prompt, utilize the arrow keys to navigate to your selected license.
3. Upon completion of the final prompt, "What color would you like to use for your logo's shape?", your 300x200 dimension `logo.svg` file will be exported to the downloaded directory with a file name "logo.svg". 
4. Upon a successful export, the following text will be logged to the console: "Generated logo.svg". If an error has occurred, an error message will be logged.

- [Link to a Walkthrough Video](https://watch.screencastify.com/v/iGmdZiTX3vAI0s2N7kJr)

- [Link to the GitHub repository](https://github.com/anthonyero/SVG-logo-maker)


The relevant JavaScript files are included within this repository. These include the `index.js`, `inquirer-prompts.js`, `logo,js`, `shapes.js`, `shapes.test.js` files, and the `package.json` file.

JavaScript files include comments detailing changes implemented within them. Further justifications can also be found within the repository's "Issues" tab.

Please refer to the commit history and branches within the repository for a tracked history of changes.

## Testing

Tests were implemented in the `shapes.test.js` file and utilize the Jest package. The tests implemented ensure that each shape class can successfully create a new instance of the desired shape, invoke the shapes' `setColor()` and  `render()` methods. All three shape-specific classes passed their respective tests. 

To run these tests on your local machine, utilize the following command:

> npm run test


## Credits

This application utilizes the [Inquirer](https://www.npmjs.com/package/inquirer) and [Jest](https://www.npmjs.com/package/jest) packages, and [Node.js](https://nodejs.org/en). 

## License

N/A

![SVG Logo Maker Walkthrough Gif](/assets/images/SVG%20Logo%20Maker%20Walkthrough%20Video.gif)