import Shape from './shape';

class Square extends Shape {

  constructor(side) {
    super();
    this.side = side;
  }

  static getName() {
    return "square";
  }

  getArea() {
    return this.side * this.side;
  }
}

export default Square;
