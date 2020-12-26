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

const numberOfFilms = +prompt("how much films did you see?");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt("latest seen movie?", ""),
  b = prompt("what rating you got?", ""),
  c = prompt("latest seen movie?", ""),
  d = prompt("what rating you got?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
