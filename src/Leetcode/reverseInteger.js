/**
 * Reverse Integer
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Assume we are dealing with an environment that could only store
 * integers within the 32-bit signed integer range: [−2^31,  2^31 − 1].
 * For the purpose of this problem, assume that your function returns 0
 * when the reversed integer overflows.
 *
 * Input: x = 123 Output: 321
 * Input: x = -123 Output: -321
 *
 * @param {number} x
 * @return {number}
 */

export default function reverseInteger(x) {
  const limit = 2147483648;
  if (x > limit) return 0;

  const isNegative = x < 0 && "-";
  const arr = Array.from(x.toString()).map(Number);
  const num = parseInt(arr.reverse().join(""));

  return parseInt(isNegative + num);
}
