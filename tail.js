
//returns a new array with all elements of original array except first element
const tail = function(array) {
  let arrayTail = [];
  for (let i = 1; i < array.length; i++) {
    arrayTail.push(array[i]);
  }
  return arrayTail;
};

module.exports = tail;