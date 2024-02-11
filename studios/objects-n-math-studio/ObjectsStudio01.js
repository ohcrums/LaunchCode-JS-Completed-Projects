// Code your selectRandomEntry function here:

// function with arr and amount of selctions as inputs
function selectRandomEntry (arr, amount) {
  let counter = 0; 
  let outArr = [];

  // counter ticks up, loop breaks when it reaches amount input
  while (counter < amount) {
    // picking an index for the array, using floor so that results go from 0-5 with array length 6.
    let index = Math.floor (Math.random()*arr.length);

    // push the random index into the output array
    outArr.push(arr[index]);
    counter++;
  }
  return outArr;
}

// Code your buildCrewArray function here:

function buildCrewArray(ids, candidates){
  newCrew = []
  for (i=0; i < ids.length; i++){
    for (j=0; j<candidates.length; j++){
        if (candidates[j].astronautID === ids[i]){
          newCrew.push(candidates[j]);
        }
    }
  }
  return newCrew;
}


let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
// console.log(buildCrewArray(idNumbers, animals)); 

console.log(selectRandomEntry(idNumbers, 3));