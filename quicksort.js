import { performance } from 'perf_hooks';
import { generateMostlySortedDataset, generateRandomDataset } from './createdataset.js';
/*
Size: 100000
Mostly sorted data:
Execution time: 13.96 ms

Shuffled data:
Execution time: 9.04 ms
*/
function sort(arr, left = 0, right = arr.length - 1){
  if(left < right){
    let index = quicksort(arr, left, right);
    sort(arr, left, index-1);
    sort(arr, index+1, right);
  }
  return arr;
}
function quicksort(arr, start = 0, end = arr.length - 1){
  function swap(array, i, j){
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  let key = arr[start];
  let smallest = start;
  let i = start + 1;
  while(i <= end){
      if(key > arr[i]){
          smallest++;
          swap(arr, smallest, i);
      }
      i++;
  }
  swap(arr, start, smallest);
  //console.log(arr);
  return smallest;
}

let mostlySortedDataset = generateMostlySortedDataset(100000);
let randomlyShuffledDataset =   generateRandomDataset(100000);

console.log("\n");
console.log("Mostly sorted data:");
const start = performance.now();
sort(mostlySortedDataset);
//console.log(sort(mostlySortedDataset));
const end = performance.now();
console.log(`Execution time: ${(end - start).toFixed(2)} ms`);
console.log("\n");
console.log("Shuffled data:");
const start2 = performance.now();
sort(randomlyShuffledDataset);
//console.log(sort(randomlyShuffledDataset));
const end2 = performance.now();
console.log(`Execution time: ${(end2 - start2).toFixed(2)} ms`);
console.log("\n");
