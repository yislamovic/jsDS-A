import { performance } from 'perf_hooks';
import { generateMostlySortedDataset, generateRandomDataset } from './createdataset.js';

/*
Size: 10000
Mostly sorted data:
Execution time: 65.68 ms

Shuffled data:
Execution time: 63.66 ms
*/
function sort(arr) {
  const start = performance.now();
  var count = arr.length;
  var swap = false;
  do {
    swap = false;
    for (var i = 0; i < count - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swap = true;
      }
    }
    count--;
  } while (swap);
  const end = performance.now();
  console.log(`Execution time: ${(end - start).toFixed(2)} ms`);
}

const mostlySortedDataset = generateMostlySortedDataset(10000);
const randomlyShuffledDataset =   generateRandomDataset(10000);

console.log("\n")
console.log("Mostly sorted data:")
sort(mostlySortedDataset)
console.log("\n")
console.log("Shuffled data:")
sort(randomlyShuffledDataset)
console.log("\n")

//my first implementation of bubblesort
/*
Size: 100,000
Performance average:
Mostly sorted data:
Execution time: 16354.787041 ms

Shuffled data:
Execution time: 28664.322042000003 ms
*/
function naivesort(arr){
  const start = performance.now();
  var count = arr.length;
  var swap = false;
  for(var i = 0; i < count; i++){
    if(i === 0){
      swap = false;
    }
    if(arr[i] > arr[i+1]){
      var temp = arr[i + 1];
      arr[i+1] = arr[i];
      arr[i] = temp;
      swap = true;
    }
    if(i === count-1){
      i = -1
      count--;
      if(!swap) break;
    }
  }
  const end = performance.now();
  console.log(`Execution time: ${(end - start).toFixed(2)} ms`);
}