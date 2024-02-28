const fs = require('fs');
const shapes = require('./shapes')

class Logo {
    constructor(text, textColor, shape, color) {
        this.text = text,
        this.textColor = textColor,
        this.shape = shape,
        this.color = color
    }
    render() {  
        const svg = shapes.constructLogo(this.text, this.textColor, this.shape, this.color)

        fs.writeFile("./logo.svg", svg, (err) => {
            err ? console.log(err) : console.log("Generated logo.svg");
        });
    }
}

module.exports = {
    Logo
}