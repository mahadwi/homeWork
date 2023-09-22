// fungsi menghitung luas persegi
const calculateSquareArea = (side) => {
  return side * side;
}

// fungsi menghitung keliling persegi
const calculateSquarePerimeter = (side) => {
  return 4 * side;
}

// fungsi menghitung luas persegi panjang
const calculateRectangleArea = (length, width) => {
  return length * width;
}

// fungsi menghitung keliling persegi panjang
const calculateRectanglePerimeter = (length, width) => {
  return 2 * (length + width);
}

module.exports = {
  calculateSquareArea,
  calculateSquarePerimeter,
  calculateRectangleArea,
  calculateRectanglePerimeter
}