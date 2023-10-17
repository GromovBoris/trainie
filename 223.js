/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("How much films have you seen?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How much films have you seen?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

function writeYourGenres() {
  for (let j = 0; j < 3; j++) {
    personalMovieDB.genres[j] = prompt(
      `Ваш любимый жанр под номером ${j + 1}`,
      ""
    );
  }
}

writeYourGenres();

// function showMyDB() {
//   if (!personalMovieDB.privat) {
//     // alert(personalMovieDB.movies);
//     console.log(personalMovieDB);
//   }
// }

// showMyDB();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function rememberMyFilms() {
  for (let i = 0; i < numberOfFilms; i++) {
    let key = prompt("One of your last films?", "");
    let value = prompt("Hoy did you rate it?", "");

    if (
      value != null &&
      key != null &&
      key.length != "" &&
      value != "" &&
      key.length < 50
    ) {
      personalMovieDB.movies[key] = value;
    } else {
      alert("Ты шо, бродяга, заплутал? давай по новой");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  switch (true) {
    case personalMovieDB.count < 10:
      console.log("Просмотрено довольно мало фильмов");
      break;
    case personalMovieDB.count >= 10 && personalMovieDB.count <= 30:
      console.log("Вы классический зритель");
      break;
    case personalMovieDB.count > 30:
      console.log("Вы киноман");
      break;
    default:
      console.log("Произошла ошибка");
  }
}

detectPersonalLevel();
