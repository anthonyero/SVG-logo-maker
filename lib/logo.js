const fs = require('fs');

class Logo {
    constructor(text, shape, color) {
        this.text = text,
        this.shape = shape,
        this.color = color
    }
    render() {
        // Call a function for shapes that runs a switch statement, we'll want to pass all three arguments to the function with the template literals
    
        /*
    const svg = ``
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${this.shape.toLowerCase()} cx="150" cy="100" r="80" fill="${this.color}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

    </svg>`
        */
    fs.writeFile("./logo.svg", svg, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
    }
}

module.exports = {
    Logo
}