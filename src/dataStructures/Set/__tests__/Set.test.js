import Set from "../Set";

describe("Set", () => {
  let mySet;

  beforeEach(() => {
    mySet = new Set(3);

    mySet.add("doe");
    mySet.add("ray");
    mySet.add("me");
  });

  test("add", () => {
    expect(mySet.add("fa")).toBe("Max capacity reached. Remove before adding.");
    expect(mySet.add("doe")).toBe("Set already has value.");
  });

  test("getSize", () => {
    expect(mySet.getSize()).toBe(3);
  });

  test("has", () => {
    expect(mySet.has("ray")).toBe(true);
    expect(mySet.has("Nonexistent")).toBe(false);
  });

  test("delete", () => {
    expect(mySet.delete("doe")).toBe(true);
    expect(mySet.delete("Nonexistent")).toBe(false);
  });

  test("forEach", () => {
    const callBackFn = jest.fn();

    mySet.forEach(callBackFn);

    expect(callBackFn).toHaveBeenCalledTimes(mySet.getSize());
  });
});
