// Name : Franklin Miranda
// Date : 5/15/2023
// Description: An algorithm to loop n number of times

const n = 3;

const counter = [];

const indexArr = [];

for (let i = 0; i < n; i++) {
  indexArr.push(0);
}

console.log(indexArr);

function nestedForLoop(n, k) {
  for (let i = k; i > 0; i--) {
    if (n > 0) {
      if (n === 1) {
        counter.push(1);

        indexArr[indexArr.length - n] += 1;

        console.log(indexArr);

        for (let i = 0; i <= indexArr.length; i++) {
          for (let j = 0; j < indexArr.length; j++) {
            



          }
        }
      }

      nestedForLoop(n - 1, k);
    }
  }

  return;
}

nestedForLoop(n, n);

console.log(counter.length);

const count = [];

for (let i = 1; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    for (let k = j + 1; k < 9; k++) {
      for (let l = k + 1; l < 9; l++) {
        for (let g = l + 1; g < 9; g++) {
          for (let f = g + 1; f < 9; f++) {
            count.push(1);
          }
        }
      }
    }
  }
}

//console.log(count.length);
