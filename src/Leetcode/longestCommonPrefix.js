/**
 * Longest Common Prefix
 *
 * Write a function to find the longest common prefix
 * string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Input: strs = ["flower","flow","flight"] Output: "fl"
 * Input: strs = ["dog","racecar","car"] Output: ""
 *
 * Constraints:
 * 0 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lower-case English letters.
 *
 * @param {string[]} strs
 * @return {string}
 */

export default function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let i = 0;
  let sorted = strs.sort();

  for (i; i < sorted[0].length; i++) {
    if (sorted[0][i] !== sorted[sorted.length - 1][i]) {
      break;
    }
  }

  return sorted[0].slice(0, i);
}
