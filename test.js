/* let randomNumber = Math.random();
// Generate a random decimal number between 0 and 1
console.log("Random Number (0 - 1): " + randomNumber);

let decimalNumber = randomNumber * 5;
// Generate a random whole number between 0 and 4 (inclusive)
console.log("Decimal Number X5: " +decimalNumber);

let decimalNumber1 = randomNumber * 5 + 1;
// Generate a random whole number between 0 and 4 (inclusive)
console.log("Decimal Number X5 + 1: " +decimalNumber1);

// Generate a random number between 1 and 5 (inclusive)
let answer = Math.floor(decimalNumber1) + 1;
console.log("Answer: " +answer); */



// multiple of 3s between 0 and 20;

/* for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
} */

let scrimbaUsers = {
    "00": "angelukpong@gmail.com",
    "01": "joaquinaukpong@gmail.com",
    "02": "joelukpong@gmail.com",
    age: 13,
}

let scrimbaUsersEmails = Object.values(scrimbaUsers);
let scrimbaUsersIds = Object.keys(scrimbaUsers);
let scrimbaUsersEntries = Object.entries(scrimbaUsers);

console.log(scrimbaUsers["00"]); // Output: joaquinaukpong@gmail.com
console.log(scrimbaUsers["age"]); // Output: joaquinaukpong@gmail.com
console.log(scrimbaUsersIds); // Output: array of keys
console.log(scrimbaUsersEmails); // Output: array of values
console.log(scrimbaUsersEntries); // Output: array of arrays of keys and values