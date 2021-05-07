/**
 * Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 *
 * Input: s = "()" Output: true
 * Input: s = "()[]{}" Output: true
 * Input: s = "(]" Output: false
 * Input: s = "([)]" Output: false
 * Input: s = "{[]}" Output: true
 *
 * Constraints:
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 *
 * @param {string} s
 * @return {boolean}
 */

export function isValidWithRecursive(s) {
  if (s.length % 2 === 1) return false;
  if (s.length === 0) return true;

  if (/\[\]|\(\)|\{\}/.test(s)) {
    s = s.replace(/\[\]|\(\)|\{\}/, "");
    return isValidWithRecursive(s);
  } else {
    return false;
  }
}

export function isValidWithStack(s) {
  const match = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === match[s[i]] && match[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length;
}
