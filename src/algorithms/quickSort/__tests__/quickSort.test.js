import quickSort from "../quickSort";

describe("Quick Sort", () => {
  it("should sort items in array", () => {
    const sorted = quickSort([12, 30, 4, 3, 1, 23, 2]);
    expect(sorted).toEqual([1, 2, 3, 4, 12, 23, 30]);
  });
});
