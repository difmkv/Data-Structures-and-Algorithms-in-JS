import partitionSort from "../partitionSort";

describe("Partition Sort", () => {
  it("should sort items in array", () => {
    const sorted = partitionSort([12, 9, 7, 15, 10]);
    expect(sorted).toEqual([7, 9, 10, 12, 15]);
  });
});
