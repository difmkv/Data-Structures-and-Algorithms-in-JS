import BinarySearchTree from "../BinarySearchTree";

function logResult(context, cb) {
  let result = [];
  context[cb]((context) => result.push(context.value));
  return result;
}

describe("BinarySearchTree", () => {
  let bsTree;

  beforeEach(() => {
    bsTree = new BinarySearchTree(10);
    bsTree.insert(5).insert(15).insert(8).insert(20).insert(14);
  });

  test("error throwing if no value is specified", () => {
    try {
      new BinarySearchTree();
    } catch (error) {
      expect(error).toBe("Must specify value.");
    }
  });

  test("insert", () => {
    try {
      bsTree.insert();
    } catch (error) {
      expect(error).toBe("Must specify value.");
    }

    bsTree.insert(4);
    expect(bsTree.left.left.value).toBe(4);

    /** insert in empty tree */
    let bsTree_v2 = new BinarySearchTree(1);
    bsTree_v2.remove(1);
    expect(logResult(bsTree_v2, "traverseDepthFirst_inOrder")).toEqual([null]);

    bsTree_v2.insert(10);
    expect(logResult(bsTree_v2, "traverseDepthFirst_inOrder")).toEqual([10]);
  });

  test("contains", () => {
    expect(bsTree.contains(5)).toBe(true);
    expect(bsTree.contains(25)).toBe(false);
    expect(bsTree.contains(undefined)).toBe(false);
  });

  test("traverseDepthFirst_inOrder", () => {
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([5, 8, 10, 14, 15, 20]);
  });

  test("traverseDepthFirst_preOrder", () => {
    expect(logResult(bsTree, "traverseDepthFirst_preOrder")).toEqual([10, 5, 8, 15, 14, 20]);
  });

  test("traverseDepthFirst_postOrder", () => {
    expect(logResult(bsTree, "traverseDepthFirst_postOrder")).toEqual([8, 5, 14, 20, 15, 10]);
  });

  test("traverseDepthFirst", () => {
    expect(logResult(bsTree, "traverseDepthFirst")).toEqual([10, 15, 20, 14, 5, 8]);
  });

  test("traverseBreadthFirst", () => {
    expect(logResult(bsTree, "traverseBreadthFirst")).toEqual([10, 5, 15, 8, 14, 20]);
  });

  test("checkIfFull", () => {
    expect(bsTree.checkIfFull()).toBe(false);

    bsTree.insert(4);

    expect(bsTree.checkIfFull()).toBe(true);
  });

  test("checkIfBalanced", () => {
    expect(bsTree.checkIfBalanced()).toBe(true);

    bsTree.insert(100);
    bsTree.insert(200);

    expect(bsTree.checkIfBalanced()).toBe(false);
  });

  test("deleteMin", () => {
    bsTree.deleteMin();
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([8, 10, 14, 15, 20]);

    bsTree.deleteMin();
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([10, 14, 15, 20]);

    bsTree.deleteMin();
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([14, 15, 20]);

    bsTree.deleteMin();
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([15, 20]);

    bsTree.deleteMin();
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([20]);

    bsTree.deleteMin();
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([null]);
  });

  test("deleteMax", () => {
    bsTree.deleteMax();
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([5, 8, 10, 14, 15]);

    bsTree.deleteMax();
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([5, 8, 10, 14]);

    bsTree.deleteMax();
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([5, 8, 10]);

    bsTree.deleteMax();
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([5, 8]);

    bsTree.deleteMax();
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([5]);

    bsTree.deleteMax();
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([null]);
  });

  test("remove", () => {
    bsTree.insert(19);

    bsTree.remove(15);
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([5, 8, 10, 14, 19, 20]);

    bsTree.remove(19);
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([5, 8, 10, 14, 20]);

    bsTree.remove(20);
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([5, 8, 10, 14]);

    bsTree.remove(8);
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([5, 10, 14]);

    bsTree.remove(5);
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([10, 14]);

    bsTree.remove(5);
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([10, 14]);

    bsTree.remove(10);
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([14]);

    bsTree.remove(14);
    expect(logResult(bsTree, "traverseDepthFirst_inOrder")).toEqual([null]);
  });
});
