let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log('\npart 1');

console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));
console.log("split arguments remove the argument contents, then turns the string into an array of elements based on those gaps")

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log('\npart 2');
console.log(arr.join());
console.log(arr.join('a'));
// adds a between array elemts and converts to string
console.log(arr.join(' '));
// adds spaces
console.log(arr.join(''));
// joins without any new characters
console.log("join method arguments define characters inserted between array elements once converted into a string")

//3) Do split or join change the original string/array?
// console.log(cargoHold.split(',').sort().join(','));
console.log('\npart 3');
console.log(arr)
console.log(str)
// no they don't

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
console.log('\npart 4');

let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));
