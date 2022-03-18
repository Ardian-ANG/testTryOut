//  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])=> 7
// countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])) => 4
// countUniqueValues([])) => 0

function countUniqueValues(array) {
  //   let hasil = [];
  //   for (let i = 0; i < array.length; i++) {
  //     hasil = hasil.includes(array[i]) ? hasil : [...hasil, array[i]];
  //   }
  //   return hasil.length;
  const hasil = new Set(array);
  return hasil.length;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6]));
console.log(countUniqueValues([]));
