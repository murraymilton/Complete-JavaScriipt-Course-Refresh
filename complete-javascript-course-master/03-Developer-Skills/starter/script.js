// Remember, we're gonna use strict mode in all scripts now!
("use strict");

// const x = "23";
// if (x === "23") console.log("23");

const printForecast = function (arr) {
  let day = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]}°C in ${(day += 1)} days...`);
  }
};

console.log(printForecast([17, 21, 23]));
