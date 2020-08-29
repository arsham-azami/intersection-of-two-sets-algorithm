class Intersection{
    constructor(arrOne, arrTwo){
        this.arrOne = arrOne
        this.arrTwo = arrTwo
        this.newarr = []
        
        
    }
    getIntersection(){
        for (let x = 0; x < this.arrOne.length; x++) {
            if(this.arrTwo.includes(this.arrOne[x])){
                this.newarr.push(this.arrOne[x])
            }
            
        }
        console.log(this.newarr)
    }
}

const setOne = [43, 65, 21, 66, 76]
const setTwo = [90, 65, 98, 60, 23, 76, 21]
const set = new Intersection(setOne, setTwo)

set.getIntersection()

