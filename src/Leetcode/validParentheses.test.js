import { isValidWithRecursive, isValidWithStack } from "./validParentheses";

describe("validParentheses", () => {
  it("should determine if the input string is valid", () => {
    expect(isValidWithRecursive("()")).toBe(true);
    expect(isValidWithRecursive("()[]{}")).toBe(true);
    expect(isValidWithRecursive("(]")).toBe(false);
    expect(isValidWithRecursive("{[]}")).toBe(true);
    expect(isValidWithRecursive("{[(]}")).toBe(false);

    expect(isValidWithStack("()")).toBe(true);
    expect(isValidWithStack("()[]{}")).toBe(true);
    expect(isValidWithStack("(]")).toBe(false);
    expect(isValidWithStack("{[]}")).toBe(true);
  });
});
