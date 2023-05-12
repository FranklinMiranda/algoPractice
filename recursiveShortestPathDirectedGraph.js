// Name : Franklin Miranda
// Date : 5/12/2023
// Description: An algorithm that determines the shortest path between any two nodes of a directed graph recursively

const graph = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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

function allPathsPermutations(graphNodes, graphEdges) {
  const perm = [];
  let nodes = new Array(...graphNodes);
  const edges = new Array(...graphEdges);

  nodes = nodes.map((el) => {
    return [el];
  });

  function pathPermutations(path, edges) {
    if (path.length === nodes.length) {
      perm.push(path);
      return;
    }

    const paths = edges.reduce((total, el) => {
      if (!path.includes(el[1]) && el[0] === path[path.length - 1]) {
        return [...total, [...path, el[1]]];
      }
      return total;
    }, []);

    if (paths.length === 0) {
      perm.push(path);
      return;
    }

    let pathInPerm = false;

    for (let i = 0; i < perm.length; i++) {
      if (perm[i].length === path.length) {
        const equal = perm[i].every((el, i) => {
          return el === path[i];
        });

        if (equal === true) {
          pathInPerm = true;
          break;
        }
      }
    }

    if (pathInPerm === false) {
      perm.push(path);
    }

    paths.forEach((el) => {
      pathPermutations(el, edges);
    });
  }

  nodes.forEach((el) => {
    pathPermutations(el, edges);
  });

  return perm;
}

function shortestPath(paths, start, end) {
  const result = paths.filter((el) => {
    return start === el[0] && end === el[el.length - 1];
  });

  result.sort((a, b) => a.length - b.length);

  return result[0];
}

function shortestPathMatrix(graph) {
  const shortestPathMatrix = [];
  const nodes = new Array(...graph[0]);
  const edges = new Array(...graph[1]);
  const pathPermutations = allPathsPermutations(nodes, edges);

  for (let i = 0; i < nodes.length; i++) {
    shortestPathMatrix.push([]);

    for (let j = 0; j < nodes.length; j++) {
      const path = shortestPath(pathPermutations, nodes[i], nodes[j]);

      if (path === undefined) {
        shortestPathMatrix[i].push(-1);
      } else {
        shortestPathMatrix[i].push(path.length - 1);
      }
    }
  }
  return shortestPathMatrix;
}

console.log(JSON.stringify(shortestPathMatrix(graph)));
