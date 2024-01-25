// Rectangles

// make a 5 point long hash line
console.log('\n5 hash line')
function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }
console.log(makeLine(5));

// make a 5 by 5 hash grid square
console.log('\n5 by 5 suqare')
function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
      square += (makeLine(size) + '\n')
    }
    return square.slice(0, -1);
  }
console.log(makeSquare(5));

// // make a 5 by 3 hash grid rectangle
console.log('\n5 by 3 square')
function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }
console.log(makeRectangle(5, 3));

// Triangles

// make downward stairs pattern
console.log('\n')

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }
console.log(makeDownwardStairs(5));

// // make a group of hashes with spaces on either side.
console.log('\nSpace and Hash')

// method 1
function makeSpaceLine(numSpaces, numChars){
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++){
        spaceLine += ' ';
    }
    for (let i = 0; i < numChars; i++) {
        spaceLine += '#'  
    } 
    for (let i = 0; i < numSpaces; i++){
        spaceLine += ' ';
    }
    return spaceLine;
}
console.log(makeSpaceLine(3, 5));

// method 2
// function makeSpaceLine(numSpaces, numChars){
//     let spaceLine = '';
//     let totalSpaces = '';
//     let totalChars = '';

//     for (let i = 0; i < numSpaces; i++){
//         totalSpaces += ' ';
//     }
//     for (let i = 0; i < numChars; i++) {
//         totalChars += '#'  
//     } 
//     spaceLine = spaceLine.concat(totalSpaces).concat(totalChars).concat(totalSpaces);
//     return spaceLine;
// }
// console.log(makeSpaceLine(3, 5));

// i'm sure there's a cleaner way to do this but i can't think of it right now

// // make an isoceles triangle that returns a given height
function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }
console.log(makeIsoscelesTriangle(5));

// // Diamonds are forever
// the dumb way
function makeDiamond(height) {
    let diamond = '';
    
    //the dumb way
    // diamond += (makeIsoscelesTriangle(5) + '\n' + makeIsoscelesTriangle(5).split('\n').reverse().join('\n'));

    // another way 
    // let triangle = '';
    // let reverseTriangle = '';
    // for (let i = 0; i < height; i++) {
    //     triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    //   }
    // for (let i = height -1; i >= 0; i--) {
    //     reverseTriangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    // }
    // diamond += triangle + reverseTriangle
    // return diamond.slice(0, -1);

    // the right way
    let reverseTriangle = '';
    for (let i = height -1; i >= 0; i--) {
        reverseTriangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
       reverseTriangle = reverseTriangle.slice(0, -1);
    diamond += makeIsoscelesTriangle(5) + '\n' + reverseTriangle;
    return diamond;


  }

console.log(makeDiamond(5));


// console.log(makeSpaceLine(5 - 0 - 1, 2*0 + 1) + '\n');
// // Bonus Mission 