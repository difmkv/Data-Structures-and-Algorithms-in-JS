import removeDuplicates from "./removeDuplicatesFromSortedArray";

describe("removeDuplicates", () => {
  it("should remove the duplicates in-place such that each element \
    appears only once and returns the new length.", () => {
    let nums1 = [1, 1, 2];
    let res1 = removeDuplicates(nums1);
    expect(res1).toBe(2);
    expect(nums1.slice(0, res1)).toStrictEqual([1, 2]);

    let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    let res2 = removeDuplicates(nums2);
    expect(res2).toBe(5);
    expect(nums2.slice(0, res2)).toStrictEqual([0, 1, 2, 3, 4]);
  });
});
