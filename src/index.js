
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (Array.isArray(matrix)) {
    return matrix.reduce((acc, val, index) => (index % 2 === 0) ? acc.concat(val) : acc.concat(val.reverse()), []);  
    
  }
  return [];
}
