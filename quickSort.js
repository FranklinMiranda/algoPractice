// Name : Franklin Miranda
// Date : 5/7/2023
// Description: A quick sort algorithm

function partition(arr, low, high) {
  pivot = arr[high];

  i = low - 1;

  for (j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      let swap = arr[j];
      arr[j] = arr[i];
      arr[i] = swap;
      console.log(arr)
    }
  }
  let swap = arr[high];
  arr[high] = arr[i + 1];
  arr[i + 1] = swap;
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

const arr = [60, 10, 80, 30, 90, 40, 50, 100, 70];

quickSort(arr, 0, arr.length - 1);

console.log(arr);
