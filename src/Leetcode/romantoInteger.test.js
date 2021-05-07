import romanToInt from "./romanToInteger";

describe("romanToInt", () => {
  it("given a roman numeral, convert it to an integer", () => {
    expect(romanToInt("LVIII")).toBe(58);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });
});
