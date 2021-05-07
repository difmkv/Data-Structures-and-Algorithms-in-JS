import binarySearch from "../binarySearch";

describe("Binary Search", () => {
  it("should return index if item exists in array", () => {
    expect(binarySearch([1, 2, 3, 4], 4)).toEqual(3);
    expect(binarySearch([1, 2, 3, 4], 2)).toEqual(1);
    expect(binarySearch([1, 2, 3, 4], 5)).toEqual(-1);
    expect(binarySearch([1, 2, 3, 4, 7, 8, 10], 2)).toEqual(1);
  });
});
