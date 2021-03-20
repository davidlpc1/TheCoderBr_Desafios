function getSumOfTheNumbersInBarCode(barCode) {
    let sum = 0;
    const barCodeIsEven = Number(barCode.length) % 2 === 0;
    for(let i = (barCode.length - 1);i >= 0; i--) {
        let multiplier;
        if(barCodeIsEven && i % 2 === 0 || !barCodeIsEven && i % 2 !== 0) multiplier = 1;
        else if(barCodeIsEven && i % 2 !== 0 || !barCodeIsEven && i % 2 === 0) multiplier = 3

        sum += multiplier * Number(barCode[i])
    }   
    return sum
}

const barCode = '1221'
const sumOfTheNumbersInBarCode = getSumOfTheNumbersInBarCode(barCode)
const restOfReasonByTen = sumOfTheNumbersInBarCode % 10;
const digitTester = 10 - restOfReasonByTen
console.log(digitTester)