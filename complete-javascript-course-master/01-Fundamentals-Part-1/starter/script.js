// // JavaScript Fundamentals - Part 1
// //Practice 1
// let country = "Germany";
// let continent = "Europe";
// let population = 83130000;

// // console.log(`${country} is located on the continent of ${continent}
// // and has a population of ${population} million inhabitants`);

// // Booleans Declared
// let isEligible = true;
// let hasDriversLicense = false;
// let scoredDriverTest = 93;

// console.log(typeof isEligible);
// console.log(typeof hasDriversLicense);
// console.log(typeof 23);
// console.log(typeof country);
// console.log(typeof scoredDriverTest);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1986;
// console.log(typeof year);

// console.log(typeof null);

// let, const, var

// let age = 21;
// age = 36;

// Non-mutational
// const mortgageRate = 3.19;
// mortgageRate = 2.19;

// const job = "Scientist";

// Basic Operators
const now = 2037;
const ageMurray = now - 1986;
const ageUser = now - 2019;
// console.log(ageMurray, ageUser);

// console.log(ageMurray * 2, ageMurray / 10, 2 ** 3);

// const firstName = "Murray";
// const lastName = "Milton";
// console.log(firstName + " " + lastName);

// console.log(typeof firstName);

// let x = 10 + 5;
// console.log(x);

// for (let x = 0; x < 5; x++) {
//   console.log("Number Count" + " " + x);
// }

// // Comparison Operators
// console.log(ageMurray > ageUser);
// console.log(ageUser >= 18);
// let marksHeight = 1.69;
// let marksWeight = 78;

// let johnsHeight = 1.95;
// let johnsWeight = 92;

// let marksBMI = marksWeight / marksHeight ** 2;
// let johnsBMI = johnsWeight / johnsHeight ** 2;
// console.log(
//   `Marks BMI higher than John's BMI : ${
//     marksBMI > johnsBMI
//   }, John's BMI Higher than Marks: ${johnsBMI > marksBMI}`
// );

// Strings and Template Strings

// const firstName = "Murray";
// const job = "Computer Scientist";
// const birthYear = 1986;
// const currentAge = 2023 - birthYear;

// const murray = `I'm ${firstName} a ${currentAge} years old ${job} `;

// console.log(murray);

// const age = 15;
// // const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log("Sarah can start driving license exam 🚘🚘🚘🚘");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Driver license exam not permitted⛔!
//   You have ${yearsLeft} years left until exam can be permitted.`);
// }

// let century;
// const birthYear = 1991;
// if (birthYear <= 2000) {
//   century = 20;
//   console.log(`You where born in the ${century}th century`);
// } else {
//   century = 21;
//   console.log(`You where born in the ${century}st century`);
// }

// let marksHeight = 1.69;
// let marksWeight = 78;

// let johnsHeight = 1.95;
// let johnsWeight = 92;

// let marksBMI = marksWeight / marksHeight ** 2;
// let johnsBMI = johnsWeight / johnsHeight ** 2;

// if (marksBMI > johnsBMI) {
//   console.log(
//     `Mark's BMI of (${marksBMI}) is higher than Johns BMI of (${johnsBMI})`
//   );
// } else {
//   console.log(
//     `John's BMI of (${johnsBMI}) is higher than Mark's BMI of (${marksBMI})`
//   );
// }

// console.log(typeof null);
// console.log(null * 8);

// Type Conversion - Convert in between types
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 188);

// 5 Falsy values: 0, '', undefined, null , NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// let height;
// if(height){
//     console.log('Yay!!! Height is defined')
// }else{
//     console.log('Height is UNDEFINED');
// }

// const age = 18;
// if (age === 18) console.log("Welcome to adulthood");

// const favoriteNum = Number(prompt("What is your favorite number?"));

// // if (favoriteNum == 23) { // Type Coercion example
// //   console.log("Cool 23 is a great number");
// // }

// if (favoriteNum === 23) {
//   console.log("Great Number!!!");
// } else if (favoriteNum === 7) {
//   console.log(" 7 is also a great number!");
// } else {
//   console.log("Number not 23 or 7");
// }

// if (favoriteNum !== 23) console.log("Why not 23?");

//Basic Boolean Logic: The AND, OR && NOT Operators

// let hasDriversLicense = false;
// let hasGoodVision = true;

// if (!hasDriversLicense || !hasGoodVision) {
//   console.log("Prerequisites not met 🚫");
// } else if (hasDriversLicense && hasGoodVision) {
//   console.log("Engine started: Vroom Vroom Vroom 🚗");
// } else {
//   console.log("Not valid data");
// }

// Coding Challenge if/else statements

// let teamDolphinsScore = (97 + 112 + 101) / 3;
// let teamKoalasScore = (109 + 95 + 106) / 3;

// if (teamDolphinsScore > teamKoalasScore && teamDolphinsScore >= 100) {
//   console.log(`Team Dolphin Wins with a Score of 🐬 ${teamDolphinsScore}`);
// } else if (teamKoalasScore > teamDolphinsScore && teamKoalasScore >= 100) {
//   console.log(`Team Koalas 🐨 Win with a Score of ${teamKoalasScore}`);
// } else if (
//   teamDolphinsScore &&
//   teamKoalasScore >= 100 &&
//   teamDolphinsScore === teamKoalasScore
// ) {
//   console.log(`There is a draw Dolphins🐬${teamDolphinsScore}
//      Koalas🐨 ${teamKoalasScore}`);
// }
