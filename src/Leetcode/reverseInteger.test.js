import reverseInteger from "./reverseInteger";

describe("reverseInteger", () => {
  it("should reverse digits of an integer with limit of 2147483648", () => {
    expect(reverseInteger(123)).toBe(321);
    expect(reverseInteger(-120)).toBe(-21);
    expect(reverseInteger(9646324351)).toBe(0);
  });
});
