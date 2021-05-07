import Stack from "../Stack";

describe("Stack", () => {
  let myStack;

  beforeEach(() => {
    myStack = new Stack();

    myStack.push("item 1");
    myStack.push("item 2");
    myStack.push("item 3");
    myStack.push("item 4");
  });

  test("push", () => {
    myStack.push("item 5");

    expect(myStack.getSize()).toBe(5);
  });

  test("pop", () => {
    expect(myStack.pop()).toBe("item 4");

    myStack.pop();
    myStack.pop();
    myStack.pop();

    expect(myStack.pop()).toBe(undefined);
  });

  test("peek", () => {
    expect(myStack.peek()).toBe("item 4");

    myStack.pop();
    myStack.pop();
    myStack.pop();
    myStack.pop();

    expect(myStack.peek()).toBe(undefined);
  });

  test("isEmpty", () => {
    expect(myStack.isEmpty()).toBe(false);

    myStack.pop();
    myStack.pop();
    myStack.pop();
    myStack.pop();

    expect(myStack.isEmpty()).toBe(true);
  });

  test("getSize", () => {
    expect(myStack.getSize()).toBe(4);
  });

  test("clear", () => {
    myStack.clear();
    expect(myStack.getSize()).toBe(0);
  });
});
