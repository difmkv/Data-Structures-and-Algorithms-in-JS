/**
 * Search Insert Position
 *
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found. If not, return the
 * index where it would be if it were inserted in order.
 *
 * Input: nums = [1,3,5,6], target = 5 Output: 2
 * Input: nums = [1,3,5,6], target = 2 Output: 1
 * Input: nums = [1,3,5,6], target = 7 Output: 4
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

export default function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle;

  while (start < end) {
    middle = Math.floor((end + start) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return nums[end] < target ? end + 1 : end;
}
