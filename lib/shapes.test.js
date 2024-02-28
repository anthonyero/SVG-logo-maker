const shapes = require('./shapes');

// Circle Tests
describe('Shapes', () => {
    describe('Circle', () => {
      it('should render a circle element requested with the appropriate color provided (#3498eb)', () => {
        const shape = new shapes.Circle;
        shape.setColor("#3498eb");
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="#3498eb" />`);
      });
    });
  });

// Triangle Tests
describe('Shapes', () => {
    describe('Triangle', () => {
      it('should render a triangle element requested with the appropriate color provided (blue)', () => {
        const shape = new shapes.Triangle;
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });
  });

// Square Tests
describe('Shapes', () => {
    describe('Square', () => {
      it('should render a square element requested with the appropriate color provided (green)', () => {
        const shape = new shapes.Square;
        shape.setColor("green");
        expect(shape.render()).toEqual(`<rect width="180" height="180" x="50" y="10" fill="green" />`);
      });
    });
  });
