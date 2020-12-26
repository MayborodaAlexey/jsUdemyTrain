"use strict";
// const result = confirm("are you here");
// console.log(result);
// const answer = +prompt("вам есть 18?", "18");
// console.log(answer + 5);
// const answers = [];
// answers[0] = prompt("what is your name", "");
// answers[1] = prompt("what is your surname", "");
// answers[2] = prompt("what is your age", "");

// document.write(answers);
// console.log(typeof answers);

//interpolations
// const category = "toys";
// console.log("https://someurl.com/" + category + "/" + "5");
// console.log(`https://someurl.com/${category}/5`);
// const user = "Ivan";
// alert(`hi,${user}`);

// operators
// console.log(4 + +"5");

// let test = 5 * 5;
// let incr = 10,
//   decr = 10;

// // incr++;
// // decr--;

// console.log(++incr + test);
// console.log(--decr);

// console.log(2 * 4 === 8);

// const isChecked = false,
//   isClose = false;

// console.log(isChecked || !isClose);

// const numberOfFilms = +prompt("how much films did you see?");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// const a = prompt("latest seen movie?", ""),
//   b = prompt("what rating you got?", ""),
//   c = prompt("latest seen movie?", ""),
//   d = prompt("what rating you got?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB, numberOfFilms);

// const numberOfFilms = prompt("how much films did you see?");
// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false,
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt("latest seen movie?", ""),
//     b = prompt("what rating you got?", "");
//   if (a != null && b != null && (a != ``) & (b != ``) && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("err");
//     i--;
//   }
// }

// if (personalMovieDB.count < 10) {
//   console.log("not a cimena lover");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//   console.log("classic watcher");
// } else if (personalMovieDB.count >= 30) {
//   console.log("cinemaMan");
// } else {
//   console.log("error");
// }
// console.log(personalMovieDB);

// function showFirstMessage() {
//   console.log("hello world");
// }
// showFirstMessage();

// function calc(a, b) {
//   return a + b;
// }
// console.log(calc(4, 3));

// function ret() {
//   let num = 50;
//   return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// let logger = function () {
//   console.log("hwllo" + " " + anotherNum);
// };
// logger();

// const calc = (a, b) => a + b;
// console.log(calc(5, 3));

// const str = "teSt";
// // const arr = [1, 2, 4];
// // console.log(arr.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// let fruit = "Some fruit";
// console.log(fruit.indexOf("it"));

// const logg = "hello world fuck";
// console.log(logg.slice(12, 17));
// console.log(logg.substring(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("how much films did you see?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("how much films did you see?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("latest seen movie?", ""),
    b = prompt("what rating you got?", "");
  if (a != null && b != null && (a != ``) & (b != ``) && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("err");
    i--;
  }
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("latest seen movie?", ""),
      b = prompt("what rating you got?", "");
    if (a != null && b != null && (a != ``) & (b != ``) && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("err");
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("not a cimena lover");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("classic watcher");
  } else if (personalMovieDB.count >= 30) {
    console.log("cinemaMan");
  } else {
    console.log("error");
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt("your fawourite genre is number ${i}");
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();
