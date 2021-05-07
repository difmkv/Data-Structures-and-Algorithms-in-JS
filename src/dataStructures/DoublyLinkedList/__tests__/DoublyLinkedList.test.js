import DoublyLinkedList from "../DoublyLinkedList";

describe("DoublyLinkedList", () => {
  let myList;

  beforeEach(() => {
    myList = new DoublyLinkedList(0);
    myList.insertAfter(myList.head, 1);
  });

  test("constructor", () => {
    try {
      new DoublyLinkedList();
    } catch (e) {
      expect(e).toBe("Must provide value for node");
    }
  });

  test("print", () => {
    expect(myList.print()).toBe("0, 1");
  });

  test("insertAfter", () => {
    expect(myList.insertAfter(myList.head.next, 2).value).toBe(2);
  });

  test("removeAfter", () => {
    expect(myList.removeAfter(myList.head).value).toBe(1);
    expect(myList.removeAfter(myList.head)).toBe("Nothing to remove");
  });

  test("removeHead", () => {
    expect(myList.removeHead().value).toBe(0);
  });

  test("insertHead", () => {
    expect(myList.insertHead(-1).value).toBe(-1);
  });

  test("findNode", () => {
    expect(myList.findNode(1).value).toBe(1);
    expect(myList.findNode(5)).toBe("No node with value: 5 found");
  });

  test("appendToTail", () => {
    expect(myList.appendToTail(10).value).toBe(10);
  });

  test("insertBefore", () => {
    expect(myList.insertBefore(myList.head, 7).value).toBe(7);
  });

  test("removeBefore", () => {
    expect(myList.removeBefore(myList.head.next).value).toBe(0);
    expect(myList.removeBefore(myList.head)).toBe("Nothing to remove");
  });
});
