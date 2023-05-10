//1
const regex = /^[A-Z]\w+$/
function firstLetterCheck(string) {
    if (regex.exec(string)) {
        console.log('Strings starts with uppercase character');
    } else {
        console.log('Strings not starts with uppercase character');
    }
}
firstLetterCheck('Hello');
//2
const email = /^[\w\.\-]+@\w+\.\w+$/;
function checkEmail(string) {
    console.log(email.test(string));
}
checkEmail('hello123@gmail.com');
//3
const regexString = /^(\w+)\s(\w+)$/;
function changeString(string) {
    console.log(string.replace(regexString, '$2, $1'));
}
changeString('Java Script');
//4
const cardNumber = /^\d{4}[\s\-]\d{4}[\s\-]\d{4}[\s\-]\d{4}$/;
function checkCardNumber(number) {
    console.log(`Card number is ${cardNumber.test(number) ? 'valid' : 'invalid'}`);
}
checkCardNumber('2261-1515-4565-5441');
//5
const email2 = /^[A-Za-z\d]([\w]+\-?)@\w+\.\w+$/;
function checkEmailNew(string) {
    if (email2.test(string)) {
        console.log('Email is correct!');
    } else {
        console.log('Email is not correct!');
    }
}
checkEmailNew('my_ma--il@gmail.com');
//6
const login = /^(?=.{2,10}$)[A-Za-z][A-Za-z\d]*(\.\d+)?[A-Za-z\d]*$/;

function checkLogin(string) {
    console.log(login.test(string), string.match(/\d+(\.\d+)?/g).join(', '));
}
checkLogin('ee1*1ret3');
