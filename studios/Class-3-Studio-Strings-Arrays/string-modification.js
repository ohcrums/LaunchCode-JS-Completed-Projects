const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
console.log(str.slice)

{
    let strStart = str.slice(0, 3);
    let strCalc = strStart.length - str.length;
    let strEnd = str.slice(strCalc);
    let strFinal = strEnd.concat(strStart);

    console.log(strFinal)
}
//Use a template literal to print the original and modified string in a descriptive phrase.
{
    let strStart = '';
    let strCalc = '';
    let strEnd = '';
    let strFinal = '';

    console.log(`To complete the requirement I slice the first few letters, "${strStart = str.slice(0, 3)}", i then subtract the length of the word from the first slice to get the negative number, "${strCalc = strStart.length - str.length}", to slice it the other way,"${strEnd = str.slice(strCalc)}", and concatenate them in reverse order. The result is "${strFinal = strEnd.concat(strStart)}."`)
}
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
{
    // let strInput = '';
    // let strStart = '';
    // let strCalc = '';
    // let strEnd = '';
    // let strFinal = '';

    // strInput = input.question("Enter a number from 1-9: ")

    // strStart = str.slice(0, strInput);
    // strCalc = strStart.length - str.length;
    // strEnd = str.slice(strCalc);
    // strFinal = strEnd.concat(strStart);

    // console.log(strFinal)
}
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
{
    let strInput = '';
    let strStart = '';
    let strCalc = '';
    let strEnd = '';
    let strFinal = '';

    strInput = input.question("Enter a number from 1-9: ");

    if (Number(strInput) > 9 || Number(strInput) < 1){
        console.log('Input outside of range, defaulting to "3"')
        strInput = 3
        strStart = str.slice(0, strInput);
        strCalc = strStart.length - str.length;
        strEnd = str.slice(strCalc);
        strFinal = strEnd.concat(strStart);
        console.log(`LaunchCode? Moar like ${strFinal} amirite? hehe.heh.`)
    } else {
        strStart = str.slice(0, strInput);
        strCalc = strStart.length - str.length;
        strEnd = str.slice(strCalc);
        strFinal = strEnd.concat(strStart);
        console.log(`LaunchCode? Moar like ${strFinal} amirite? hehe.heh.`)
    };
}