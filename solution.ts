/* SolveMeFirst  */
function main() {
    let a = parseInt(inputLines[0])
    let b = parseInt(inputLines[1])
    console.log(add(a, b))
}

function add(a: number, b: number){
    return a + b
}

/* Simple Array Sum */
function simpleArraySum(ar: number[]): number {
    let sum = 0
    ar.forEach(el => sum += el)
    return sum
}

/* Compare Triplets */
function compareTriplets(a: number[], b: number[]): number[] {
    let points = [0, 0]
    a.forEach((el, index) => {
        el > b[index] ? points[0]++ : el < b[index] && points[1]++ 
    })
    
    return points
}

