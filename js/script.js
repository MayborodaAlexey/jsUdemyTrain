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

// let numberOfFilms;
// function start() {
//   numberOfFilms = +prompt("how much films did you see?", "");
//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("how much films did you see?", "");
//   }
// }
// start();

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

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("latest seen movie?", ""),
//       b = prompt("what rating you got?", "");
//     if (a != null && b != null && (a != ``) & (b != ``) && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log("done");
//     } else {
//       console.log("err");
//       i--;
//     }
//   }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//   if (personalMovieDB.count < 10) {
//     console.log("not a cimena lover");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("classic watcher");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("cinemaMan");
//   } else {
//     console.log("error");
//   }
// }
// detectPersonalLevel();

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }
// showMyDB(personalMovieDB.private);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     const genre = prompt("your fawourite genre is number ${i}");
//     personalMovieDB.genres[i - 1] = genre;
//   }
// }

// writeYourGenres();

// let a = 5,
//   b = a;
// b = b + 5;
// console.log(b);

// const obj = {
//   a: 5,
//   b: 1,
// };
// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

//копирование обьекта
// function copy(mainObj) {
//   let objCopy = {};
//   let key;
//   for (key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }
// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4,
//   },
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.b = 70;
// newNumbers.c.x = 14;
// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   e: 20,
// };

// console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);
// clone.d = 20;
// // console.log(add);
// // console.log(clone);

// const oldArr = ["a", "b", "c"];
// const newArr = oldArr.slice();
// newArr[0] = "test";
// console.log(newArr);
// console.log(oldArr);
// //object assign (1 обьект тот в который хотим поместить , 2 то что мы хотим поместить .{}вставить что то в пустой обьект
// //slice() метод который копирует массив
// //spread оператор разбил массив на отдельные значения
// const video = ["youtube", "vimeo", "pornhub"],
//   blogs = ["wp", "shopify", "react"],
//   internet = [...video, ...blogs, "facebook", "instagram"];
// console.log(internet);

// //передачва обьектов массива в функцию
// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const newAarray = [...array, "lol"]; //как скопировать массив
// console.log(newAarray);

// const q = {
//   one: 1,
//   two: 2,
// };
// const newObj = { ...q };
// console.log(newObj);
//proto

// let str = "some";
// let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);
// console.dir([1, 2, 3]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   brain: 300,
// };
// const john = Object.create(soldier); //наследовать прототип soldier , чтобы брать от туда свойства

// // const john = {
// //   health: 200,
// // };
// // john.__proto__ = soldier; //старый метод

// // Object.setPrototypeOf(john, soldier); // утсановить прототип
// console.log(john.brain);
// console.log(typeof String(null));
// console.log(typeof (5 + ""));
// //при сложении со строкой будет строка
// const num = 5;
// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + "px";
// console.log(fontSize);
// //to Number
// console.log(typeof Number("4")); //number
// console.log(typeof +"5"); //number
// console.log(typeof parseInt("15px", 10)); //number

//to boolean

//null=false

// 0,"",null,undefined,NaN;//все это будет fasle

// let switcher = null;
// if (switcher) {
//   console.log("working...");
// }
// switcher = 1;
// if (switcher) {
//   console.log("working...");
// }
// console.log(typeof !!"4"); //boolean

//задачи на собеседования
// let x = 5;
// alert(x++);
//5 . если сделать ++5 то будет 6
// []+false-null+true;

// console.log([] + false); //false //при складывании строку с другим типом данных то мы получаем строку
// console.log([] + false - null); //NaN (потому что [] + false - string, string-null = NaN)
// console.log([] + false - null + true); //NaN
// console.log(String - null);

// let y = 1;
// let x = (y = 2);
// console.log(x);
// //2

// console.log([] + 1 + 2);
//12
// console.log("1"[0]);
//1
// console.log(2 && 1 && null && 0 && undefined);
//null && (и) останавливается на false и возвращает его (null-false)
// || (или) останавливается на правде
// !!(a&&b) (a&&b)
// console.log(!!(1 && 2) === (1 && 2));
//false !!превращает выражение в boolean
// console.log(null || (2 && 3) || 4);
//3 Сначала выполняется && потому что у него больший приоритет . || возвращает true .(2 && 3) вернет последнее значение -3. || или запинаеться на первой правде и возвращает его
// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b);
// //false
// alert(+"Infinity");
// //infinity
// console.log("ёжик" > "яблоко");
//true При таких сравнениях сравниваються первые уквы , вторые итд .
// console.log(0 || "" || 2 || undefined || true || false);
//2
