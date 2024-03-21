//write a function that takes a string and returns he reversed version of it

//using inbuilt functions
function reversedString(str) {
  return str.split("").reverse().join("");
}

let str = "AARTI";
let reversedStr = reversedString(str);
console.log(reversedStr);

//without using inbuilt functions

function reversStr(str) {
  let reversedString = "";

  for (var i = str.length; i >= 0; i--) {
    reversedString = reversedString + str[i];
  }

  return reversedString;
}

let str1 = "SHARMA";

let reversedStr1 = reversStr(str1);

console.log(reversedStr1);
