// Name : Franklin Miranda
// Date : 5/12/2023
// Description: An algorithm that determines the shortest path between any two nodes of a directed graph recursively

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

const graphPaths = allPathsPermutations(graph[0], graph[1]);

console.log(JSON.stringify(graphPaths));

// function shortestPath(paths, start, end) {
//   const result = paths.reduce((total, el) => {
//     if (start === el[0] && end === el[el.length - 1] && total === 0) {
//       return [...el];
//     } else if (start === el[0] && end === el[el.length - 1] && el.length < total.length) {
//       return [...el];
//     }
//   }, 0);
// }

//shortestPath(graphPaths, 9, 1);
