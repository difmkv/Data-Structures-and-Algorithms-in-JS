/*
 * GRAPHS
 *
 * At their simplest, graphs are simply collections of nodes – representing some class
 * of objects like people, corporate boards, proteins, or destinations on the globe –
 * and edges, which serve to represent connections like friendships, bridges, or
 * molecular binding interactions.
 *
 * Undirected graph: An undirected graph is one in which its edges have no orientations,
 * i.e. no direction is associated with any edge. The edges (x, y) and (y, x) are equivalent.
 *
 * Directed graph: A directed graph or digraph G consists of a set V of vertices (or nodes)
 * and a set of edges (or arcs) such that each edge e ∈ E is associated with an ordered pair
 * of vertices. If there is an edge (x, y), it is completely distinct from the edge (y, x).
 *
 * A graph is a pictorial representation of a set of objects where some pairs of objects
 * are connected by links. The interconnected objects are represented by points termed as
 * vertices, and the links that connect the vertices are called edges. Formally, a graph is
 * a pair of sets (V, E), where V is the set of vertices and E is the set of edges,
 * connecting the pairs of vertices.
 *
 * Vertex − Each node of the graph is represented as a vertex.
 * Edge − Edge represents a path between two vertices or a line between
 * two vertices.
 * Adjacency − Two node or vertices are adjacent if they are connected
 * to each other through an edge.
 * Path − Path represents a sequence of edges between the two vertices.
 *
 * Breadth-first Search
 * In a breadth-first search, we start with the start node, followed by its adjacent nodes,
 * then all nodes that can be reached by a path from the start node containing two edges,
 * three edges, and so on. Formally the BFS algorithm visits all vertices in a graph G,
 * that are k edges away from the source vertex s before visiting any vertex k + 1 edges away.
 * This is done until no more vertices are reachable from s.
 *
 * BFS(v){
 *     {add v to queue and mark it}
 *     Add(Q, v)
 *     Mark v as visited
 *     while (not IsEmpty(Q)) do
 *     begin
 *         w = QueueFront(Q)
 *         Remove(Q)
 *         {loop invariant : there is a path from vertex w to every vertex in the queue Q}
 *         for each unvisited vertex u adjacent to w do
 *         begin
 *             Mark u as visited
 *             Add(Q , u)
 *         end { for }
 *     end{ while }
 *
 * Depth-first Search
 * Depth-ﬁrst search explores edges out of the most recently discovered vertex s that
 * still has unexplored edges leaving it. Once all of V’s edges have been explored,
 * the search “backtracks” to explore edges leaving the vertex from which was discovered.
 * This process continues until we have discovered all the vertices that are reachable
 * from the original source vertex. If any undiscovered vertices remain, then depth-ﬁrst
 * search selects one of them as a new source, and it repeats the search from that source.
 * The algorithm repeats this entire process until it has discovered every vertex:
 *
 * Visit a vertex s.
 * Mark s as visited.
 * Recursively visit each unvisited vertex attached to s.
 *
 * A non-recursive implementation of DFS, it delays whether a vertex has been discovered
 * until the vertex has been popped from the stack.
 *
 * DFS-iterative(G,v):
 *     let S be a stack
 *     S.push(v)
 *     while S is not empty
 *         v = S.pop()
 *         if v is not labeled as discovered:
 *             label v as discovered
 *             for all edges from v to w in G.adjacentEdges(v) do
 *                 S.push(w)
 *
 * As we increase the size of our graph, the contrast between depth-first and breadth-first
 * search is quite evident. Depth-first search explores the graph by looking for new vertices
 * far away from the start point, taking closer vertices only when dead ends are encountered;
 * breadth-first search completely covers the area close to the starting point, moving farther
 * away only when everything close has been looked at. Again, the order in which the nodes
 * are visited depends largely upon the effects of this ordering on the order in which
 * vertices appear on the adjacency lists.
 *
 * Kruskal's algorithm is a greedy algorithm that works as:
 *
 * 1. It Creates a set of all edges in the graph.
 * 2. While the above set is not empty and not all vertices are covered,
 *   A. It removes the minimum weight edge from this set
 *   B. It checks if this edge is forming a cycle or just connecting 2 trees.
 *   If it forms a cycle, we discard this edge, else we add it to our tree.
 * 3. When the above processing is complete, we have a minimum
 * spanning tree.
 *
 * In order to implement this algorithm, we need 2 more data structures.
 * First, we need a priority queue that we can use to keep the edges in a
 * sorted order and get our required edge on each iteration. Next, we need
 * a disjoint set data structure. A disjoint-set data structure
 * (also called a union-find data structure or merge–find set) is a
 * data structure that tracks a set of elements partitioned into a number
 * of disjoint (non-overlapping) subsets. Whenever we add a new node to a
 * tree, we will check if they are already connected. If yes, then we have
 * a cycle. If no, we will make a union of both vertices of the edge.
 * This will add them to the same subset.
 */

