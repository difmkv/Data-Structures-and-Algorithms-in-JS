import addTwoNumbers from "./addTwoNumbers";

describe("addTwoNumbers", () => {
  it("should add the two numbers and return the sum as a linked list", () => {
    const l1 = {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 3,
          next: null,
        },
      },
    };
    const l2 = {
      val: 5,
      next: {
        val: 6,
        next: {
          val: 4,
          next: null,
        },
      },
    };
    const l3 = {
      val: 7,
      next: {
        val: 0,
        next: {
          val: 8,
          next: null,
        },
      },
    };

    const l4 = {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 9,
              next: {
                val: 9,
                next: {
                  val: 9,
                  next: null,
                },
              },
            },
          },
        },
      },
    };
    const l5 = {
      val: 9,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: null,
          },
        },
      },
    };

    const l6 = {
      val: 8,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 9,
            next: {
              val: 0,
              next: {
                val: 0,
                next: {
                  val: 0,
                  next: {
                    val: 1,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    };

    expect(addTwoNumbers(l1, l2)).toEqual(l3);
    expect(addTwoNumbers(l4, l5)).toEqual(l6);
  });
});
