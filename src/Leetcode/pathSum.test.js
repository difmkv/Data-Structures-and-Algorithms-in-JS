import hasPathSum from "./pathSum";

describe("pathSum", () => {
  it("Given the root of a binary tree and an integer targetSum, \
  return true if the tree has a root-to-leaf path such that \
  adding up all the values along the path equals targetSum.", () => {
    let root = {
      val: 5,
      left: {
        val: 4,
        left: {
          val: 11,
          left: {
            val: 7,
            left: null,
            right: null,
          },
          right: {
            val: 2,
            left: null,
            right: null,
          },
        },
        right: null,
      },
      right: {
        val: 8,
        left: {
          val: 13,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: {
            val: 1,
            left: null,
            right: null,
          },
        },
      },
    };

    expect(hasPathSum(root, 22)).toBe(true);
    expect(hasPathSum(root, 35)).toBe(false);
  });
});
