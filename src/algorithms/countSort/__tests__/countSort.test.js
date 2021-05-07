import countSort from "../countSort";

describe("Count Sort", () => {
  it("should sort items in array", () => {
    const sorted = countSort([6, 1, 23, 2, 3, 1, 2, 3, 3, 1, 123, 123, 2, 3]);
    expect(sorted).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 6, 23, 123, 123]);
  });
});
