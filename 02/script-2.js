//1
let a = 7;
let b = 6;
let c = 5;

if (a < b && b < c) {
    console.log(true);
} else {
    console.log(false);
}
//2
let x = 1;
let y = 2;

let res1 = String(x) + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = !!x + String(y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = !!(x + y) // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x * y * undefined;  // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
//3
let isAdult = prompt('Are you over 18? Enter "yes" or "no"');
if (isAdult == 'yes') {
    console.log('You have reached the age of majority');
} else if (isAdult == 'no') {
    console.log('You are still too young');
}
//4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let mostRepeatedNumber = arr.filter((n, i) => arr.indexOf(n) === i).sort((a, b) => arr.filter(n => n === b).length -
    arr.filter(n => n === a).length)[0];
console.log(mostRepeatedNumber);
for (let j = 0; j < arr.length; j++) {
    if (arr[j] === mostRepeatedNumber) {
        arr.splice(arr.indexOf(mostRepeatedNumber), 1);
    }
}
console.log(arr);
//5
let firstSide = +prompt('Enter the length of the first side of the triangle');
let secondSide = +prompt('Enter the length of the second side of the triangle');
let thirdSide = +prompt('Enter the length of the third side of the triangle');
let halfPerimeter = (firstSide + secondSide + thirdSide) / 2;
let areaOfTtiangle = (halfPerimeter * (halfPerimeter - firstSide) * (halfPerimeter - secondSide) *
    (halfPerimeter - thirdSide)) ** (1 / 2);
console.log(areaOfTtiangle.toFixed(3));
if (firstSide ** 2 == secondSide ** 2 + thirdSide ** 2 || secondSide ** 2 == firstSide ** 2 + thirdSide ** 2 ||
    thirdSide ** 2 == secondSide ** 2 + firstSide ** 2) {
    console.log(areaOfTtiangle.toFixed(3));
}
if (!/^\d+$/.test(firstSide) || !/^\d+$/.test(secondSide) || !/^\d+$/.test(thirdSide)) {
    alert('Incorrect data');
}
//6
let date = new Date();
console.log(date);
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let time = `${hours}:${minutes}:${seconds}`;
console.log(time);
if (23 <= hours || hours === 0 || hours < 5) {
    console.log('Доброї ночі');
} else if (5 <= hours && hours < 11) {
    console.log('Доброго ранку');
} else if (11 <= hours && hours < 17) {
    console.log('Доброго дня');
} else if (17 <= hours && hours < 23) {
    console.log('Доброго вечора');
}

switch (hours) {
    case 23:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('Доброї ночі');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('Доброго ранку');
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        console.log('Доброго дня');
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        console.log('Доброго вечора');
        break;
}
