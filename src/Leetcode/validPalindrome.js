/**
 * Given a string s, determine if it is a palindrome, considering
 * only alphanumeric characters and ignoring cases.
 *
 * @param {string} s
 * @return {boolean}
 */

export default function isPalindrome(s) {
  let stripped = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return stripped.split("").reverse().join("") === stripped;
}
