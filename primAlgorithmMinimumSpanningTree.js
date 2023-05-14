// Name : Franklin Miranda
// Date : 5/13/2023
// Description: Prim's algorithm is an algorithm for finding the minimum spanning tree of a edge-weighted graph

const graph = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [
    [1, 2],
    [2, 3],
    [3, 7],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 6],
    [7, 8],
    [8, 6],
    [8, 9],
    [9, 8],
    [9, 1],
    [6, 9],
  ],
];

function spanningTree(graph, node) {
  const nodes = new Array(...graph[0]);
  const edges = new Array(...graph[1]);

  const tree = {};
  tree[node] = {};
  const nodesInTree = [node];

  function treeBranch(tree, edges) {
    for (let key in tree) {
      if (Object.keys(tree[key]).length === 0) {
        const adjacentNodes = edges.filter((el) => {
          return key == el[0] && !nodesInTree.includes(el[1]);
        });

        adjacentNodes.forEach((el) => {
          nodesInTree.push(el[1]);
          tree[key][el[1]] = {};
        });
      }

      if (nodesInTree.length !== nodes.length) {
        treeBranch(tree[key], edges);
      }
    }
  }

  treeBranch(tree, edges);

  console.log(JSON.stringify(tree));
  console.log(nodesInTree);
}

spanningTree(graph, 3);

function primAlgorithm(graph) {}


