"use strict"; // Enables secure writing of JavaScript Code

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive 🚘");

//Reserved keywords
// const interface = "Audio";
// const if = 23;

// Functions
/*
function logger() {
  console.log("Logging data file");
}

//invoking, calling or running the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples, and ${oranges} oranges`;
  return juice;
}

const juice = fruitProcessor(3, 5); //Passing the arguments into the parameters
console.log(juice);
// let newJuice = fruitProcessor(3, 5);
// console.log(newJuice);
// console.log(fruitProcessor(4, 5));
*/

// function declaration
/*
function calAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calAge1(1991);

//Function Expression // Anonymous Function function without a name

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1992);
console.log(age2, age1);
*/

// Arrow Functions

/*
const calAge3 = (birthYear) => 2037 - birthYear;
const newAge = calAge3(1991);
console.log(newAge);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Murray"));




*/

// function cutFruitPieces(fruit, pieces) {
//   return fruit * pieces;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples, 2);
//   const orangePieces = cutFruitPieces(oranges, 4);
//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces. `;
//   return juice;
// }

// console.log(fruitProcessor(3, 7));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement <= 0) {
//     return `${firstName} has already retired`;
//   } else {
//     return `${firstName} has ${retirement} years until retirement starts`;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Thomas"));
// console.log(yearsUntilRetirement(1965, "Tommy"));

//Coding Challenge #1

const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
  const scoreAverage = (scoreOne + scoreTwo + scoreThree) / 3;
  return scoreAverage;
};

function checkWinner(teamDolphinsAverage, teamKoalasAverage) {
  teamDolphinsAverage = calcAverage(85, 54, 41);
  teamKoalasAverage = calcAverage(23, 34, 27);

  if (
    teamDolphinsAverage > teamKoalasAverage &&
    teamDolphinsAverage > teamKoalasAverage * 2
  ) {
    console.log(
      `Team Dolphins🐬 win with an average score of ${teamDolphinsAverage} to team Koalas ${teamKoalasAverage}`
    );
  } else if (
    teamKoalasAverage > teamDolphinsAverage &&
    teamKoalasAverage > teamDolphinsAverage * 2
  ) {
    console.log(
      `Team Koala 🐨 wins with an average score of ${teamKoalasAverage} to Team Dolphins ${teamDolphinsAverage}`
    );
  } else {
    console.log("No winners to announce!☹️");
  }
}

checkWinner();
