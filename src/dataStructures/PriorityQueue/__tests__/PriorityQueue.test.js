import PriorityQueue from "../PriorityQueue";

describe("PriorityQueue", () => {
  let myPriorityQueue;

  beforeEach(() => {
    myPriorityQueue = new PriorityQueue();

    myPriorityQueue.enqueue("a", 0);
    myPriorityQueue.enqueue("b", -10);
    myPriorityQueue.enqueue("c", 30);
    myPriorityQueue.enqueue("d", 17);
    myPriorityQueue.enqueue("e", 7);
    myPriorityQueue.enqueue("f", 4);
    myPriorityQueue.enqueue("g", -9);
    myPriorityQueue.enqueue("h", -7);
    myPriorityQueue.enqueue("i", 5);
    myPriorityQueue.enqueue("j", 2);
  });

  test("display", () => {
    expect(myPriorityQueue.display()).toBe(
      "c 30 <- d 17 <- e 7 <- i 5 <- f 4 <- j 2 <- a 0 <- h -7 <- g -9 <- b -10"
    );
  });

  test("enqueue", () => {
    expect(myPriorityQueue.enqueue("k", -2)).toBe("Queue Overflow!");
  });

  test("dequeue", () => {
    myPriorityQueue.dequeue();

    expect(myPriorityQueue.display()).toBe(
      "d 17 <- e 7 <- i 5 <- f 4 <- j 2 <- a 0 <- h -7 <- g -9 <- b -10"
    );

    myPriorityQueue.clear();
    myPriorityQueue.dequeue();

    expect(myPriorityQueue.dequeue()).toBe("Queue Underflow!");
  });

  test("peek", () => {
    expect(myPriorityQueue.peek().value).toBe("c");
    expect(myPriorityQueue.peek().priority).toBe(30);

    myPriorityQueue.clear();

    expect(myPriorityQueue.peek()).toBe("Queue Underflow!");
  });

  test("isEmpty", () => {
    expect(myPriorityQueue.isEmpty()).toBe(false);

    myPriorityQueue.clear();

    expect(myPriorityQueue.isEmpty()).toBe(true);
  });

  test("isFull", () => {
    expect(myPriorityQueue.isFull()).toBe(true);

    myPriorityQueue.dequeue();

    expect(myPriorityQueue.isFull()).toBe(false);
  });

  test("clear", () => {
    myPriorityQueue.clear();

    expect(myPriorityQueue.pq).toEqual([]);
  });
});
