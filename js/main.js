//! task 1
// Создайте переменную num передайте в него число 123 используя циклы вывести пирамиду

// вывод:
// 1
// 12
// 123

// let num = 123;

// for (let i = 0; i <= num; i++) {
//   console.log(num);
// }

// task 2
// Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// let str = "";

// for (let i = 0; i <= 7; i++) {
//   str += "#";
//   console.log(str);
// }

// task 3
// Дан массив с объектами:
// [
//     {name: 'Jack', age: 15},
//     {name: 'Helen', age: 34},
//     {name: 'Tom', age: 20},
//     {name: 'Bob', age: 54},
//     {name: 'Jessica', age: 13}
// ], задача: реализовать рассылку сообщений типа: 'Hello,
// [Здесь должно быть имя клиента], the grand sale has begun,
// prices are reduced by 20%!', игнорировать клиентов, которым нет 18-ти лет

// let arr = [
//   { name: "Jack", age: 15 },
//   { name: "Helen", age: 34 },
//   { name: "Tom", age: 20 },
//   { name: "Bob", age: 54 },
//   { name: "Jessica", age: 13 },
// ];

// for (let i of arr) {
//   if (i.age >= 18) {
//     console.log(
//       `Hello, ${i.name}, the grand sale has begun,prices are reduced by 20%!`
//     );
//   }
// }

// task 4
// Дан массив: [1, 10, true, 'hello', 'JS', null, false, 0, {title: 'Samsung', price: 1000}],
// задача, отфильтровать массив, оставив только строки и числа

// let arr = [
//   1,
//   10,
//   true,
//   "hello",
//   "JS",
//   null,
//   false,
//   0,
//   { title: "Samsung", price: 1000 },
// ];

// for (let i of arr) {
//   if (typeof i === "number" || typeof i === "string") {
//     console.log(i);
//   }
// }

// task 5
// Дана строка: 'Hello, I\'m Jack. I\'m 25 years old and I Frontend developer!',
// вывести в консоль символы у которых четный индекс

// let str = "Hello, I'm Jack. I'm 25 years old and I Frontend developer!";

// let result = "";

// for (let i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     result += str[i];
//   }
// }
// console.log(result);

// task 6
// Дан многомерный массив состоящий из строк:
// let names = [
//   [
//     ["Helen", "Tom"],
//     ["Jack", "Peter"],
//   ],
//   [
//     ["Jessica", "Bob"],
//     ["Jimm", "John"],
//   ],
//   [
//     ["Alexa", "Jessy"],
//     ["David", "Paul"],
//   ],
// ];

// for (let i of names) {
//   for (let j of i) {
//     for (let z of j) {
//       if (z.length > 4) console.log(z);
//     }
//   }
// }

// , задача: вывести в консоль только те имена, длинна которых больше 4-х символов

//! task 7
// Проверьте все ли элементы в массиве number
// let arr = [1, "2", 3, 4, 5];
// //  --> true
// // let arr = [1, "2", "3", 4, 5];

// for (let i of arr) {
//   if (typeof i === "number") {
//     console.log(true);
//   }
// }

//! task 8
// найдите разницу в возрасте между самого старшего и самого младшего в семье
// дан массив с возрастами, нужно возвращать новый массив
// [возраст старшего,возраст младшего,разница]
// [12,74,44,28,59] --> [74,12,62]

// let arr = [12, 74, 44, 28, 59];

// let oldest = arr.sort((a, b) => b - a).shift();
// let yangest = arr.sort((a, b) => b - a).pop();

// console.log(oldest, yangest, oldest - yangest);

//! task 9
// Напишите цикл, который за 7 вызовов console.log выводит такой ромбик:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// ######
// #####
// ####
// ###
// ##
// #

// let str = "";

// for (let i = 0; i <= 7; i++) {
//   str += "#";
//   console.log(str);
// }

// let i = 7;

// let str1 = "";

// while (i < 1) {
//   str1 += "#";
//   console.log(str1);
//   i++;
// }

// task 10
// Вам дан целое число n и строку str и возвращает строку, повторяющуюся ровно n раз.

// let n = 3;
// let str = "hello";
// let result = "";
// // вывод:
// // "hellohellohello"

// for (let i = 0; i < n; i++) {
//   result += str;
// }
// console.log(result);

// task 11
// Вам дан целое число n и вывести следующий результат
// let n = 10;
// // 1-2-3-4-5-6-7-8-9-10

// let result = "";

// for (let i = 1; i <= n; i++) {
//   result += -i;
// }
// console.log(result);

// task 12
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for

// let arr = [];

// for (let i = 1; i <= 10; i++) {
//   arr += i;
// }
// console.log(arr);

// task 13
// Найдите самый длинный элемент строки и выведите в консоль
//? let str = "Hello my name is John";

//? console.log(
//?   str
//?     .split(" ")
//?     .sort((a, b) => b.length - a.length)
//?     .shift()
//? );

// // let str = "Hello my name is John";

// // for (let i of str) {
// //   console.log(i);
// // }

// task 14
// Так же найдите самый короткий элемент этого же массива

// let str = "Hello my name is John";

// console.log(
//   str
//     .split(" ")
//     .sort((a, b) => a.length - b.length)
//     .shift()
// );

// //? 2
// //? let str = "Hello my name is John";

// //? console.log(
// //?   str
// //?     .split(" ")
// //?     .sort((a, b) => b.length - a.length)
// //?     .pop()
// //? );
