"use strict";

if (4 == 9) {
	console.log('ok!');
} else {
	console.log('error');
}


// if (num < 49) {
// 	console.log('error');
// } else if (num > 100){
// 	console.log('Много')
// } else {
// 	console.log('ok!');
// }

// (num === 50) ? console.log('ok!') : console.log('error');


const num = 50;

switch (num) {
	case 49:
		console.log('Неверно');
		break;
	case 100:
		console.log('Неверно');
		break;
	case 51:
		console.log('В точку');
		break;
	default:
		console.log('Не в этот раз');
		break;
}