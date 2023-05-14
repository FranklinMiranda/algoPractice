// Name : Franklin Miranda
// Date : 5/13/2023
// Description: An implementation of the Floyd Warshall Algorithm for solving all pairs of shortest-path problems

var INF = 99999;

var graph = [
    [0, 5, INF, 10],
    [INF, 0, 3, INF],
    [INF, INF, 0, 1],
    [INF, INF, INF, 0],
  ];


function floydWarshall (graph) {
    const vertices = 4;


    const dist = Array.from(Array(vertices), () => new Array(vertices).fill(0))
    var i, j, k;

    for (i = 0; i < vertices; i++) {
        for (j = 0; j < vertices; j++) {
            dist[i][j] = graph[i][j];
        }
    }


    for (k = 0; k < vertices; k++) {
        for (i = 0; i < vertices; i++) {
            for (j = 0; j < vertices; j++ ) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

console.log(JSON.stringify(dist))









}

floydWarshall(graph)