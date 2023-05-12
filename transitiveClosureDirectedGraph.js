// Name : Franklin Miranda
// Date : 5/12/2023
// Description: A transitive closure of a directed graph

const directedGraph = [
  [1, 2, 3, 4, 5],
  [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 1],
    [3, 2],
    [1, 4],
  ],
];

function transitiveClosure(graph) {
  const resultMatrix = [];
  for (let i = 0; i < graph[0].length; i++) {
    resultMatrix.push([]);
    for (let j = 0; j < graph[0].length; j++) {
      if (graph[0][j] === graph[0][i]) {
        resultMatrix[i].push(1);
      } else {
        for (let k = 0; k <= graph[1].length; k++) {
          if (k === graph[1].length) {
            resultMatrix[i].push(0);
          } else if (graph[1][k][0] === graph[0][i] && graph[1][k][1] === graph[0][j]) {
            resultMatrix[i].push(1);
            break;
          }
        }
      }
    }
  }
  return resultMatrix;
}

const resultMatrix1 = transitiveClosure(directedGraph);

console.log(JSON.stringify(resultMatrix1));
