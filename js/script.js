
// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat.Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}".Каждый ответ записывается в массив данных genres


'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фидьмов вы уже посмотрели?', '');
    while (isNaN(numberOfFilms) || numberOfFilms == null || numberOfFilms == '' || numberOfFilms < 0) {
        numberOfFilms = +prompt('Сколько фидьмов вы уже посмотрели?', '');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', '');
        let b = +prompt('На сколько оцените его?', '');
        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function writeYourGenres(genres) {
    for (let i = 1; i <= 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}?`);
        if (a !== null && a !== '') {
            genres.push(a);
        }
    }
}

writeYourGenres(personalMovieDB.genres);

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');

    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');

    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');

    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hiden) {
    if (!hiden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
