"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Cколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Cколько фильмов вы уже посмотрели?", "");
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilm() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Один из последних просмотренных фильмов?", "");
    let b = prompt("На сколько оцениваете это фильм?", "");
    if (a != null && a != "" && b != null && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}
// rememberMyFilm();

function detecPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }  
  }

  // detecPersonalLevel( )

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(elem) {
  for (let i = 0; i < 3; i++){
    elem.genres.push(prompt(`Ваш любимый жанр под номером ${i + 1}`));
  }
}
writeYourGenres(personalMovieDB);