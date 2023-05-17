// Name : Franklin Miranda
// Date : 5/16/2023
// Description: An recursive algorithm for the Tower of Hanoi puzzle. Move all elements from array 1 to array 3. Move only 1 element per recursive call.
//              At no time should a smaller valued element have an index in an array less than any larger valued elements present in that array.

function TOH(n) {
  const arr = [[], [], []];

  for (let i = n; i > 0; i--) {
    arr[0].push(i);
  }

  return arr;
}

const arr = TOH(3);

console.log(JSON.stringify(arr));

function recursiveTOH(poleA, poleB, poleC) {
  if (poleA.length === 0 && poleB.length === 0) {
    return poleC;
  }

 if (poleA >)




return recursiveTOH(poleA, poleB, poleC)
}

recursiveTOH(arr[0], arr[1], arr[2]);
