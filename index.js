class Polygon {
	constructor(sides) {
		this.sides = sides;
	}

	get countSides() {
		return this.sides.length;
	}

	get perimeter() {
		return this.sides.reduce((acc, side) => {
			return acc + side;
		}, 0);
	}
}

class Triangle extends Polygon {
	get isValid() {
		const largestSide = this.sides.reduce((largest, side) => {
			return Math.max(largest, side);
		}, 0);
		if (largestSide - (this.perimeter - largestSide) < 0) {
			return true;
		} else {
			return false;
		}
	}
}

class Square extends Polygon {
	get isValid() {
		if (this.sides.length !== 4) {
			return false;
		}
		const side1 = this.sides[0];
		return this.sides.reduce((isEqual, side) => {
			if (isEqual) {
				if (side1 === side) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		}, true);
	}

	get area() {
		return this.sides[0]**2;
	}
}