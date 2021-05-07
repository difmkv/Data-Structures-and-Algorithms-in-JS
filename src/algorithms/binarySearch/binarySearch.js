/**
 * BINARY SEARCH
 *
 * A searching algorithm that works on sorted data.
 * Unlike the linear search algorithm, in which every element
 * of the array is checked, binary searches can check the
 * middle value to see whether the desired value is greater
 * or smaller than it. If the desired value is smaller,
 * this algorithm can search through the smaller parts,
 * or it can search through the bigger parts if the
 * desired value is bigger.
 */

function binarySearch(array, n) {
  var lowIndex = 0,
    highIndex = array.length - 1,
    midIndex;

  while (lowIndex <= highIndex) {
    midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (array[midIndex] === n) {
      return midIndex;
    } else if (array[midIndex] < n) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }

  return -1;
}

export default binarySearch;
