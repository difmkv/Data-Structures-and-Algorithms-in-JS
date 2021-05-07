import removeElement from "./removeElement";

describe("removeElement", () => {
  it("should remove all instances of that value in-place \
    and return the new length", () => {
    let nums1 = [3, 2, 2, 3];
    let res1 = removeElement(nums1, 3);
    expect(res1).toBe(2);
    expect(nums1.slice(0, res1)).toStrictEqual([2, 2]);

    let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
    let res2 = removeElement(nums2, 2);
    expect(res2).toBe(5);
    expect(nums2.slice(0, res2)).toStrictEqual([0, 1, 4, 0, 3]);

    let nums3 = [2];
    let res3 = removeElement(nums3, 3);
    expect(res3).toBe(1);
    expect(nums3.slice(0, res3)).toStrictEqual([2]);
  });
});
