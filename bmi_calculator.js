let myWeight = 69
let myHeight = 1.68
let myBMI = myWeight/(Math.pow(myHeight, 2))

// console.log(`Prince's weight is ${myWeight} kg \nPrince's height is ${myHeight} m`)
// console.log(`Using these values, his BMI is ${myBMI.toFixed(2)}`)

function calculateBMI(weight, height) {
    return (weight / (Math.pow(height, 2))).toFixed(2);
}

const arr = [
    {
        weight: 71,
        height: 1.68
    },
    {
        weight: 68,
        height: 1.81
    },
    {
        weight: 120,
        height: 1.78
    }
]

function testOne() {
    const result = calculateBMI(arr[0].weight, arr[0].height);
    const expected = '25.16'

    console.assert( result === expected, 
        `Check if correct BMI calculation - Expected: ${expected} Result: ${result}`
        );
}

function testTwo() {
    const result = calculateBMI(arr[1].weight, arr[1].height);
    const expected = '20.76'

    console.assert( result === expected, 
        `Check if correct BMI calculation - Expected: ${expected} Result: ${result}`
        );
}

function testThree() {
    const result = calculateBMI(arr[2].weight, arr[2].height);
    const expected = '37.87'

    console.assert( result === expected, 
        `Check if correct BMI calculation - Expected: ${expected} Result: ${result}`
        );
}

testOne();
testTwo();
testThree();

module.exports = calculateBMI;