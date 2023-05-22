// Name : Franklin Miranda
// Date : 5/21/2023
// Description: An algorithm to find the minimum spanning tree of an undirected edge-weighted graph

const graph = [
  [1, 2, 3, 4, 5, 6],
  [
    [[1, 6], 5],
    [[1, 5], 5],
    [[1, 4], 5],
    [[1, 3], 8],
    [[1, 2], 8],
    [[2, 6], 8],
    [[2, 5], 8],
    [[2, 4], 8],
    [[2, 3], 8],
    [[3, 6], 8],
    [[3, 5], 8],
    [[3, 4], 8],
    [[4, 6], 8],
    [[4, 5], 8],
    [[5, 6], 8],
  ],
];

const spanningTrees = [];

function minimumSpanningTree(nodes, edges, nodesInTree, edgesInTree = []) {
  if (nodes.length === 0) {
    let weight = 0;

    for (let i = 0; i < edgesInTree.length; i++) {
      weight += edgesInTree[i][1];
    }
    spanningTrees.push([edgesInTree, weight]);
    return;
  }

  if (edgesInTree.length === 0) {
    nodes = nodes.filter((el) => {
      return el !== nodesInTree[0];
    });
  }

  edges = edges.filter((el) => {
    return !(nodesInTree.includes(el[0][0]) && nodesInTree.includes(el[0][1]));
  });

  const possibleConnectionsArr = [];
  nodesInTree.forEach((element) => {
    const result = edges.filter((el) => {
      return el[0].includes(element);
    });

    edges = edges.filter((el) => {
      return !el[0].includes(element);
    });

    possibleConnectionsArr.push(...result);
  });

  const possibleConnectionsCombArr = [];
  for (let i = 1; i <= possibleConnectionsArr.length; i++) {
    function combinations(arr, n) {
      if (n === 1) {
        return arr.map((el) => {
          return [el];
        });
      }

      const result = [];

      for (let i = 0; i <= arr.length - n; i++) {
        const combArr = combinations(arr.slice(i + 1), n - 1);

        combArr.forEach((el) => {
          result.push([arr[i], ...el]);
        });
      }

      return result;
    }
    let combArr = combinations(possibleConnectionsArr, i);

    if (nodesInTree.length > 1) {
      for (let i = 0; i < combArr.length; i++) {
        const terminalNodes = [];

        for (let j = 0; j < combArr[i].length; j++) {
          for (let k = 0; k < combArr[i][j][0].length; k++) {
            if (!nodesInTree.includes(combArr[i][j][0][k])) {
              terminalNodes.push(combArr[i][j][0][k]);
            }
          }
        }

        let duplicates = [];

        for (let i = 0; i < terminalNodes.length; i++) {
          if (!duplicates.includes(terminalNodes[i])) {
            duplicates.push(terminalNodes[i]);
          }
        }

        if (terminalNodes.length !== duplicates.length) {
          combArr = combArr.slice(0, i).concat(combArr.slice(i + 1));
          i--;
        }
      }
    }

    possibleConnectionsCombArr.push(...combArr);
  }

  for (let i = 0; i < possibleConnectionsCombArr.length; i++) {
    const nextNodes = [];

    for (let j = 0; j < possibleConnectionsCombArr[i].length; j++) {
      const currentNode = possibleConnectionsCombArr[i][j][0].filter((el) => {
        return !nodesInTree.includes(el);
      });
      nextNodes.push(...currentNode);
    }

    const filteredNodes = nodes.filter((el) => {
      return !nextNodes.includes(el);
    });

    minimumSpanningTree(
      filteredNodes,
      edges,
      nodesInTree.concat(nextNodes),
      edgesInTree.concat(possibleConnectionsCombArr[i])
    );
  }
}

minimumSpanningTree(graph[0], graph[1], [2]);

for (let i = 0; i < spanningTrees.length; i++) {
  console.log(JSON.stringify(spanningTrees[i]));
}

spanningTrees.sort((a, b) => a[1] - b[1]);
