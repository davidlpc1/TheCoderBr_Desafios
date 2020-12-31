function isPalindrome(word) {
    const wordInLowerCaseWithoutSpaces = word.trim().toLowerCase();
    const arrayOfEachLeterInWord = wordInLowerCaseWithoutSpaces.split('');
    const lenghtOfWord = arrayOfEachLeterInWord.length;
    let invertedWord = '';

    for (let letterIndex = lenghtOfWord - 1; letterIndex >= 0; letterIndex--) {
        invertedWord += arrayOfEachLeterInWord[letterIndex]
    }

    return invertedWord == wordInLowerCaseWithoutSpaces;
}

let word = 'davi';
consoleResult()
word = 'ovo'
consoleResult()

function consoleResult(){
    console.log({
        word,
        isPalindrome:isPalindrome(word)
    })
}