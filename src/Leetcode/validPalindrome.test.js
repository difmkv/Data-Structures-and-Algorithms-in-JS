import isPalindrome from "./validPalindrome";

describe("isPalindrome", () => {
  it("Given a string s, determine if it is a palindrome, \
  considering only alphanumeric characters and ignoring cases.", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("race a car")).toBe(false);
  });
});
