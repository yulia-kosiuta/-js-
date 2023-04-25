//1
const arr = [1, 2, 8, 5, 5, 7, 5, 4];
function sumSliceArray(arr, first, second) {
    let sum = 0;
    try {
        if (isNaN(first) && isNaN(second) || first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
            throw new Error('Invalid value');
        }
        sum = arr[first] + arr[second];
    } catch (error) {
        console.log(error.message);
    }
    return sum;
}
console.log(sumSliceArray(arr, 2, 5));
//2
function checkAge() {
    let username = prompt("Enter your username:");
    let age = +prompt("Enter your age:");
    let status = prompt("Enter your status(admin, moderator or user):");
    try {
        if (age < 18 || age > 70) {
            throw new RangeError('Age must be between 18 and 70');
        } else if (age === undefined) {
            throw new Error('The field is empty! Please enter your age');
        } else if (status !== 'admin' && status !== 'moderator' && status !== 'user') {
            throw new EvalError('Enter correct data');
        } else if (isNaN(age)) {
            throw new Error('Invalid value');
        }
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}
checkAge();
//3
function calcRectangleArea(width, height) {
    let ractangleArea = 0;
    try {
        if (isNaN(width) || isNaN(height)) {
            throw new Error('Invalid value');
        }
        ractangleArea = width * height;
    } catch (error) {
        console.log(error.message);
    }
    return ractangleArea;
}
console.log(calcRectangleArea('a', 10));
//4
class MonthException extends Error {
    constructor(message) {
        super(message)
        this.name = 'MonthException';
    }
}
function showMonthName(month) {
    try {
        if (month === 1) {
            return 'January';
        } else if (month === 2) {
            return 'February';
        } else if (month === 3) {
            return 'March';
        } else if (month === 4) {
            return 'April';
        } else if (month === 5) {
            return 'May';
        } else if (month === 6) {
            return 'June';
        } else if (month === 7) {
            return 'July';
        } else if (month === 8) {
            return 'August';
        } else if (month === 9) {
            return 'September';
        } else if (month === 10) {
            return 'October';
        } else if (month === 11) {
            return 'November';
        } else if (month === 12) {
            return 'December';
        } else {
            throw new MonthException('Incorrect month number');
        }
    } catch (error) {
        console.log(error.name, error.message);
    }
}
console.log(showMonthName(13));
//5
const array = [
    {
        id: -5
    },
    {
        id: 8
    },
    {
        id: 3
    }
]
function showUser(id) {
    if (id < 0) {
        throw new Error(`Error: ID must not be negative: ${id}`);
    }
    return { id };
}
function showUsers(ids) {
    const newArr = [];
    for (let i = 0; i < ids.length; i++) {
        try {
            newArr.push(showUser(ids[i].id));
        } catch (error) {
            console.log(error.message);
        }
    }
    return newArr;
}
console.log(showUsers(array));