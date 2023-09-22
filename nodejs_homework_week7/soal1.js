const formula = require('./formula.js');

const squareSide = 5;
const rectangleLength = 10;
const rectangleWidth = 5;

console.log(`Luas persegi dengan sisi ${squareSide} adalah: ${formula.calculateSquareArea(squareSide)}`);
console.log(`Keliling persegi dengan sisi ${squareSide} adalah: ${formula.calculateSquarePerimeter(squareSide)}`);
console.log(`Luas persegi panjang dengan panjang ${rectangleLength} dan lebar ${rectangleWidth} adalah: ${formula.calculateRectangleArea(rectangleLength, rectangleWidth)}`);
console.log(`Keliling persegi panjang dengan panjang ${rectangleLength} dan lebar ${rectangleWidth} adalah: ${formula.calculateRectanglePerimeter(rectangleLength, rectangleWidth)}`);