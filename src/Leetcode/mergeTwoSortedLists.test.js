import { mergeTwoArrays, mergeTwoLists } from "./mergeTwoSortedLists";

describe("mergeTwoLists", () => {
  it("should merge two sorted linked lists and return it as a new sorted list", () => {
    expect(mergeTwoArrays([1, 2, 4], [1, 3, 4])).toStrictEqual([1, 1, 2, 3, 4, 4]);
    expect(mergeTwoArrays([], [])).toStrictEqual([]);
    expect(mergeTwoArrays([], [0])).toStrictEqual([0]);

    const list1 = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 6,
          next: null,
        },
      },
    };

    const list2 = {
      val: 0,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    };

    const list3 = {
      val: 0,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 4,
            next: {
              val: 5,
              next: {
                val: 6,
                next: null,
              },
            },
          },
        },
      },
    };

    expect(mergeTwoLists(list1, list2)).toStrictEqual(list3);
    expect(mergeTwoLists(null, list2)).toStrictEqual(list2);
  });
});
