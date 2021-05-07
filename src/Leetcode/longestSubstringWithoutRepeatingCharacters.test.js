import lengthOfLongestSubstring from "./longestSubstringWithoutRepeatingCharacters";

describe("lengthOfLongestSubstring", () => {
  it("should find the length of the longest substring without repeating characters", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    expect(lengthOfLongestSubstring("")).toBe(0);
    expect(lengthOfLongestSubstring(" ")).toBe(1);
    expect(lengthOfLongestSubstring("au")).toBe(2);
    expect(lengthOfLongestSubstring("aab")).toBe(2);
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
    expect(lengthOfLongestSubstring("qrsvbspk")).toBe(5);
  });
});
