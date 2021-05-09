
// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций.Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat.Если оно false - он
// переключает его в true, если true - переключает в false.Протестировать вместе с showMyDB.

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
// Если он это сделал - возвращать его к этому же вопросу.После того, как все жанры введены -
//     при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)" * /



'use strict';



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фидьмов вы уже посмотрели?', '');
        while (isNaN(personalMovieDB.count) || personalMovieDB.count == null || personalMovieDB.count == '' || personalMovieDB.count < 0) { personalMovieDB.count = +prompt('Сколько фидьмов вы уже посмотрели?', ''); }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', '');
            let b = +prompt('На сколько оцените его?', '');
            if (a == null || b == null || a === '' || b === '' || a.length > 50) {
                alert('Не верно');
                i--;
            } else {
                personalMovieDB.movies[a] = b;

            }
        }
    },
    writeYourGenres: function (genres) {
        for (let i = 1; i <= 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i}?`);

            if (a === '' || a == null) {
                alert('Нужно указать жанр');
                i--;
            } else {
                genres.push(a);
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');

        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');

        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');

        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function (hiden) {
        if (!hiden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};



personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres(personalMovieDB.genres);
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();

personalMovieDB.genres.forEach((item, i) => {
    console.log(`Любимый жанр #${i + 1} - это ${item}`);
});