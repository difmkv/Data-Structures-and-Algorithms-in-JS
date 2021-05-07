import twoSum from "./twoSum";

describe("twoSum", () => {
  it("should return indices of the two numbers such that they add up to target", () => {
    expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });
});
