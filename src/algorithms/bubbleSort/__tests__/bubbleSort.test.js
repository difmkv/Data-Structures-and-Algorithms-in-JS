import bubbleSort from "../bubbleSort";

describe("Bubble Sort", () => {
  it("should sort items in array", () => {
    const sorted = bubbleSort([4, 1, 8, 7, 2]);
    expect(sorted).toEqual([1, 2, 4, 7, 8]);
  });
});
