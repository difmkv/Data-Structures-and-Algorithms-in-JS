import longestCommonPrefix from "./longestCommonPrefix";

describe("longestCommonPrefix", () => {
  it("should find the longest common prefix string amongst an array of strings", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    expect(longestCommonPrefix([])).toBe("");
  });
});
