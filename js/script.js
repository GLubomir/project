"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let i = 0;

while (i < 2) {
	i++;
	let a = prompt('Один из последних просмотренных фильмов?', '');
	let b = prompt('На сколько оцените его?', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;	
		console.log('done');
	} else {
		console.log('error');
		i--;
	}	
}
// for (let i = 0; i < 2; i++){
	
// }

if (personalMovieDB.count < 10) {
	console.log('Посмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классический зритель');
} else if (personalMovieDB >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}