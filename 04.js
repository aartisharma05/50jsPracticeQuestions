//create a function to calculate the area of a reactangle given its width and height

function rectangleArea(width, height) {
  return width * height;
}

let area = rectangleArea(10, 20);
console.log("area is " + area);

//using arrow functions
const calculatedRectangleArea = (width, height) => {
  return width * height;
};

console.log(calculatedRectangleArea(5, 10));
