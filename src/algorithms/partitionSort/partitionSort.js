/**
 * LOMUTO PARTITION
 *
 * Quicksort is a fast sorting algorithm that takes
 * a divide-and-conquer approach to sorting lists.
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

function partitionSort(arr, lo, hi) {
  if (lo === undefined) lo = 0;
  if (hi === undefined) hi = arr.length - 1;

  if (lo < hi) {
    var p = partition(arr, lo, hi);

    partitionSort(arr, lo, p - 1);
    partitionSort(arr, p + 1, hi);
  }

  if (hi - lo === arr.length - 1) return arr;
}

function partition(arr, lo, hi) {
  var pivot = arr[hi];
  var pivotLoc = lo;
  for (var i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      [arr[pivotLoc], arr[i]] = [arr[i], arr[pivotLoc]];
      pivotLoc++;
    }
  }
  [arr[pivotLoc], arr[hi]] = [arr[hi], arr[pivotLoc]];
  return pivotLoc;
}

export default partitionSort;
