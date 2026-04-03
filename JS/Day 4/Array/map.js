let arr = [1, 2, 3];

let squaredArr = arr.map((num) => {
    return num * num;
});

console.log(squaredArr);

let names = ["Alice", "Bob", "Charlie"];

let nameLengths = names.map((name) => {
    return name.length;
});

console.log(nameLengths);

let mixedArr = [1, "two", 3, "four"];
let typesArr = mixedArr.map((item) => {
    return typeof item;
});

console.log(typesArr);