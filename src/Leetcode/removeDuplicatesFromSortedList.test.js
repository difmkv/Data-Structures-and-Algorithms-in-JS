import deleteDuplicates from "./removeDuplicatesFromSortedList";

describe("deleteDuplicates", () => {
  it("Given the head of a sorted linked list, delete all duplicates \
    such that each element appears only once. Return the linked \
    list sorted as well.", () => {
    const input = {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 3,
              next: null,
            },
          },
        },
      },
    };

    const output = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    };

    expect(deleteDuplicates(input)).toEqual(output);
  });
});
