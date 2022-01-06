// ---------------------------one-------------------------
// let arr = [1, 2, 2, 3, 3, 5, 4, 1, 8, 9];
// let data = [];
// arr.forEach((a) => {
//   if (!data.includes(a)) {
//     data.push(a);
//   }
// });
// console.log(data);

// ----------------two----------------------
// document.getElementById("date").innerHTML = Date();
// console.log(Date());

// -----------------------------three--------------------------
// let firstNumber = prompt(`Enter first Number
// *Note : The division first number is biggest, Ex(4/2)`);
// let secondNumber = prompt("Enter second number");

// const multipilication = firstNumber * secondNumber;
// const division = firstNumber / secondNumber;

// console.log(
//   `Multipilication value of ${firstNumber} x ${secondNumber} : ${multipilication} `
// );
// console.log(
//   `Division value of ${firstNumber} / ${secondNumber} : ${division} `
// );
// ---------------------------four-------------------------

// console.log(document.URL);

// ----------------------------five--------------------------
// let givenNumber = Number(prompt("Enter a number :"));
// let standerdNumber = 13;
// var differanceNumber =
//   givenNumber > standerdNumber
//     ? givenNumber - standerdNumber
//     : standerdNumber - givenNumber;
// if (differanceNumber > standerdNumber) {
//   var double = differanceNumber * 2;
//   console.log(double);
// } else {
//   console.log(differanceNumber);
// }
// -----------------------six---------------------------------
// let firstNumber = Number(prompt("Enter first number"));
// let secondNumber = Number(prompt("Enter second number:"));

// if (firstNumber === secondNumber) {
//   let sum = firstNumber + secondNumber;
//   const triple = sum ** 3;
//   console.log(`Sum of given two number is : ${sum}`);
//   console.log(
//     `The given two number is same the triple of sum is(${sum} x ${sum} x ${sum} :) ${triple}`
//   );
// } else {
//   let sumTwo = firstNumber + secondNumber;
//   console.log(`Sum of given two number is :${sumTwo}`);
// }
// ----------------------seven--------------------------------------
// let arrOne = [1, 2, 3, 4, 6, 7, 8, 9];
// let arrTwo = [2, 3, 4, 5, 8, 9];
// let arrThird = [];

// for (let i = 0; i <= arrOne.length; i++) {
//   for (let j = 0; j <= arrTwo.length; i++) {
//     if (i == j) {
//       arrThird.push(i);
//     }
//   }
// }
// console.log(arrThird);
// --------------------------eight----------------------------------------
// var arr = [];
// for (i = 1; i <= 150; i++) {
//   if (i % 6 == 0 && i % 9 != 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);
// -----------------------nine--------------------------------
// let inputString = prompt("enter name");
// let remove = inputString.split("");
// remove.splice(
//   Number(
//     prompt(`Enter specified number to remove between ${inputString.length}`)
//   ),
//   1
// );
// let rem = remove.join("");
// console.log(rem);

// -----------------------------------------------------------------
// let inputString = prompt("enter name");
// var remove = [];
// for (i = 0; i < inputString.length; i++) {
//   remove.push(inputString[i]);
// }
// remove.splice(
//   Number(
//     prompt(`Enter specified number to remove between ${inputString.length}`)
//   ),
//   1
// );
// let rem = remove.join("");
// console.log(rem);

// ------------------------------------ten----------------------------------
// var str = prompt("Enter name");
// var spli = str.split("");
// var splio = str.split("");
// spli[0] = spli[spli.length - 1];
// spli[spli.length - 1] = splio[0];
// // spli[spli.length - 1] = str.charAt(0);

// var joi = spli.join("");
// console.log(joi);
// --------------------seven-----------------------------------------------------------

// var firstArray = [0, 2, 3, 5, 6, 1, 7, 89];
// var secondArray = [2, 3, 4, 5, 6, 7, 8, 91, 1];

// var emptyArray = [];
// for (var i = 0; i < firstArray.length; i++) {
//   for (var j = 0; j < secondArray.length; j++) {
//     if (firstArray[i] == secondArray[j]) {
//       emptyArray.push(secondArray[j]);
//     }
//   }
// }
// console.log(emptyArray);

