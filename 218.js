/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

// Код возьмите из предыдущего домашнего задания

const numberOfFilms = +prompt("How much films have you seen?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
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
alert("Внимание! Пустые ответы либо длиннее 50 символов не принимаются");
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

console.log(personalMovieDB.movies);
