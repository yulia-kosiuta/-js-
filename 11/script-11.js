//1
function getPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    })
}
getPromise("test promise", 2000).then(function (data) {
    console.log(data);
});
//2
function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        let count = 1;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                count *= arr[i];
            } else {
                reject(new Error("Error! Incorrect array!"));
                return;
            }
        }
        resolve(count);
    })
}
calcArrProduct([3, 4, 5]).then(result => console.log(result));
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));
//3
new Promise(function (resolve, reject) {
    const number = +prompt('Enter number:');
    if (isNaN(number)) {
        reject();
    } else {
        resolve(number);
    }
}).catch(function (error) {
    return new Promise(function (resolve, reject) {
        function askNumber() {
            const number = +prompt('Enter number:');
            if (isNaN(number)) {
                askNumber();
            } else {
                resolve(number);
            }
        }
        askNumber();
    });
}).then(function (result) {
    console.log(result);
});
//4
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {
    for (let i = 0; i <= 10; i++) {
        await delay(i, Math.floor(Math.random() * 3000));
        console.log(i);
    }
}
showNumbers();