let arr = [1, 2, 3, 4, 5];

let even = arr.filter((num) => num % 2 === 0);

console.log(even); 

let names = ["Alice", "Bob", "Charlie", "David"];
let longNames = names.filter((name) => name.length > 4);
console.log(longNames);

let mixedArr = [1, "two", 3, "four", 5];
let numbersOnly = mixedArr.filter((item) => typeof item === "number");

console.log(numbersOnly);

