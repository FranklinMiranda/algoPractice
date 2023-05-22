// Name : Franklin Miranda
// Date : 5/21/2023
// Description: An algorithm to find the minimum spanning tree of an undirected edge-weighted graph

const graph = [
  [1, 2, 3, 4],
  [
    [[1, 2], 12],
    [[2, 3], 15],
    [[1, 3], 13],
    [[1, 4], 12],
    [[2, 4], 14],
    [[3, 4], 6],
  ],
];

const spanningTrees = [];

function minimumSpanningTree(nodes, edges, nodesInTree, edgesInTree = []) {
  if (nodes.length === 0) {
    spanningTrees.push(edgesInTree);
    return;
  }

  const possibleConnections = [];

  nodesInTree.forEach((element) => {
    const result = edges.filter((el) => {
      return el[0].includes(element);
    });

    possibleConnections.push(...result);
  });

  for (let i = 0; i < possibleConnections.length; i++) {
    const nextNode = possibleConnections[i][0].filter((el) => {
      return !nodesInTree.includes(el);
    });

    const nodeFilter = nodes.filter((el) => {
      return el !== nextNode[0] && el !== nodesInTree[nodesInTree.length - 1];
    });

    let edgesFilter = [];

    for (let j = 0; j < edges.length; j++) {
      for (let k = 0; k < nodeFilter.length; k++) {
        if (edges[j][0].includes(nodeFilter[k])) {
          edgesFilter.push(edges[j]);
          break;
        }
      }
    }

    minimumSpanningTree(nodeFilter, edgesFilter, nodesInTree.concat(nextNode), edgesInTree.concat([possibleConnections[i]]));
  }
}

minimumSpanningTree(graph[0], graph[1], [1]);

for (let i = 0; i < spanningTrees.length; i++) {
  console.log(JSON.stringify(spanningTrees[i]));
}
