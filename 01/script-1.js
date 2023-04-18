//2
console.log('Kosiuta');
//3
let animal = 'dog';
let num = 4;
console.log(animal);
console.log(num);
animal = num;
console.log(animal);
console.log(num);
//4
const newObject = {
'String': 'Hello world!!!',
'Number': 30,
'Boolean': true,
'Undefined': undefined,
'Null': null
};
//5
const isAdult = confirm('Are you over 18?');
console.log(isAdult);
//6
const myName = 'Yuliia';
let mySurname = 'Kosiuta';
let group = 'JS Fundamentals';
const yearOfBirth = 2000;
let maritalStatus = false;
console.log(yearOfBirth);
console.log(maritalStatus);
console.log(myName);
console.log(mySurname);
let age;
let favouriteColor = null;
console.log(age);
console.log(favouriteColor);
//7
let login = prompt('Please write your login');
let email = prompt('Please write your email');
let password = prompt('Please write your password');
console.log(`Dear ${login}, your email is ${email}, your password is ${password}`);
//8
let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 24;
let daysInMonth = 30;
let secondsInHour = secondsInMinute * minutesInHour;
let secondsInDay = secondsInHour * hoursInDay;
let secondsInMonth = secondsInDay * daysInMonth;
console.log(secondsInHour);
console.log(secondsInDay);
console.log(secondsInMonth);



