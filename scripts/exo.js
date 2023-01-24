
/**
 * Exercice 1
 */
function getDoB(age) {
    return (new Date()).getFullYear() - age;
}

console.log(getDoB(25));


/**
 * Exercice 2
 */
function getAverage(array) {
    let sum = 0
    for (const element of array) {
        sum += element;
    }
    return sum / array.length;
}


/**
 * Exercice 3
 */
function calcTTC(price, qty, tva = 1.196) {
    if (parseFloat(price) && parseInt(qty) && parseFloat(qty)) {
        return (price * qty * tva).toFixed(2);
    }
    return 'Tu fais n\'importe quoi';
}

console.log(calcTTC(25, 4));

/**
 * Exercice 4
 */
function getWaterState(temperature) {
    if (temperature >= 100) return 'Gaz';
    if (temperature <= 0) return 'Solide';
    return 'Liquide';
}

console.log(getWaterState(86));

/**
 * Exercice 5
 */
const students = [
    [
        "Albert",
        [12, 8, 9, 7, 13]
    ],
    [
        "Michel",
        [14, 13, 12, 11, 10]
    ],
    [
        "Vincent",
        [17, 16, 15, 18, 13]
    ],
];

function getStudentAverage(arrayStudents) {
    for (const student of arrayStudents) {
        console.log(student[0] + ' : ' + getAverage(student[1]));
    }
}

getStudentAverage(students);

/**
 * Exercice 6
 */
function incrementPrice(price, percent) {
    return (price * (1 + percent/100)).toFixed(2);
}

console.log(incrementPrice(100, 15));

/**
 * Exercice 7
 */
function deleteDuplicate(anArray) {
    return new Set(anArray);
}

console.log(deleteDuplicate([1, 2, 3, 3, 3, 4, 5, 5]));

/**
 * Exercice 8
 */
function getMultiplication(digit, max = 12) {
    for(let i = 1; i <= max; i++) {
        console.log(i + ' x ' + digit + ' = ' + (i * digit));
    }
}
getMultiplication(8);

/**
 * Exercice 9
 */
function excerpt(aString, sub = 15) {
    if (aString.length <= sub) return aString;
    return aString.substr(0, sub) + '...';
}
console.log(excerpt('Lorem quisque class vestibulum'));

/**
 * Exercice 12
 */
function alterString(aString, transform = 'fe') {
    const vowels = 'aeiouy';
    let newString = '';
    for (const char of aString) {
        newString += char;
        if (vowels.includes(char)) {
            newString += transform + char;
        }
    }
    return newString;
}
console.log(alterString('chat'));

/**
 * Exercice 14
 */
function isPangram(word) {
    let alphabetCheck = '';
    word = word.toLowerCase();
    const regex = new RegExp('^[a-z]+$');
    for (const char of word) {
        if (!alphabetCheck.includes(char) && regex.test(char)) {
            alphabetCheck += char;
        }
    }
    return alphabetCheck.length === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));