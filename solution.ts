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

/*A very Big Sum*/
function aVeryBigSum(ar: number[]): number {
    // Write your code here
    let result = 0
    ar.forEach(el => result+=el)
    
    return result

}

/*Diagonal Difference*/
function diagonalDifference(arr: number[][]): number {
    let result = [0, 0]
    for(let i = 0; i < arr.length; i++ ){
        for(let j = 0; j < arr.length; j++){
            if(i === j) result[0] += arr[i][j]
            if( i+j === arr.length-1 ) result[1] += arr[i][j]
        }
    } 
    
    return Math.abs(result[0] - result[1])
}

/*Plus Minus*/
function plusMinus(arr: number[]): void {
    // Write your code here
    let result = {positive: 0, negative: 0, zeros: 0}
    
    arr.forEach(el => {
        Math.sign(el) === -1 ? result.negative++ :
        el === 0 ? result.zeros++ : result.positive++
    })
    
    console.log((result.positive/arr.length).toFixed(6))
    console.log((result.negative/arr.length).toFixed(6))
    console.log((result.zeros/arr.length).toFixed(6))
}


/*StairCase*/
function staircase(n: number): void {
    // Write your code here
    let stair = '#'
    for(let i = 0; i < n; i++){
        let space = ''
        space = ' '.repeat(n-(i+1))
        stair = stair.repeat(i+1)
        console.log(space+stair)
        
        stair = '#'
    }
}

