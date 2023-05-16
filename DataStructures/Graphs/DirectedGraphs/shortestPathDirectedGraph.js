// Name : Franklin Miranda
// Date : 5/12/2023
// Description: A shortest path of a directed graph

const graph = [
  [1, 2, 3, 4, 5],
  [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [1, 5],
    [5, 3],
    [5, 4],
  ],
];

function pathPermutation(arr) {
  const paths = new Array(...arr);

  

  paths.forEach((el) => {
    for (let i = 0; i <= arr.length; i++) {
        if (i === arr.length) {i = 0}


      if ((el[el.length - 1] === arr[i][0]) && !el.includes(arr[i][1])) {
        el.push(arr[i][1]);
      }
    }
  });

  console.log(JSON.stringify(paths))
}

pathPermutation(graph[1]);

// function shortest(edges, start, end) {
//   let arr = new Array(...edges);
//   let startExists = false;
//   let endExists = false;

//   if (start === end) {
//     pathLength = 0;
//     return pathLength;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (start === arr[i][0] && end === arr[i][1]) {
//       pathLength = 1;
//       return pathLength;
//     }

//     if (start === arr[i][0]) {
//       startExists = true;
//     }
//     if (end === arr[i][1]) {
//       endExists = true;
//     }
//   }

//   if (startExists === false || endExists === false) {
//     pathLength = -1;
//     return pathLength;
//   }
// }

// function shortestPath(graph) {
//   const result = [];

//   graph[0].forEach((elementi, i) => {
//     result.push([]);

//     graph[0].forEach((elementj, j) => {
//       let pathLen = -1;

//       if (elementi === elementj) {
//         pathLen = 0;
//         result[i].push(pathLen);
//       } else if (elementi !== elementj) {
//         // This for loop finds if there is a arrow connecting elementi and elementj
//         for (let k = 0; k <= graph[1].length; k++) {
//           if (graph[1][k][0] === elementi && graph[1][k][1] === elementj) {
//             pathLen = 1;
//             result[i].push(pathLen);
//             break;
//           }
//         }

//         if (!result[i][j]) {
//           for (let l = 0; l <= graph[1].length; l++) {
//             if (graph[1][k][0] === elementi) {
//             }
//           }
//         }
//       }
//     });
//   });
// }
