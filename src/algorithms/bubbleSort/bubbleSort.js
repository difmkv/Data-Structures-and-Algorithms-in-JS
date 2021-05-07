/**
 * BUBBLE SORT
 *
 * A simple, inefficient sorting algorithm used to sort lists.
 * It is generally one of the first algorithms taught in computer science
 * courses because it is a good algorithm to learn to build intuition
 * about sorting. While sorting is a simple concept, it is a basic
 * principle used in complex computer programs such as file search,
 * data compression, and path finding. Running time is an important
 * thing to consider when selecting a sorting algorithm since
 * efficiency is often thought of in terms of speed.
 *
 * Bubble sort has an average and worst-case running time of O(n^2),
 * so in most cases, a faster algorithm is more desirable.
 */

function bubbleSort(array) {
  var wall = array.length;

  while (wall >= 0) {
    for (let i = 0; i < wall; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
    wall--;
  }

  return array;
}

export default bubbleSort;
