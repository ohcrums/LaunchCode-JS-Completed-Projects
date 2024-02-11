// Code your selectRandomEntry function here:

// function with inputs arr and desired selction amount
function selectRandomEntry (arr, amount) {
  let outArr = [];

  // loop breaks once output reaches desired amount
  while (outArr.length < amount) {
    // picking an index for the array, using floor so that results go from 0-5 with array length 6.
    let index = Math.floor (Math.random()*arr.length);
    
    // if outArr does not include index value, push the index value into the output array. Otherwise, repeat while-loop.
    if ( !outArr.includes(arr[index]) ) {
      outArr.push(arr[index]);
    }
  }
  return outArr;
}


// Code your buildCrewArray function here:

function buildCrewArray(ids, candidates){
  let newCrew = [];
  // loop once for each id
  for (i=0; i < ids.length; i++){
    // loop through candidate array
    for (j=0; j<candidates.length; j++){
      // on each loop, check if candidates[j] id matches id selection input. if it does, push that candidate into the output array
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

// store animal objects in new array
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// store random ids in new array
let newIdNumbers = selectRandomEntry(idNumbers, 3);
console.log(newIdNumbers);

// store crew selection in new array
let newCrew = buildCrewArray(newIdNumbers, animals)


// Code your template literal and console.log statements:

console.log(`${newCrew[0]['name']}, ${newCrew[1]['name']}, and ${newCrew[2]['name']} are going to space!`); 
