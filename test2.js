const numbers = [1, 2, 2, 3, 4, 4, 5];
const names = ["Rahul", "Aman", "Rahul", "Jitendra", "Aman"];

const uniqueNumbers = [...new Set(numbers)];
const uniqueNames = [...new Set(names)];

console.log(uniqueNumbers);
console.log(uniqueNames);