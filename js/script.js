"use strict";

const arr = [2, 3, 4, 5, 6];

// for (let i of arr){
//   console.log(i);
// }
function compareNum(a, b) {
  return a - b;
  }
// arr.forEach(function (item, index, arr) {
//   console.log(`${index}: ${item} внутри массива ${arr}`);
// });

const str = prompt('', '');
const products = str.split(", ");
products.sort();
console.log(products.join('; '));