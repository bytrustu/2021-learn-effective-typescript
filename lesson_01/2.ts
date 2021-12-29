class Square {
  constructor(public width: number) {
  }
}

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    console.log(shape);
    return shape.width * shape.height;
  } else {
    console.log(shape);
    return shape.width * shape.width;
  }
}

const item = new Rectangle(10, 20);
calculateArea(item);
