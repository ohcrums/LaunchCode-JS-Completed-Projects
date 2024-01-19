const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
{
    // food = food.split(',').sort();
    // equipment = equipment.split(',').sort();
    // pets = pets.split(',').sort();
    // sleepAids = sleepAids.split(',').sort();
}
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
{
    food = food.split(',').sort();
    equipment = equipment.split(',').sort();
    pets = pets.split(',').sort();
    sleepAids = sleepAids.split(',').sort();

    cargoHold = [food, equipment, pets, sleepAids];
    console.log(cargoHold);
};
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
userCabinet = Number(input.question('Select a Cabinet, 0-3: '));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
// if (userCabinet < 0 || userCabinet > 3){
//     console.log('Error! Invalid Entry! Try again.');
// } else {
//     console.log(`
//     ----------------------------
//     Contents of cabinet Number ${userCabinet}:
//     ${cargoHold[userCabinet]}
//     ----------------------------
//     ... what a load of junk!`);
// };

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let userItem; 

if (userCabinet < 0 || userCabinet > 3){
    console.log('Error! Invalid Entry! Try again.');
} else {
    console.log(`
    ----------------------------
    Contents of cabinet Number ${userCabinet}:
    ${cargoHold[userCabinet]}
    ----------------------------
    ... what a load of junk! 
    Well, pick something, I guess.\n`);
    userItem = input.question("Don't misspell it, but don't dawdle either...\n\t");
    if (String(cargoHold[userCabinet]).includes(userItem)) {
        console.log(`\nRight then, take your crummy ${userItem}, see if I care! 
        Skedaddle, spacer!`)
    } else {
        console.log(`Are you having a laugh? Have I gone silly? Really now, ${userItem}? 
        Get it together!`)
    }
};
