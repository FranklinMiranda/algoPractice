// Name : Franklin Miranda
// Date : 5/16/2023
// Description: A indirect recursive function

function indirectRecursiveA(n) {
  if (n > 0) {
    console.log(n);

    indirectRecursiveB(n - 1);
  }
}

function indirectRecursiveB(n) {
    if (n > 1) {
        console.log(n)
        indirectRecursiveA(n / 2)
    }
}


indirectRecursiveA(20)


