class Shape {
    constructor(color) {
        this.color = color;
        }
        setColor(color) {
            this.color = color;
        }
        getColor() {
            return this.color;
        }
        getArea() {
            return 0;
        }
    };

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    print() {
        console.log('Circle (r: {' + this.radius + '}, color: {' + this.color + '}).');
    }
}
class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
    print() {
        console.log('Square (a: {' + this.side + '}, color: {' + this.color + '}).');
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    print() {
        console.log('Rectangle (w: {' + this.width + '}, h: {' + this.height + '}, color: {' + this.color + '}).');
    }
}

class Paint {
    constructor() {
        this.shapes = [];
    }
    addShape(shape) {
        this.shapes.push(shape);
    }
    getShapes() {
        return this.shapes;
    }
    calculateTotalArea() {
        let totalArea = 0;
        this.shapes.forEach(shape => {
            totalArea += shape.getArea();
        });
        return totalArea;
    }
    getCircles() {
        return this.shapes.filter(shape => shape instanceof Circle);
    };
    getSquares() {
        return this.shapes.filter(shape => shape instanceof Square);
    };
    getRectangles() {
        return this.shapes.filter(shape => shape instanceof Rectangle);
    };
}

const paint = new Paint();
paint.addShape(new Circle("red", 5));
paint.addShape(new Square("blue", 4));
paint.addShape(new Rectangle("green", 4, 5));

console.log(paint.calculateTotalArea());
console.log(paint.getCircles());