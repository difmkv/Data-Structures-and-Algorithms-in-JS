import Graph from "../Graph";

describe("Graph", () => {
  let g;

  beforeEach(() => {
    g = new Graph();

    g.addNode("A");
    g.addNode("B");
    g.addNode("C");
    g.addNode("D");
    g.addNode("E");
    g.addNode("F");
    g.addNode("G");
    g.addNode("H");
    g.addNode("I");

    g.addEdge("A", "C", 100);
    g.addEdge("A", "B", 3);
    g.addEdge("A", "D", 4);
    g.addEdge("C", "D", 3);
    g.addEdge("D", "E", 8);
    g.addEdge("E", "F", 10);
    g.addEdge("B", "G", 9);
    g.addEdge("E", "G", 50);
    g.addEdge("I", "A", 45);

    g.addDirectedEdge("H", "A", 45);
  });

  test("addNode", () => {
    expect(g.addNode("A")).toBe("Node already exists");
    expect(g.addNode()).toBe("Invalid node value");
  });

  test("addEdge", () => {
    expect(g.addEdge("A", "Nonexistent")).toBe("Invalid node value");
    expect(g.addEdge()).toBe("Invalid node value");
  });

  test("addDirectedEdge", () => {
    expect(g.addDirectedEdge("Nonexistent", "A")).toBe("Invalid node value");
    expect(g.addDirectedEdge()).toBe("Invalid node value");
  });

  test("removeNode", () => {
    expect(g.removeNode("Nonexistent")).toBe("Invalid node value");
    g.removeNode("H");
    expect(g.display()).toBe(
      "A -> C, B, D, I; B -> A, G; C -> A, D; D -> A, C, E; E -> D, F, G; F -> E; G -> B, E; I -> A"
      );

    g.removeNode("D");
    expect(g.display()).toBe(
      "A -> C, B, I; B -> A, G; C -> A; E -> F, G; F -> E; G -> B, E; I -> A"
      );
  });

  test("removeEdge", () => {
    expect(g.removeEdge("Nonexistent", "A")).toBe("Invalid node value");
    g.removeEdge("I", "A");
    expect(g.display()).toBe(
      "A -> C, B, D; B -> A, G; C -> A, D; D -> A, C, E; E -> D, F, G; F -> E; G -> B, E; H -> A; I -> "
    );
  });

  test("hasDirectedEdge", () => {
    expect(g.hasDirectedEdge("Nonexistent", "C")).toBe("Invalid node value");
    expect(g.hasDirectedEdge("H", "A")).toBe(true);
    expect(g.hasDirectedEdge("A", "H")).toBe(false);
  });

  test("hasEdge", () => {
    expect(g.hasEdge("Nonexistent", "C")).toBe("Invalid node value");
    expect(g.hasEdge("A", "C")).toBe(true);
    expect(g.hasEdge("H", "A")).toBe(false);
    expect(g.hasEdge("A", "H")).toBe(false);
  });

  test("BFS", () => {
    expect(g.BFS()).toBe("Invalid node value");
    expect(g.BFS("E")).toBe("E,D,F,G,A,C,B,I");
  });

  test("DFS", () => {
    expect(g.DFS()).toBe("Invalid node value");
    expect(g.DFS("E")).toBe("E,G,B,A,I,C,F,D");
  });

  test("kruskalMST", () => {
    let mst = g.kruskalMST();
    expect(mst.display()).toBe(
      "A -> C, I, H, D; B -> G; C -> A; D -> E, A; E -> G, F, D; F -> E; G -> E, B; H -> A; I -> A"
      );

    let emptyGraph = new Graph();
    expect(emptyGraph.kruskalMST()["nodes"]).toEqual({});
  });
});
