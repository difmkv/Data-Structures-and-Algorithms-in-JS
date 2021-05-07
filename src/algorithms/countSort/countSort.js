/**
 * COUNT SORT
 *
 * Can be done in O(k+n) because it does not compare values.
 * It works only for numbers and given a certain range.
 * Instead of sorting by swapping elements, this count
 * works by counting occurrences of each element in the array.
 * Once occurrences of each element are counted, the new array
 * can be created using those occurrences. This sorts the data
 * without having to swap elements.
 *
 * Use count sort when you’re sorting integers with a limited range.
 * This will be the fastest sort for this case.
 *
 * Time Complexity: O(k+n)
 * Space Complexity: O(k)
 */

function countSort(array) {
  var hash = {},
    countArr = [];

  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 1;
    } else {
      hash[array[i]]++;
    }
  }

  for (let key in hash) {
    countArr = countArr.concat(Array(hash[key]).fill(parseInt(key)));
  }

  return countArr;
}

export default countSort;
