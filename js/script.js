"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));

console.dir([1, 2, 3])

const solider = {
	health: 400,
	armor: 100,
	sayHello: function () {
		console.log('hello');
	  }

};

const jonh = Object.create(solider);


// const jonh = {
// 	health: 100
// };



// // jonh.__proto__ = solider;

// Object.setPrototypeOf(jonh, solider)
// // console.log(jonh.armor);
jonh.sayHello();
