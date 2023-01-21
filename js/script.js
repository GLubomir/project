"use strict";

function learJS(lang, callback) {
  console.log(`Я учу ${lang}`);
  callback();
}

function done() {
  console.log('Я прошел этот урок');
  }

learJS('JavaScript', done);