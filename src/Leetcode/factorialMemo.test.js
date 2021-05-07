import factorial from "./factorialMemo";

describe("factorialMemo", () => {
  it("should calculate factorial and retrieve result from cache", () => {
    const mock = jest.spyOn(factorial, "memo");

    expect(factorial.memo(5)).toBe(120);
    expect(mock).toHaveBeenCalledTimes(6);

    mock.mockClear();

    expect(factorial.memo(6)).toBe(720);
    expect(mock).toHaveBeenCalledTimes(2);

    mock.mockRestore();
  });
});
