/**
 * INSERTION SORT
 *
 * Insertion sort is a sorting algorithm that builds a final
 * sorted array (sometimes called a list) one element at a time.
 *
 * While sorting is a simple concept, it is a basic principle
 * used in complex computer programs such as file search,
 * data compression, and path finding.
 *
 * Running time is an important thing to consider when
 * selecting a sorting algorithm since efficiency is often
 * thought of in terms of speed. Insertion sort has an
 * average and worst-case running time of O(n^2), so in
 * most cases, a faster algorithm is more desirable.
 */

function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    let value = array[i];
    for (var j = i - 1; j > -1 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = value;
  }
  return array;
}

export default insertionSort;
