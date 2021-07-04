/**
 * Given the root of a binary tree and an integer targetSum,
 * return true if the tree has a root-to-leaf path such that
 * adding up all the values along the path equals targetSum.
 *
 * A leaf is a node with no children.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

export default function hasPathSum(root, targetSum) {
  function dfs(r, t) {
    if (!r) return false;
    if (!r.left && !r.right) return r.val - t === 0;

    return dfs(r.left, t - r.val) || dfs(r.right, t - r.val);
  }

  return dfs(root, targetSum);
}
