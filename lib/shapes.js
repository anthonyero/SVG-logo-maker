class Shape {
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


module.exports = {
    Shape,
    Circle,
    Triangle,
    Square
}