// Global Scope
var globalVar = "I am a global variable";
console.log(".....global scope......");
function showGlobal() {
    console.log(globalVar); // Accessible
}
showGlobal();
console.log(globalVar); // Accessible

// Function Scope
function functionScopeExample() {
    console.log("\n....Function  scope......");
    var functionScopedVar = "I am function-scoped";
    console.log(functionScopedVar); // Accessible
}
functionScopeExample();
// console.log(functionScopedVar); // Error: Not defined outside the function

// Block Scope
if (true) {
    let blockScopedLet = "I am block-scoped (let)";
    console.log("\n.....block scope......");
    const blockScopedConst = "I am block-scoped (const)";
    console.log(blockScopedLet); // Accessible
    console.log(blockScopedConst); // Accessible
}
// console.log(blockScopedLet); // Error: Not defined
// console.log(blockScopedConst); // Error: Not defined

// Arrow Function
console.log("\n.....Arrow function......");
const arrowFunctionExample = (a, b) => a + b;
console.log(arrowFunctionExample(5, 3)); // Output: 8

// For Each
console.log("\n....for each.....");
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// For/Of Loop
console.log("\n....for/of loop.....");
for (const fruit of fruits) {
    console.log(fruit);
}

// Find
console.log("\n....Find....");
const numbers = [4, 9, 16, 25, 29];
const firstOver18 = numbers.find(num => num > 18);
console.log(`First number over 18: ${firstOver18}`); // Output: 25

// Find Index
console.log("\n....Find index....");
const firstIndexOver18 = numbers.findIndex(num => num > 18);
console.log(`Index of first number over 18: ${firstIndexOver18}`); // Output: 3

// Set
console.log("\n...Set.....");
const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); // Output: Set { 1, 2, 3, 4 }

// Map
console.log("\n...Map.....");
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set("age", 25);
console.log(myMap.get("name")); // Output: Alice

// Every
console.log("\n...every.....");
const allAdults = [22, 33, 44].every(age => age > 18);
console.log(`Are all adults? ${allAdults}`); // Output: true

// Some
console.log("\n...Some.....");
const hasChild = [3, 10, 18, 20].some(age => age < 18);
console.log(`Is there any child? ${hasChild}`); // Output: true
