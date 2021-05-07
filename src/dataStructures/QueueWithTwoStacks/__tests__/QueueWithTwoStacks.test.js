import QueueWithTwoStacks from "../QueueWithTwoStacks";

describe("Queue With Two Stacks", () => {
  let qWithTwoStacks;

  beforeEach(() => {
    qWithTwoStacks = new QueueWithTwoStacks();

    qWithTwoStacks.enqueue("item 1");
    qWithTwoStacks.enqueue("item 2");
    qWithTwoStacks.enqueue("item 3");
    qWithTwoStacks.enqueue("item 4");
  });

  test("enqueue", () => {
    qWithTwoStacks.enqueue("item 5");

    expect(qWithTwoStacks.stackIn.size).toBe(5);
  });

  test("transferStacks", () => {
    const transferStacksFn = jest.spyOn(qWithTwoStacks, "transferStacks");

    qWithTwoStacks.dequeue();

    expect(transferStacksFn).toHaveBeenCalledTimes(1);
  });

  test("dequeue", () => {
    qWithTwoStacks.dequeue();

    expect(qWithTwoStacks.peek()).toBe("item 2");

    qWithTwoStacks.dequeue();
    qWithTwoStacks.dequeue();
    qWithTwoStacks.dequeue();

    expect(qWithTwoStacks.dequeue()).toBe(undefined);
  });

  test("peek", () => {
    expect(qWithTwoStacks.peek()).toBe("item 1");

    qWithTwoStacks.dequeue();
    qWithTwoStacks.dequeue();
    qWithTwoStacks.dequeue();
    qWithTwoStacks.dequeue();

    expect(qWithTwoStacks.peek()).toBe(undefined);
  });

  test("isEmpty", () => {
    expect(qWithTwoStacks.isEmpty()).toBe(false);

    qWithTwoStacks.dequeue();
    qWithTwoStacks.dequeue();
    qWithTwoStacks.dequeue();
    qWithTwoStacks.dequeue();

    expect(qWithTwoStacks.isEmpty()).toBe(true);
  });

  test("getSize", () => {
    expect(qWithTwoStacks.getSize()).toBe(4);
  });
});
