/**
 * Median of Two Sorted Arrays
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 * Follow up: The overall run time complexity should be O(log (m+n)).
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 *
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 *
 * Input: nums1 = [0,0], nums2 = [0,0]
 * Output: 0.00000
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

export default function findMedianSortedArrays(nums1, nums2) {
  let mergedArray = _mergeSort(nums1, nums2);
  let midIdx = Math.floor(mergedArray.length / 2);

  if (mergedArray.length % 2 === 1) {
    return mergedArray[midIdx];
  } else {
    return (mergedArray[midIdx - 1] + mergedArray[midIdx]) / 2;
  }
}

function _mergeSort(nums1, nums2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      mergedArray.push(nums2[j]);
      j++;
    }
  }

  return [...mergedArray, ...nums1.slice(i), ...nums2.slice(j)];
}
