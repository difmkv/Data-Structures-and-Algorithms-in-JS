/**
 * Remove Element
 *
 * Given an array nums and a value val, remove all instances
 * of that value in-place and return the new length.
 *
 * Do not allocate extra space for another array, you must do this
 * by modifying the input array in-place with O(1) extra memory.
 *
 * The order of elements can be changed. It doesn't matter what
 * you leave beyond the new length.
 *
 * Input: nums = [3,2,2,3], val = 3 Output: 2, nums = [2,2]
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2 Output: 5, nums = [0,1,4,0,3]
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

export default function removeElement(nums, val) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] !== val) {
      left++;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    }
  }

  return left;
}
