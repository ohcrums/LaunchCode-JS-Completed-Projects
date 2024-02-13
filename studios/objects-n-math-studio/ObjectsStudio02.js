// Code your orbitCircumference function here:
function orbitCircumference (rad) {
  let circumference = 2 * Math.PI * rad
  return circumference
}

// Code your missionDuration function here:
function missionDuration (orbitsToDo, orbitRadius, orbitSpeed) {
  defaultOrbitRadius = orbitRadius || 2000; // km
  defaultOrbitSpeed = orbitSpeed || 28000; // km/hr

  // the math.round (x*100)/100 rounds to nearest 2 decimal
  // call to circumferance function with radius as input.
  // 1 orbit = circumference / speed
  // final calculation = (orbits * circumference) / speed
  let duration = Number( Math.round( 
    ( ( orbitsToDo * orbitCircumference(defaultOrbitRadius) ) / defaultOrbitSpeed ) 
    *100 ) /100 )
  
  console.log(`The mission will travel ${Math.round (orbitCircumference(defaultOrbitRadius)* 100)/ 100} km around the planet, and it will take ${orbitsToDo} hours to complete.`);

  return duration
}


// Copy/paste your selectRandomEntry function here:
function selectRandomEntry (arr, amount) {
  let outArr = [];

  while (outArr.length < amount) {
    let index = Math.floor (Math.random()*arr.length);
    
    if ( !outArr.includes(arr[index]) ) {
      outArr.push(arr[index]);
    }
  }
  return outArr;
}

// Code your oxygenExpended function here:
 
// take candidate object as paramater
function oxygenExpended(candObject) {
  // spacewalk lasts 3 orbits, 
  // use missionDuration to calculate hours
  let hours = missionDuration(3)

  // use o2used object method to calculate how much o2 they use during spacewalk
  // round to 3 decimal places, *1000
  let o2Required = Math.round( candObject['o2Used'](hours) * 1000 ) / 1000

  // return  string 
  return `${candObject.name} will perform the spacewalk, which will last ${hours} hours and require ${o2Required} kg of oxygen.`
}
// oxygenExpended( selectRandomEntry(crew, 1) );

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];

// console.log(candidateA.o2Used(1))
let tribute = selectRandomEntry(crew, 1)[0]
console.log( oxygenExpended( tribute ) );