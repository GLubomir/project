"use strict";

let num = 20;


function showFirstMessage(text) {
	console.log(text);
	console.log(num);
}

showFirstMessage('Hello world');
console.log(num);


// console.log(calc(2, 5));
// function calc(a, b) {
// 	return (a + b);
// }



function ret(param) {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
	console.log('Hello');
};

logger();

const calc = (a, b) => {
	return a + b
};
