//Find sum of all elements in an array

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let arr = [10, 40, 50];
let sumofArray = sumOfArray(arr);
console.log(sumofArray);
