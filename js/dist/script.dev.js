/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var movieDB = {
    movies: ["Логан", "Лига справедливости", "Ла-ла лэнд", "Одержимость", "Скотт Пилигрим против..."]
  };
  var adBlock = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');

  var deleteAdv = function deleteAdv(arr) {
    arr.forEach(function (item) {
      item.remove();
    });
  };

  var makeChanges = function makeChanges(text, fon) {
    text.textContent = 'драма';
    fon.style.backgroundImage = 'url("img/bg.jpg")';
  };

  var sortArr = function sortArr(arr) {
    arr.sort();
  };

  addForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var newFilm = addInput.value;
    var favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = "".concat(newFilm.substring(0, 22), "...");
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
  });

  function createMovieList(films, parent) {
    parent.innerHTML = '';
    films.forEach(function (film, i) {
      parent.innerHTML += "\n               <li class=\"promo__interactive-item\">".concat(i + 1, ". ").concat(film, "\n                     <div class=\"delete\"></div>\n               </li>");
    });
    document.querySelectorAll('.delete').forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovieList(movieDB.movies, movieList);
      });
    });
  }

  deleteAdv(adBlock);
  sortArr(movieDB.movies);
  makeChanges(genre, poster);
  createMovieList(movieDB.movies, movieList);
});