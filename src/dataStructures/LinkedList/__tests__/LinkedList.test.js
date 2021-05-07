import LinkedList from "../LinkedList";

describe("LinkedList", () => {
  let myList;

  beforeEach(() => {
    myList = new LinkedList(0);
    myList.insertAfter(myList.head, 1);
  });

  test("error throwing if no value is specified", () => {
    try {
      new LinkedList();
    } catch (error) {
      expect(error).toBe("Must provide value for node.");
    }
  });

  test("print", () => {
    expect(myList.print()).toBe("0, 1");
  });

  test("insertAfter", () => {
    expect(myList.print()).toBe("0, 1");
  });

  test("removeAfter", () => {
    expect(myList.removeAfter(myList.tail)).toBe("Nothing to remove.");

    myList.removeAfter(myList.head);
    expect(myList.print()).toBe("0");
  });

  test("insertHead", () => {
    myList.insertHead(-1);
    expect(myList.print()).toBe("-1, 0, 1");
  });

  test("removeHead", () => {
    myList.removeHead();
    myList.removeHead();
    expect(myList.print()).toBe("");
  });

  test("contains", () => {
    expect(myList.contains(0)).toBe(true);
    expect(myList.contains(1)).toBe(true);
    expect(myList.contains("Nonexistent")).toBe(false);
  });

  test("appendToTail", () => {
    myList.appendToTail(2);
    expect(myList.print()).toBe("0, 1, 2");
  });
});
