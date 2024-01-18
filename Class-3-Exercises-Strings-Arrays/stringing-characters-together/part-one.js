let num = 1001;

console.log(String(num))

//Returns 'undefined'.
//console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length)

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

let numDec = 123.45
console.log(String(numDec).length-1)

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
// console.log(
//     `Is 'num' a decimal? ${
//     (String(num).includes("."))
// }`
// )


if (String(num).includes(".")) {
    console.log(`${num} is a decimal, its length is ${
        (String(num).length-1)
        } digits`);
}   else {
    console.log(`${num} is not a decimal, its length is ${
        (String(num).length)
        } digits.`)
}


if (String(numDec).includes(".")) {
    console.log(`${numDec} is a decimal, its length is ${
        (String(numDec).length-1)
        } digits`);
}   else {
    console.log(`${numDec} is not a decimal, its length is ${
        (String(numDec).length)
        } digits.`)
}

