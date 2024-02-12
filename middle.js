
//implement 'middle' function to take in 1 array and return middle-most element(s) as array

const middle = function(array) {
  let midElement = [];
  let midpoint = array.length / 2;


  if (array.length < 3) {
    return midElement;
  }

  if (Number.isInteger(midpoint)) {
    midElement.push(array[midpoint - 1]);
    midElement.push(array[midpoint]);
    return midElement;
  } else {
    midElement.push(array[Math.floor(midpoint)]);
    return midElement;
  }
};

module.exports = middle;