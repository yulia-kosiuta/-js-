// 1
let arr = [];
function createArray(start, end) {
    for (let n = start; n <= end; n++) {
        arr.push(n);
    }
}
createArray(2, 9);
console.log(arr);
//2
function getIntegers(a, b) {
    let count = 1;
    for (let i = a; i <= b; i++) {
        for (let j = 1; j <= count; j++) {
            console.log(i);
        }
        count++;
    }
}
getIntegers(4, 8);
//3
let array = [];
function randArray(k) {
    for (let i = 0; i < k; i++) {
        array.push(Math.floor(1 + Math.random() * 500));
    }
}
randArray(7);
console.log(array);
//4
const arr1 = [5, 3, 4, 5, 6, 7, 3];
function compact() {
    return arr1.filter((n, i) => arr1.indexOf(n) === i);
}
const arr2 = compact(arr1);
console.log(arr2);
//5
let arrNumbers = [];
let arrStrings = [];
let arr3 = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
function createNewArray() {
    for (let i = 0; i < arr3.length; i++) {
        if (typeof arr3[i] === 'number') {
            arrNumbers.push(arr3[i]);
        } else if (typeof arr3[i] === 'string') {
            arrStrings.push(arr3[i]);
        } else if (Array.isArray(arr3[i])) {
            for (let j = 0; j < arr3[i].length; j++) {
                if (typeof arr3[i][j] === 'number') {
                    arrNumbers.push(arr3[i][j]);
                } else if (typeof arr3[i][j] === 'string') {
                    arrStrings.push(arr3[i][j]);
                }
            }
        }
    }
}
createNewArray();
console.log(arrNumbers);
console.log(arrStrings);
//6
function calc(a, b, op) {
    return op === 1 ? a - b :
        op === 2 ? a * b :
            op === 3 ? a / b :
                a + b;
}
console.log(calc(50, 30, 2));
//7
function findUnique(arr) {
    if (arr.length === arr.filter((n, i) => arr.indexOf(n) === i).length) {
        return true;
    } else {
        return false;
    }
}
console.log(findUnique([2, 2, 3, 5, 7]));
//***
function create(string1) {
    return function (string2) {
        return string1 === string2;
    };
}