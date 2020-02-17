const { sortValues } = require("./assets/sort-values.json"); //1000000 values

/**
 * Binary search -> 547003
 */
function binarySearch(vals, num, left, right) {
  if (right >= left) {
    const mid = Math.floor(left + (right - left) / 2);
    console.log(`mid ${mid}`);
    if (vals[mid] === num) return vals[mid];
    else if (vals[mid] > num) return binarySearch(vals, num, left, mid - 1);
    else return binarySearch(vals, num, mid + 1, right);
  } else {
    return -1;
  }
}

console.time("binary-search-sort-values");
console.log(binarySearch(sortValues, 3, 0, sortValues.length - 1));
console.timeEnd("binary-search-sort-values");
