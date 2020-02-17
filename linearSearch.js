const { randomValues } = require("./assets/random-values.json"); //631593 values
const { sortValues } = require("./assets/sort-values.json"); //1000000 values

/**
 * Linear search -> 547003
 */
function linearSearch(values, number = 547003) {
  for (let index = 0; index < values.length; index++) {
    if (values[index] === number) {
      return values[index];
    }
  }
  return -1;
}

console.time("linear-search-random-values");
console.log(linearSearch(randomValues));
console.timeEnd("linear-search-random-values");

console.time("linear-search-sort-values");
console.log(linearSearch(sortValues));
console.timeEnd("linear-search-sort-values");
