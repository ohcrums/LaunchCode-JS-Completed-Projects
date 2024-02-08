//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findLowestNum(arr) {
  // grab first index of array and store in local variable
  let min = arr[0];
  // find lowest number in arr and set min to that value
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};


//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(findLowestNum(nums1))
console.log(findLowestNum(nums2))
console.log(findLowestNum(nums3))
