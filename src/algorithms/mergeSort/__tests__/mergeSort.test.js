import mergeSort from "../mergeSort";

describe("Merge Sort", () => {
  it("should sort items in array", () => {
    const sorted = mergeSort([4, 3, 1, 2]);
    expect(sorted).toEqual([1, 2, 3, 4]);
  });
});
