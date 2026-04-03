let user = {
  name: "Aarya",
  age: 22,
  isStudent: true
};

console.log(user.name); // Aarya

console.log(user["age"]); // 22

user.city = "Ajmer";        // add
user.age = 23;              // update

delete user.isStudent;

//Looping Through Objects
for (let key in user) {
  console.log(key, user[key]);
}

//Object Methods

Object.keys(user); //Get Keys
Object.values(user); //Get Values
Object.entries(user); //Get Key-Value Pairs

//Object Destructuring
let { name, age } = user;
console.log(name); // Aarya

//Copy /Merge Objects
let newUser = { ...user, country: "India" };