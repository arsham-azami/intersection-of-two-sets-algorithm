class Intersection {
	private arrOne: number[];
	arrTwo: number[];
	newarr: number[];

	constructor(arrOne: number[], arrTwo: number[]) {
		this.arrOne = arrOne;
		this.arrTwo = arrTwo;
		this.newarr = [];
	}

	private Intersection() {
		for (let x = 0; x < this.arrOne.length; x++) {
			if (this.arrTwo.includes(this.arrOne[x])) {
				this.newarr.push(this.arrOne[x]);
			}
		}
		return this.newarr;
	}

	public getresult() {
		return this.Intersection();
	}
}

const setOne = [43, 65, 21, 66, 76];
const setTwo = [90, 65, 98, 60, 23, 76, 21];

const set = new Intersection(setOne, setTwo);

console.log(set.getresult());
