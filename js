//Write a JavaScript function to get an array and to read the first element of an array. 
//Check whether it is prime or not. 

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function checkFirstElement(arr) {
    if (!arr.length) {
        return "Array is empty";
    }
    const firstElement = arr[0];
    if (isPrime(firstElement)) {
        return `${firstElement} is a prime number`;
    } else {
        return `${firstElement} is not a prime number`;
    }
}

// Example usage
const myArray = [2, 3, 5, 7, 11];
const result = checkFirstElement(myArray);
console.log(result);

// Write a JavaScript program to find the most frequent item of an array

const arr = [1, 1, 3, 5, 7, 6, 8, 5, 6, 4, 7, 6, 0, 2, 1, 6, 8, 9, 5];
arr.sort((a, b) => a - b);
let count = 1, max = 0, el;
for (let i = 1; i < arr.length; ++i) {
    if (arr[i] === arr[i - 1]) {
        count++;
    } else {
        count = 1;
    }
    if (count > max) {
        max = count;
        el = arr[i];
    }
}
console.log("The most occurred element is: " + el);


const arr = [1, 2, 3, 2, 2, 3, 1, 4, 2];
const frequencyMap = new Map();

for (const item of arr) {
    frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
}

let mostFrequentItem;
let maxFrequency = 0;

for (const [item, frequency] of frequencyMap) {
    if (frequency > maxFrequency) {
        maxFrequency = frequency;
        mostFrequentItem = item;
    }
}

console.log(`The most frequent item is: ${mostFrequentItem}`);


//Write a JavaScript for loop that will iterate from 0 to 15. 
//For each iteration, check if the current number is odd or even, and 
//display the message to the screen as odd or even.
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even.`);
    } else {
        console.log(`${i} is odd.`);
    }
}


//Write a JavaScript program to find the sum of squares of the elements of an array.
const arr = [1, 2, 3, 4, 5];

// Calculate the sum of squares
const sumOfSquares = arr.reduce((acc, curr) => acc + curr ** 2, 0);

console.log(`The sum of squares of the elements is: ${sumOfSquares}`);
