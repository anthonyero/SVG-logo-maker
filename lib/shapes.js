const constructLogo = (text, shape, color) => {
    let logoStructure = ``
    switch (shape) {
        case "Circle": 
            logoStructure = 
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="${color}" />
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
        
            </svg>`
            return logoStructure;
            break;
        
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

            <polygon points="10,148 138,10 250,148" style="fill:${color};stroke:${color};stroke-width:1" />

            <text x="135" y="115" font-size="60" text-anchor="middle" fill="white">${text}</text>
            
            </svg>`
            return logoStructure;
            break;

    }
    return logoStructure;
}

module.exports = {
    constructLogo
}