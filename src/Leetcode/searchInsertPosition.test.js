import searchInsert from "./searchInsertPosition";

describe("searchInsert", () => {
  it("should return the index if the target is found. If not, return \
    the index where it would be if it were inserted in order.", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
    expect(searchInsert([1], 0)).toBe(0);
    expect(searchInsert([1, 3], 0)).toBe(0);
  });
});
