let obj = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    printDetails: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

console.log(obj);
obj.printDetails() ;

console.log(obj.name);
console.log(obj.address.city);