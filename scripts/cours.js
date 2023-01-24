console.log("Hello World !");

// Je suis un commentaire en Javascript

/**
 * Je suis un commentaire multi-ligne
 */

let myVar, myVarTwo = 'A random string';
const myOtherVar = 50;

result = 2 + 5;
result = 5 - 5;
result = 5 * 5;
result = 8 / 2;
result = 8 % 2;
result = result + 5;
result += 5;
result *= 2;
result++;
result--;

if (result >= 50) {
    // code
} else if (result >= 40) {
    // autre code
} else {
    // code par défaut
}

if (result > 50) { }
if (result < 50) { }
if (result >= 50) { }
if (result <= 50) { }
if (result > 50 && result < 80) { }
if (result > 50 || result < 0) { }
if (result !== 50) { }

const aResult = addition(5, 6);
function addition(varOne, varTwo) {
    return varOne + varTwo;
}

setTimeout(function () {
    // code exécuté dans 5 secondes
}, 5000);

setTimeout(() => {
    // code exécuté dans 5 secondes
}, 5000);

let array = [];
const anArray = [1, 5, 2, 5, "oui"];

array[0] = "Hello";
array[1] = "World !";

// console.log(anArray[2]); // Affichera 5

// array.push("Hello"); // Ajoute un élément au tableau

// console.log(anArray);
// console.log(anArray.filter((value, index) => {
//     return parseInt(value);
// })); // Fonction filter

array.length; // Affichera 2

anArray.forEach((value, index) => {
    // console.log(index);
});

for(let i = 0; i < array.length; i++) {
    // console.log(array[i]);
}

let i = 0;
while (i < array.length) {
    // console.log(array[i]);
    i++;
}

// console.log('for...of');
for(const value of array) {
    // console.log(value);
}

// console.log('for...in');
for(const index in array) {
    // console.log(index);
}

class Student {
    name;
    email;
    dateOfBirth;

    constructor(name, email, dateOfBirth) {
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }

    getAge() {
        return (new Date()).getFullYear() - this.dateOfBirth.getFullYear();
    }

}

let dob = new Date();
dob.setFullYear(1995);
let myStudent = new Student('Fabien', 'fabien@ipme.fr');
myStudent.dateOfBirth = dob;
// console.log(myStudent.getAge());

// console.log(document.title);
// console.log(document.documentURI);
// console.log(document.referrer);

document.getElementsByClassName('container');
document.getElementsByTagName('div');
document.getElementById('id-title');
document.querySelector('div.container');
document.querySelectorAll('div');


console.log('Height ' + window.innerHeight);
console.log('Width ' + window.innerWidth);
window.scrollX;
window.scrollY;
console.log(window.navigator);
window.navigator;

// console.log(window.innerWidth);


const myTitle = document.getElementById('id-title');
myTitle.id; // affiche l'identifiant
myTitle.className; // les classes CSS de la balise HTML
myTitle.innerText; // "Hello World !"
myTitle.innerHTML; // Hello World !ise

let students = [];
students['Albert'] = [12, 8, 9, 7, 13];
students['Michel'] = [14, 13, 12, 11, 10];
// console.log(students);


function initBtn() {
    const myBtn = document.querySelector('.btn.btn-primary');
    if (myBtn) {
        myBtn.addEventListener('click', () => {
            myTitle.classList.toggle('text-danger'); // Ajoute la classe css 'text-danger' sur la bal
        });
    }
}

function initDarkLightMode() {
    const myBtn = document.querySelector('[data-dark-light]');
    if (myBtn) {
        console.log(myBtn.getAttribute('data-dark-light'));
        myBtn.addEventListener('click', () => {
            const body = document.querySelector('body');
            if (body) {
                body.classList.toggle('dark-mode');
            }
        });
    }
}

window.addEventListener('load', () => {
    initBtn();
    initDarkLightMode();
});