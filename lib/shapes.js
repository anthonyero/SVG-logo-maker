class Shape {
    constructor (shape, color) {
        this.shape = shape;
        this.color = color;
    }

    render() {
        return this.templateLiteral
    }
}

class Circle extends Shape {
    constructor() {
        super(); // Had to be called even if empty to avoid an error
        this.shape = "circle";
        this.color;
        this.templateLiteral = `<circle cx="150" cy="100" r="80" fill="color" />`
    }

    setColor (color) {
        this.color = color;
        return this.templateLiteral = `<circle cx="150" cy="100" r="80" fill="${color}" />`
    }
}

class Triangle extends Shape {
    constructor() {
        super(); // Had to be called even if empty to avoid an error
        this.shape = "triangle";
        this.color;
        this.templateLiteral = `<polygon points="150, 18 244, 182 56, 182" fill="color" />`
    }

    setColor (color) {
        this.color = color;
        return this.templateLiteral = `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
    }
}

class Square extends Shape {
    constructor() {
        super(); // Had to be called even if empty to avoid an error
        this.shape = "square";
        this.color;
        this.templateLiteral = `<rect width="180" height="180" x="50" y="10" fill="color" />`
    }

    setColor (color) {
        this.color = color;
        return this.templateLiteral = `<rect width="180" height="180" x="50" y="10" fill="${color}" />`
    }
}



/*
//const constructLogo = (text, textColor, shape, color) => {
    let logoStructure = ``
    switch (shape) {
        case "Circle": 
            // Template literal placed with indented structure for code readability. 
            // This creates undesired indentation in the exported svg file.
            //In order to mend the indented code in the exported svg file, would have to remove white space from lines below `logoStructure =` to align with `const constructLogo`
            logoStructure = 
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${color}" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

            </svg>`
            return logoStructure;
        
        case "Triangle": // The Triangle shape is not a default shape and must be constructed from polygon and coordinate points
            // The following coordinates were used to maximize an equilateral triangle in a 300px by 200px container
            // Vertex A: (0,0), Vertex B: (300, 0), Vertex C: (300/2, (200 * sqrt(3))/2)
                // For the code, we would use `points="0,138 128,0 240,138"`
            // However, we will apply a .8 transformation to each coordinate to receive (0,0), (240,0), (120, 0.8 * (200 * sqrt(3))/2 )
                // For the the code we would use `points="0,138 128,0 240,138"`
                    // Adding 10 px to each dimension to receive a bit of white space, adjusting text position to center text
            // Note, that the x-axis increases to the right, but the y-axis increases by traveling downward
            logoStructure = 
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="150, 18 244, 182 56, 182" fill="${color}" />

            <text x="148" y="145" font-size="48" text-anchor="middle" fill="${textColor}">${text}</text>

            </svg>`
            return logoStructure;
        
            case "Square": // The square is not a default shape and must be constructed using the rectangle template
            logoStructure = 
            `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect width="180" height="180" x="50" y="10" fill="${color}" />

            <text x="140" y="115" font-size="48" text-anchor="middle" fill="${textColor}">${text}</text>

            </svg>`
            return logoStructure;
    }
}*/

module.exports = {
    Shape,
    Circle,
    Triangle,
    Square
    //constructLogo
}