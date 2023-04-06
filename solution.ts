let inputLines = ['0', '0'] //This line is not used, it is only there to avoid the error


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
    let stair = '#'
    for(let i = 0; i < n; i++){
        let space = ''
        space = ' '.repeat(n-(i+1))
        stair = stair.repeat(i+1)
        console.log(space+stair)
        
        stair = '#'
    }
}

/*Mini-Max Sum*/
function miniMaxSum(arr: number[]): void {
    let result = [0, 0]
    arr.sort()
    arr.forEach(( el, index ) => {
        if(index < arr.length-1) result[0]+=el
        if(index > 0) result[1]+=el
    })
    console.log(result[0], result[1])
}

/*Bithday Cake Candles*/
function birthdayCakeCandles(candles: number[]): number {
    let result = 0, tallestCandle = Math.max(...candles)
    candles.forEach(el => el === tallestCandle ? result++ : null )
    
    return result
}

/*Time Conversion*/
function timeConversion(s: string): string {
    let hour = s.split(':'), format = s.slice(8)
    if( format === 'PM' && hour[0] !== '12') hour[0] = (parseInt(hour[0])+12).toString()
    if( format === 'AM' && hour[0] === '12') hour[0] = '00'
    hour[2] = hour[2].slice(0, 2)
    
    return `${hour[0]}:${hour[1]}:${hour[2]}`
}

/*Grading students*/
function gradingStudents(grades: number[]): number[] {
    let result: number [] = [], iterator = 0
    
    grades.forEach(el => {
        if(el < 38) result.push(el)
        else{
            while( (iterator+el) % 5 !== 0) iterator++
            iterator < 3 ? result.push(el+iterator) : result.push(el)
            iterator = 0
        }
    })
    
    return result
}

/*Apple and Orange*/
function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    let fruits = {oranges: 0, apples: 0}
    apples.forEach( el => (a+el) >= s && (a+el) <= t ? fruits.apples++ : null )
    oranges.forEach( el => (b+el) >= s && (b+el) <= t ? fruits.oranges++ : null )
    
    console.log(fruits.apples)
    console.log(fruits.oranges)            
}

/*Number Line Jumps*/
function getDistance (x1: number, v1: number, x2: number, v2: number): string {
    let distance = ( x2 - x1 ) / (v1 - v2)
    let res = ''
    distance < 0 ? res = 'NO' : distance % 1 === 0 ? res = 'YES' : res ='NO'
    return res
}

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    if(x1 < x2 && v1 < v2) return 'NO'
    else if (x2 < x1 && v2 < v1) return 'NO'
    else{
        return getDistance(x1, v1, x2, v2)
    }
}

/*Between two sets*/
function getTotalX(a: number[], b: number[]): number {
    let res = 0, num = a[a.length-1], flag = false
    while ( num <= b[0] ){
        flag = false
        a.forEach(e => num % e !== 0 ? flag = true: null )
        b.forEach(el => el % num !== 0 ? flag = true: null )
        flag == false && res++
        num += 1
    }
    
    return res
}

/*Breaking the records*/
function breakingRecords(scores: number[]): number[] {
    let scoreData = { max: scores[0], maxChange: 0, min: scores[0], minChange: 0 }
    scores.map(el => {
        if(el > scoreData.max){
            scoreData.max = el
            scoreData.maxChange += 1
        }
        else if( el < scoreData.min ){
            scoreData.min = el
            scoreData.minChange += 1
        }
    })
    return [scoreData.maxChange, scoreData.minChange]
}

/*SubArray Division*/
function birthday(s: number[], d: number, m: number): number {
    let res = { sum: 0, cont: 0, actual: 0, prev: 0 }
    
    while( res.actual <= s.length ){
        if( res.actual < m ){
        res.sum += s[res.actual]
        res.actual ++
        }else if( res.actual === m ){
            res.sum === d ? res.cont++ : null
            res.prev ++
            res.actual = res.prev
            res.sum = 0
            m++
        }
    }
    
    return res.cont
}

/*Divisible Sum of Pairs*/
function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    let res = 0, cont = 1
    ar.map(el => {
        for(let i = cont; i < n; i++){
            if((el + ar[i]) % k === 0) res++
        }
        cont++
    })
    return res
}

/*Migratory Birds*/
function migratoryBirds(arr: number[]): number {
    const res: Record<string, any> = {}
    let max = 0, id
    res[`type${arr[0]}`] = 0
    arr.map(el => {
        if( `type${el}` in res) res[`type${el}`]++
        else {
            res[`type${el}`] = 1
        }
    })
    
    for(const prop in res){
        if(res[prop] > max){
            id = prop
            max = res[prop]
        }
      if(res[prop] === max && prop < id) id = prop 
    }
    
    return parseInt(id.slice(4, id.length))
}

/*Day of Programmer*/
function dayOfProgrammer(year: number): string {
    let fecha = new Date(`01/01/${year}`)
     
    let day = 255
    year === 1918 ? day = day+13 : 
    year <= 1917 && (year % 4 === 0 && year % 100 == 0) ? day = 254 : day = 255
     
    fecha.setDate(fecha.getDate() + day)
    let date = fecha.toLocaleDateString('es-MX', {year:'numeric', month: '2-digit', day: '2-digit'})
    return `${date.slice(0,2)}.${date.slice(3,5)}.${date.slice(6,10)}`
}

/*Bill division*/
function bonAppetit(bill: number[], k: number, b: number): void {
    let item = bill[k], sum = 0
    delete(bill[k])
    bill.forEach(el => sum+=el)
    sum/2 === b ? console.log('Bon Appetit') : console.log(b - sum/2)
}

/*Sales by Match*/
function sockMerchant(n: number, ar: number[]): number {
    let init = ar.shift(), cont = 0, res = 0
    while(cont < ar.length){
        if( init === ar[cont] && init !== -1){
            res++
            ar[cont] = -1
            init = ar.shift()
            cont = -1
        }
        else if(cont === ar.length-1){
            init = ar.shift()
            cont = -1
        }
        cont++
    }
    
    return res
}