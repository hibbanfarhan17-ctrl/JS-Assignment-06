// Task 6 - Slice and Splice
let numbers = [10, 20, 30, 40, 50, 60];

let slicedNumbers = numbers.slice(1, 4);
numbers.splice(2, 2);

console.log("Sliced Numbers:", slicedNumbers);
console.log("Modified numbers:", numbers);