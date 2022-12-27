"use strict";

const arr = [11, 22, 34, 34, 5, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
	return a - b;
}


// arr[99] = 0;

// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (elem, i, arr) {
// 	console.log(`${i}: ${elem} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++){
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }
