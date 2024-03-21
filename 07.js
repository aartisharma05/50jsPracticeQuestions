//find leap year or not

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? true
    : false;
}

let isLeapYearOrNot = isLeapYear(2015);
console.log(isLeapYearOrNot);
