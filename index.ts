class Intersection {
	private arrOne: number[];
	arrTwo: number[];
	newarr: number[];

	constructor(arrOne: number[], arrTwo: number[]) {
		this.arrOne = arrOne;
		this.arrTwo = arrTwo;
		this.newarr = [];
	}

	private Intersection(): number[] {
		for (let x = 0; x < this.arrOne.length; x++) {
			if (this.arrTwo.includes(this.arrOne[x])) {
				this.newarr.push(this.arrOne[x]);
			}
		}
		return this.newarr;
	}

	public getintersection(): number[] {
		return this.Intersection();
	}
	private union(): number[] {
		// this.empty.concat(this.arrTwo);
		this.arrTwo.forEach(el => this.newarr.push(el));
		for (let y = 0; y < this.arrOne.length; y++) {
			if (this.arrTwo.includes(this.arrOne[y])) {
				this.arrTwo.splice(y, 1);
			} else {
				this.newarr.push(this.arrOne[y]);
			}
		}
		return this.newarr;
	}
	getunion(): number[] {
		return this.union();
	}
}

const setOne = [43, 65, 21, 66, 76];
const setTwo = [90, 65, 98, 60, 23, 76, 21];

const set = new Intersection(setOne, setTwo);

// console.log(set.getintersection());
console.log(set.getunion())
