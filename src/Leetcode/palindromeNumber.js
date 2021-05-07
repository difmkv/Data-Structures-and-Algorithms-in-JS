/**
 * Palindrome Number
 *
 * Determine whether an integer is a palindrome. An integer
 * is a palindrome when it reads the same backward as forward.
 *
 * Input: x = 121 Output: true
 * Input: x = -121 Output: false
 *
 * pop operation
 * pop = x % 10;
 * x = (x / 10) | 0
 *
 * push operation: init rev = 0;
 * temp = rev * 10 + pop;
 * rev = temp;
 *
 * @param {number} x
 * @return {boolean}
 */

export default function isPalindrome(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

  let reverse = 0;
  let num = x;

  while (num > reverse) {
    reverse = (num % 10) + reverse * 10;
    num = (num / 10) | 0;
  }

  return num === reverse || num === ((reverse / 10) | 0);
}
