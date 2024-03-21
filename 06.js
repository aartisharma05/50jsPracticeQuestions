//write a function that checks if a number is even or odd and returns "Even" or "Odd" accordingly

function EvenOrOdd(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}

let numberType = EvenOrOdd(45677);
console.log(numberType);