import Set from "../Set/Set";
import Stack from "../Stack/Stack";
import Queue from "../Queue/Queue";
import PriorityQueue from "../PriorityQueue/PriorityQueue";
import UnionFind from "../UnionFind/UnionFind";

export default class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    if (!node) return "Invalid node value";
    if (this.nodes[node] !== undefined) return "Node already exists";

    this.nodes[node] = [];
  }

  addEdge(node1, node2, weight = 0) {
    if (!node1 || !node2) return "Invalid node value";
    if (!this.nodes[node1] || !this.nodes[node2]) return "Invalid node value";

    this.nodes[node1].push({ node: node2, weight });
    this.nodes[node2].push({ node: node1, weight });
  }

  addDirectedEdge(node1, node2, weight = 0) {
    if (!node1 || !node2) return "Invalid node value";
    if (!this.nodes[node1]) return "Invalid node value";

    this.nodes[node1].push({ node: node2, weight });
  }

  removeNode(node) {
    if (!this.nodes[node]) return "Invalid node value";

    this.nodes[node].forEach((neighbor) => {
      this.nodes[neighbor.node].forEach((neighborChild, index, arr) => {
        if (neighborChild.node === node) return arr.splice(index, 1);
      });
    });
    delete this.nodes[node];
  }

  removeEdge(node1, node2) {
    if (!this.nodes[node1] || !this.nodes[node2]) return "Invalid node value";

    this.nodes[node1].splice(this.nodes[node1].indexOf(node2), 1);
    this.nodes[node2].splice(this.nodes[node2].indexOf(node1), 1);
  }

  hasDirectedEdge(node1, node2) {
    if (!this.nodes[node1] || !this.nodes[node2]) return "Invalid node value";

    for (let i = 0; i < this.nodes[node1].length; i++) {
      if (this.nodes[node1][i].node === node2) return true;
    }
    return false;
  }

  hasEdge(node1, node2) {
    return this.hasDirectedEdge(node1, node2) && this.hasDirectedEdge(node2, node1);
  }

  BFS(node) {
    if (!node) return "Invalid node value";

    let result = [];
    let q = new Queue();
    let maxSize = Object.keys(this.nodes).length;
    let explored = new Set(maxSize);

    q.enqueue(node);
    explored.add(node);

    while (!q.isEmpty()) {
      let t = q.dequeue();
      result.push(t);
      this.nodes[t].filter((n) => {
        if (!explored.has(n.node)) {
          explored.add(n.node);
          q.enqueue(n.node);
        }
      });
    }
    return result.join(",");
  }

  DFS(node) {
    if (!node) return "Invalid node value";

    let result = [];
    let s = new Stack();
    let maxSize = Object.keys(this.nodes).length;
    let explored = new Set(maxSize);

    s.push(node);
    explored.add(node);

    while (!s.isEmpty()) {
      let t = s.pop();
      result.push(t);
      this.nodes[t].filter((n) => {
        if (!explored.has(n.node)) {
          explored.add(n.node);
          s.push(n.node);
        }
      });
    }
    return result.join(",");
  }

  kruskalMST() {
    if (Object.keys(this.nodes).length === 0) return new Graph();

    let [MST, priorityQ, unionFind] = this._assignDataStructures();

    while (!priorityQ.isEmpty()) {
      let nextEdge = priorityQ.dequeue();
      let nodes = nextEdge.value;
      let weight = nextEdge.priority;

      if (!unionFind.isConnected(nodes[0], nodes[1])) {
        MST.addEdge(nodes[0], nodes[1], weight);
        unionFind.union(nodes[0], nodes[1]);
      }
    }
    return MST;
  }

  _assignDataStructures() {
    let MST = new Graph();
    let maxSize = Math.pow(Object.keys(this.nodes).length, 2);
    let priorityQ = new PriorityQueue(maxSize);
    let vertices = [];

    for (let n in this.nodes) {
      MST.addNode(n);
      vertices.push(n);
      this.nodes[n].map((edge) => {
        priorityQ.enqueue([n, edge.node], edge.weight);
      });
    }

    let unionFind = new UnionFind(vertices);

    return [MST, priorityQ, unionFind];
  }

  display() {
    let result = [];
    for (let key in this.nodes) {
      result.push(`${key} -> ${this.nodes[key].map((n) => n.node).join(", ")}`);
    }
    return result.join("; ");
  }
}
