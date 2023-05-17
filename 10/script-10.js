//1
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let { first: f, third: x, fifth = "Name №5" } = names;

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"

//2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let { names: [, name2, , name4], ages: [, age2, , age4] } = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

//3
function mul(...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (!isNaN(numbers[i])) {
            result *= numbers[i];
        }
    }
    return result;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

//4
function mapBuilder(keysArray, valuesArrays) {
    if (keysArray.length !== valuesArrays.length) {
        throw new Error('The number of keys and values does not match');
    }
    const newObject = new Map();
    for (let i = 0; i < keysArray.length; i++) {
        let key = keysArray[i];
        let value = valuesArrays[i];
        newObject.set(key, value);
    }
    return newObject;
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"

//5
const arr = [];

for (let i = 0; i <= 2; i++) {
    arr[i] = function () {
        console.log(i);
    };
}

arr[0](); // 0
arr[arr.length - 1](); // 2
