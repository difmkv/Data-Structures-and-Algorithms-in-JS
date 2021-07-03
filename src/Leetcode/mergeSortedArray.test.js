import mergeSortedArray from "./mergeSortedArray";

describe("mergeSortedArray", () => {
  it("You are given two integer arrays nums1 and nums2, sorted \
  in non-decreasing order, and two integers m and n, representing \
  the number of elements in nums1 and nums2 respectively.", () => {
    let nums1 = [1, 2, 3, 0, 0, 0],
      m = 3,
      nums2 = [2, 5, 6],
      n = 3;
    const output = [1, 2, 2, 3, 5, 6];
    mergeSortedArray(nums1, m, nums2, n);
    expect(nums1).toEqual(output);
  });
});
