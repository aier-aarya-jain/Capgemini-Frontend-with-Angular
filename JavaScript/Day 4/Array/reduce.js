let arr = [1, 2, 3];
let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);

let product = arr.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;

}, 1);

console.log(product);

let names = ["Alice", "Bob", "Charlie"];

let allNames = names.reduce((accumulator, currentValue) => {
    return accumulator + " " + currentValue;
}   );

console.log(allNames.trim());