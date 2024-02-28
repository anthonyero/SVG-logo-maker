const fs = require('fs');
const shapes = require('./shapes')

class Logo {
    constructor(text, textColor, shape, color) {
        this.text = text,
        this.textColor = textColor.toLowerCase(),
        this.shape = shape,
        this.color = color.toLowerCase()
        this.shapeElement,
        this.textElement = {
            templateLiteral: ``
        }
    }

    addShape() {
        switch (this.shape) {
            case "Circle": 
                let circle = new shapes.Circle()
                circle.setColor(this.color);
                circle.render();
                return this.shapeElement = circle;

            case "Triangle": 
                let triangle = new shapes.Triangle()
                triangle.setColor(this.color);
                triangle.render();
                return this.shapeElement = triangle;
        }

    }

    addText() {
        switch(this.shape) {
            case "Circle":
                return this.textElement.templateLiteral = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`

            case "Triangle":
                return this.textElement.templateLiteral = `<text x="148" y="145" font-size="48" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
        }
    }


    export() {  
        const svg =             
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        ${this.shapeElement.templateLiteral}

        ${this.textElement.templateLiteral}

        </svg>`
        

        fs.writeFile("./logo.svg", svg, (err) => {
            err ? console.log(err) : console.log("Generated logo.svg");
        });
    }
}

module.exports = {
    Logo
}