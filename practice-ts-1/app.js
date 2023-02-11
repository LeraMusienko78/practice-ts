"use strict";
console.log("Hello");
let switchers = true;
while (switchers === true) {
    let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    while (numberOfFilms === "" || numberOfFilms === null) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
    }
    alert(numberOfFilms);
    let movieTitle = prompt("Один из последних просмотренных фильмов?");
    while (movieTitle === "" || movieTitle === null) {
        movieTitle = prompt("Один из последних просмотренных фильмов?");
    }
    if (movieTitle.length < 2) {
        alert("К сожалению такого не знаю...");
    }
    else {
        alert(`${movieTitle} - хороший фильм`);
        console.log(`${movieTitle} - хороший фильм`);
    }
    let rating = prompt("На сколько оцените его?");
    while (rating === "" || rating === null) {
        rating = prompt("Один из последних просмотренных фильмов?");
    }
    alert(rating);
    console.log("[РЕЙТИНГ]", rating);
    let actor = prompt("Твой любимый актер ?");
    while (actor === "" || actor === null) {
        actor = prompt("Твой любимый актер ?");
    }
    alert(actor);
    console.log("[АКТЕР]", actor);
    let actress = prompt("Твоя любимая актриса ?");
    while (actress === "" || actress === null) {
        actress = prompt("Твой любимый актер ?");
    }
    alert(actress);
    console.log("[АКТРИСА]", actress);
    const personalMovieDB = {
        count: numberOfFilms,
        movies: {
            movieTitle,
            rating
        },
        actors: {
            actor,
            actress
        },
        genres: ["комедия,триллер"],
        privat: false
    };
    let status;
    if (numberOfFilms > 0 || numberOfFilms < 10) {
        status = "Просмотрено довольно мало фильмов";
        alert(status);
        console.log(status);
    }
    else if (numberOfFilms >= 10 || numberOfFilms < 30) {
        status = "Вы классический зритель";
        alert(status);
        console.log(status);
    }
    else if (numberOfFilms >= 30 || numberOfFilms < 100) {
        status = "Вы киноман !";
        alert(status);
        console.log(status);
    }
    else {
        status = "Вы , наверное сами снимаете фильмы";
    }
    console.log(personalMovieDB);
    break;
}
