import isPalindrome from "./palindromeNumber";

describe("isPalindrome", () => {
  it("should reverse digits of an integer", () => {
    expect(isPalindrome(0)).toBe(true);
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(-121)).toBe(false);
  });
});
