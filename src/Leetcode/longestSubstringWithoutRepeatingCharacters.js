/**
 * Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest
 * substring without repeating characters.
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 *
 * @param {string} s
 * @return {number}
 */

export default function lengthOfLongestSubstring(s) {
  if (s.length === 0) return 0;

  let i = 0;
  let j = 1;
  let maxLen = 1;
  let temp = s[0];

  while (j < s.length) {
    if (temp.indexOf(s[j]) === -1) {
      temp += s[j];
      j++;
    } else {
      temp = temp.replace(/./, "");
      i++;
    }
    maxLen = Math.max(maxLen, j - i);
  }

  return maxLen;
}
