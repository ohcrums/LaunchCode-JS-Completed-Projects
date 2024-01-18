//Part Three section one

let language = 'JavaScript';

// console.log(language.slice(0, 1));
// console.log(language.slice(4, 5));


//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0, 1)+language.slice(4, 5));

//2. Without using slice(), use method chaining to accomplish the same thing.
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

console.log(
    language.charAt(0)+language.charAt(4)
)

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

console.log(`The abbreviation for '${language}' is '${language.charAt(0)+language.charAt(4)}'.`)

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

{
    const initialOne = language.indexOf("J")

    const initials = language.charAt(initialOne)+language[4]

    console.log(initials)

}    

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

{
let notTitleCase = 'title case';

let yesTitleCase = (
    (notTitleCase.charAt(0).toUpperCase() + notTitleCase.slice(1, 6)) + 
    (notTitleCase.charAt(6).toUpperCase() + notTitleCase.slice(7))
);

console.log(yesTitleCase)
}
