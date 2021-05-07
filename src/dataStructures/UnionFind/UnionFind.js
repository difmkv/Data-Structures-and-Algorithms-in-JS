/*
 * UNION FIND or DISJOINT SET
 *
 * Union-find, as it is popularly called, is a data structure that
 * categorizes objects into different sets and lets checking out if two
 * objects belong to the same set. The most popular usage of the data
 * structure is to check whether one node in a graph can be reached from
 * another, e.g. in the Kruskal's algorithm to avoid forming cycles.
 *
 * This data structure is supposed to support two operations:
 * 1. find(x): Returns some representation of the set to which x belongs.
 * 2. union(x,y): Merge the sets containing x and y.
 */

export default class UnionFind {
  constructor(nodes = {}) {
    /* Initialize the data structure such that
    all elements have themselves as parents */
    this.parent = this._initData(nodes);
  }

  _initData(nodes) {
    let ds = {};
    nodes.map((n) => (ds[n] = n));
    return ds;
  }

  union(a, b) {
    let rootA = this.findRootFor(a);
    let rootB = this.findRootFor(b);

    if (rootA === rootB) return;

    if (rootA < rootB) {
      if (this.parent[b] !== b) this.union(this.parent[b], a);
      this.parent[b] = this.parent[a];
    } else {
      if (this.parent[a] !== a) this.union(this.parent[a], b);
      this.parent[a] = this.parent[b];
    }
  }

  findRootFor(a) {
    while (this.parent[a] !== a) {
      a = this.parent[a];
    }
    return a;
  }

  isConnected(a, b) {
    return this.findRootFor(a) === this.findRootFor(b);
  }
}
