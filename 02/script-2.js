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
