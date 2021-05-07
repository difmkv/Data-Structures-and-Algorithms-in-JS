/**
 * Roman to Integer
 *
 * Roman numerals are represented by seven different symbols:
 * I, V, X, L, C, D and M.
 *
 * For example, 2 is written as II in Roman numeral, just two one's
 * added together. 12 is written as XII, which is simply X + II.
 * The number 27 is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from
 * left to right. However, the numeral for four is not IIII.
 * Instead, the number four is written as IV. Because the one is
 * before the five we subtract it making four. The same principle
 * applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 *
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 *
 * If I comes before V or X, subtract 1 eg: IV = 4 and IX = 9
 * If X comes before L or C, subtract 10 eg: XL = 40 and XC = 90
 * If C comes before D or M, subtract 100 eg: CD = 400 and CM = 900
 *
 * Input: s = "LVIII" Output: 58
 * Input: s = "IX" Output: 9
 * Input: s = "IV" Output: 4
 * Input: s = "III" Output: 3
 * Input: s = "MCMXCIV" Output: 1994
 *
 * @param {string} s
 * @return {number}
 */

export default function romanToInt(s) {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] < dict[s[i + 1]]) {
      result += dict[s[i + 1]] - dict[s[i]];
      i++;
    } else {
      result += dict[s[i]];
    }
  }

  return result;
}
