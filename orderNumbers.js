function orderNumbers(arrayOfNumbers){
    const ordenedArray = [];
    for(number in arrayOfNumbers) {
        ordenedArray.push(findMinValueOfAnArray(arrayOfNumbers,ordenedArray))
    }
    return ordenedArray;
}

function findMinValueOfAnArray(arrayOfNumbers,valuesAlreadySelected=[]){
    let minValue;
    arrayOfNumbers.forEach(number => {
        if((number < minValue || minValue === undefined) && !valuesAlreadySelected.includes(number)){
            minValue = number;
        }
    })
    return minValue
}

consoleResult();

function consoleResult(){
    console.log({
        originalArray: [ 3, 10, 4, 7, 8],
        transformedArray: orderNumbers([ 3, 10, 4, 7, 8])
    })
}