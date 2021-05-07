import insertionSort from "../insertionSort";

describe("Insertion Sort", () => {
  it("should sort items in array", () => {
    const sorted = insertionSort([4, 1, 8, 7, 2]);
    expect(sorted).toEqual([1, 2, 4, 7, 8]);
  });
});
