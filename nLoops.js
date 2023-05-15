// Name : Franklin Miranda
// Date : 5/15/2023
// Description: An algorithm to loop n number of times

const n = 3;

const counter = [];

function nestedForLoop(n, k) {
  for (let i = 1; i <= k; i++) {
    if (n > 0) {
      if (n === 1) {counter.push(1)}
      nestedForLoop(n - 1, k);
    }
  }

  return;
}

nestedForLoop(4, 9);

console.log(counter.length)

const count = [];

for (let i = 1; i < 3; i++) {
  for (let j = 1; j < 3; j++) {
    for (let k = 1; k < 3; k++) {
      for (let l = 1; l < 3; l++) {
        for (let g = 1; g < 3; g++) {
          for (let f = 1; f < 3; f++) {
            count.push(1);
          }
        }
      }
    }
  }
}

//console.log(count.length);
