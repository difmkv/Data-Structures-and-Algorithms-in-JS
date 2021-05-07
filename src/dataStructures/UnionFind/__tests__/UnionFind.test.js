import UnionFind from "../UnionFind";

describe("UnionFind", () => {

  test("union, isConnected", () => {
    let uf = new UnionFind(["A", "B", "C", "D", "E", "F", "G", "I", "J", "K"]);

    uf.union("I", "K");
    uf.union("D", "F");
    uf.union("F", "K");

    uf.union("B", "A");
    uf.union("C", "B");
    uf.union("C", "A");

    uf.union("H", "E");
    uf.union("C", "H");

    expect(uf.isConnected("C", "H")).toEqual(true);
    expect(uf.isConnected("B", "H")).toEqual(true);
    expect(uf.isConnected("F", "K")).toEqual(true);

    expect(uf.isConnected("J", "A")).toEqual(false);
    expect(uf.isConnected("B", "D")).toEqual(false);
    expect(uf.isConnected("K", "B")).toEqual(false);
  });
});
