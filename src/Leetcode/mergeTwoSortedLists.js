/**
 * Merge Two Sorted Lists
 *
 * Merge two sorted linked lists and return it as a new sorted list.
 * The new list should be made by splicing together the nodes
 * of the first two lists.
 *
 * Input: l1 = [1,2,4], l2 = [1,3,4] Output: [1,1,2,3,4,4]
 * Input: l1 = [], l2 = [] Output: []
 * Input: l1 = [], l2 = [0] Output: [0]
 *
 * Constraints:
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both l1 and l2 are sorted in non-decreasing order.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *    this.val = val === undefined ? 0 : val;
 *    this.next = next === undefined ? null : next;
 * }
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

export function mergeTwoLists(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  var l3;

  if (l1.val < l2.val) {
    l3 = l1;
    l3.next = mergeTwoLists(l1.next, l2);
  } else {
    l3 = l2;
    l3.next = mergeTwoLists(l1, l2.next);
  }

  return l3;
}

export function mergeTwoArrays(l1, l2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < l1.length && j < l2.length) {
    if (l1[i] < l2[j]) {
      result.push(l1[i]);
      i++;
    } else {
      result.push(l2[j]);
      j++;
    }
  }

  return result.concat(l1.slice(i)).concat(l2.slice(j));
}
