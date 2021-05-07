/**
 * MERGE SORT
 *
 * An efficient sorting algorithm that uses a divide-and-conquer
 * approach to order elements in an array.
 *
 * Running time is an important thing to consider
 * when selecting a sorting algorithm since efficiency
 * is often thought of in terms of speed. Mergesort runs
 * in a guaranteed O(n log n) time, which is
 * significantly faster than the average and worst-case
 * running times of several other sorting algorithms.
 */

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

export default mergeSort;
