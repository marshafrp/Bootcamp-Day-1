//for loop
console.log("---Basic for loop");
for(let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

//loop through array
const fruits = ["apple", "banana", "orange", "mango"];
console.log("---Looping through array");
for (let i=0; i<fruits.length; i++){
    console.log(`Fruit ${i+1}: ${fruits[i]}`);
}

//2. FOR...OF loop
console.log("---for...of loop---");
const colors = ["red", "green", "blue"];
for (let color of colors){
    console.log(`Color: ${color}`);
}

//3. FOR...IN loop used for onjects
console.log("---for...in loop ---");
const student = {
    name: "John",
    age: 20,
    grade: "A"
};
for (let key in student){
    console.log(`${key}: ${student[key]}`);
}

//4. WHILE loop
console.log("---while loop---");
let count = 1;
while (count <= 5) {
    console.log(`While count: ${count}`);
    count++;
}

//5. DO...WHILE loop
console.log("---do...while loop---");
let num =1;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num <=3);

//6. BREAK and CONTINUE
console.log("---break and continue---");
for (let i = 1; i <= 5; i++)
{
    if (i === 2) continue;
    if (i === 4) break;
    console.log(`Number ${i}`);
}

//1. Basic if statment
let studentScore = 85;

if (studentScore >= 80) {
    console.log("Excellent work!");
}

//2. If-else statment
let age = 17;

if (age <=18){
    console.log("You can vote!");
} else {
    console.log("Too young to vote");
}

//3. If-else if else statement
let grade = 75;

if (grade>=90){
    console.log("Grade: A");
} else if (grade >= 80){
    console.log("Grade: B");
} else if (grade >= 70){
    console.log("Grade: C");
} else if (grade >= 60){
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//4. Nested if statement
let isLoggedIn = true;
let isAdmin = true;
let hasPermission = true;

if (isLoggedIn) {
    if (isAdmin) {
        if (hasPermission) {
            console.log("Welcome to admin dashboard!");
        } else {
            console.log("Insufficient permissions");
        }
    } else {
        console.log("Welcome to user dahsboard!");
    }
} else {
    console.log("Please log in first");
}

//5. Using logical operators with if statements
let username = "john_doe";
let password = "secret123";

if (username === "john_doe" && password === "secret123") {
    console.log("Login successfull");
} else {
    console.log("Invalid credentials");
}

//6. Ternary operator (shorthand if-else)
let isSubscribed = true;
let message = isSubscribed ? "Welcome back!" : "Please subcribe";

//1. Basic Function Declaration
function sayHello(name) {
    return `Hello, ${name}!`;
}

//Using the function
console.log(sayHello("John"));

//2. Function w multiple param
function calculateTotal(price, quantity) {
    return price * quantity;
}

//Using the function
console.log(calculateTotal(10,5));

//3. Arrow function
const add = (a,b) => {
    return a+b;
}

//single arrow function (one line)
const multiply = (a,b) => a*b;

//Using arrow functions
console.log(add(5,3));
console.log(multiply(4,2));