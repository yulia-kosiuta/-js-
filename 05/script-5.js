//1
class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    getLengthCircle() {
        return 2 * Math.PI * this.radius;
    }
    static getNewLengthCircle(radius) {
        return 2 * Math.PI * radius;
    }
    getCopyObject() {
        const copyObject = { ...this };
        return copyObject;
    }
    static getObjectCircle(x, y, radius) {
        return new Circle(x, y, radius);
    }
    checkIfPointIsInsideCircle(x, y) {
        let distance = ((this.x - x) ** 2 + (this.y - y) ** 2) ** 1 / 2;
        return distance <= this.radius;
    }
    transformationObjectToString() {
        return `Circle { x: ${this.x}, y: ${this.y}, radius: ${this.radius}}`;
    }
}
//2
function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};
console.log(propsCount(mentor));
//3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        console.log(`Name: ${this.name}, Surname: ${this.surname}`);
    }
}
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        super.showFullName();
        console.log(`Midle name: ${midleName}`);
    }
    showCourse() {
        const currentYear = new Date().getFullYear();
        const currentCouse = currentYear - this.year;
        if (currentCouse >= 1 && currentCouse <= 6) {
            console.log(`Cuurent couse: ${currentCouse}`);
        }
    }
}
//4
class Marker {
    constructor(color, amountOfInk) {
        this.color = color;
        this.amountOfInk = amountOfInk;
    }
    printText(string) {
        let sumSymbol = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== ' ') {
                sumSymbol += 0.5;
            }
        }
        if (sumSymbol <= this.amountOfInk) {
            console.log(`%c${string}`, `color: ${this.color}`);
        } else {
            this.amountOfInk -= sumSymbol;
            let sliceString = string.slice(0, Math.floor(this.amountOfInk * 2));
            console.log(`%c${sliceString}`, `color: ${this.color}`);
        }
    }
}

const marker = new Marker('red', 4);
marker.printText('Hello world!!!');

class NewMarker extends Marker {
    constructor(color, amountOfInk) {
        super(color, amountOfInk)
    }
    refuelMarker(string) {
        let sumSymbol = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== ' ') {
                sumSymbol += 0.5;
            }
        }
        if (sumSymbol > this.amountOfInk) {
            this.amountOfInk += (sumSymbol - this.amountOfInk);
            console.log(`%c${string}`, `color: ${this.color}`);
        }
    }
}
const newMarker = new NewMarker('blue', 2);
newMarker.refuelMarker('Hello, my name is Yuliia');
//5
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    #experience = 1.2;
    
    showSalary() {
        console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
    }
    showSalaryWithExperience() {
        console.log(`${this.fullName} salary with experience: ${this.dayRate * this.workingDays * this.#experience}`);
    }
    set experience(value) {
        this.#experience = value;
    }
    get experience() {
        return this.#experience;
    }
}
const worker1 = new Worker('David Miller', 50, 45);
worker1.showSalary();
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log(`New experience: ${worker1.experience}`);
worker1.showSalaryWithExperience();
const salaryWorker1 = worker1.dayRate * worker1.workingDays * worker1.experience;

const worker2 = new Worker('Ivan Maslov', 41, 53);
worker2.showSalary();
worker2.showSalaryWithExperience();
worker2.experience = 1.5;
console.log(`New experience: ${worker2.experience}`);
worker2.showSalaryWithExperience();
const salaryWorker2 = worker2.dayRate * worker2.workingDays * worker2.experience;

const worker3 = new Worker('Stepan Johnson', 63, 40);
worker3.showSalary();
worker3.showSalaryWithExperience();
worker3.experience = 1.5;
console.log(`New experience: ${worker3.experience}`);
worker3.showSalaryWithExperience();
const salaryWorker3 = worker3.dayRate * worker3.workingDays * worker3.experience;

const arr = [salaryWorker1, salaryWorker2, salaryWorker3]

arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
    const workers = [worker1, worker2, worker3];
    console.log(`${workers[i].fullName}: ${arr[i]}`);
}

function sortSalary(array) {
    return array.sort((a, b) => a - b);
}
