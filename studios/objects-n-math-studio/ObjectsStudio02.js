// Code your orbitCircumference function here:
function orbitCircumference (rad) {
  let circumference = 2 * Math.PI * rad
  return circumference
}

// Code your missionDuration function here:
function missionDuration (orbitsToDo, orbitRadius, orbitSpeed) {
  orbitRadius = 2000; // km
  orbitSpeed = 28000; // km/hr

  // the math.round (x*100)/100 rounds to nearest 2 decimal
  // call to circumferance function with radius as input.
  // 1 orbit = circumference / speed
  // final calculation = (orbits * circumference) / speed
  let duration = ( Math.round( 
    ( ( orbitsToDo * orbitCircumference(orbitRadius) ) / orbitSpeed ) 
    *100 ) /100 )
  
  console.log(`The mission will travel ${Math.round (orbitCircumference(orbitRadius)* 100)/ 100} km around the planet, and it will take ${orbitsToDo} hours to complete.`);

  return duration
}

missionDuration(5);

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
 
function oxygenExpended() {

}

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
 