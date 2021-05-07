import Queue from "../Queue";

describe("Queue", () => {
  let q;

  beforeEach(() => {
    q = new Queue();
    q.enqueue("item 1");
    q.enqueue("item 2");
    q.enqueue("item 3");
    q.enqueue("item 4");
  });

  test("getSize", () => {
    expect(q.getSize()).toBe(4);
  });

  test("enqueue", () => {
    q.enqueue("item 5");

    expect(q.tail).toBe(5);
  });

  test("dequeue", () => {
    q.dequeue();

    expect(q.peek()).toBe("item 2");

    q.dequeue();
    q.dequeue();
    q.dequeue();

    expect(q.dequeue()).toBe(undefined);
  });

  test("contains", () => {
    expect(q.contains("item 1")).toBe(true);
    expect(q.contains("Nonexistent")).toBe(false);
  });

  test("until", () => {
    expect(q.until("item 4")).toBe(4);
    expect(q.until("Nonexistent")).toBe(null);
  });
});
