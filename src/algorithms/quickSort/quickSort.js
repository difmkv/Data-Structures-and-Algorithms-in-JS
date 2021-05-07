/**
 * QUICK SORT
 *
 * A fast sorting algorithm that takes a divide-and-conquer
 * approach to sorting lists.
 *
 * While sorting is a simple concept, it is a basic
 * principle used in complex programs such as file
 * search, data compression, and pathfinding.
 * Running time is an important thing to consider
 * when selecting a sorting algorithm since efficiency
 * is often thought of in terms of speed. Quicksort has
 * a very slow worst-case running time, but a fast
 * average and best-case running time.
 */

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  let left = [],
    right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

export default quickSort;
