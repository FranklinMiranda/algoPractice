// Name : Franklin Miranda
// Date : 5/13/2023
// Description: An algorithm for finding a spanning tree for a graph

const graph = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [
    [1, 2, 5],
    [2, 3, 7],
    [3, 7, 3],
    [3, 4, 8],
    [4, 5, 1],
    [5, 6, 3],
    [7, 6, 2],
    [7, 8, 3],
    [8, 6, 9],
    [8, 9, 1],
    [9, 8, 4],
    [9, 1, 6],
    [6, 9, 3],
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



