import { performance } from 'perf_hooks';
import { generateMostlySortedDataset, generateRandomDataset } from './createdataset.js';

function sort(arr){
  const start = performance.now();
  for(var i = 1; i < arr.length; i++){
    var current = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > current; j--){
      //j+1 is i (current)
      //i is already saved as current
      //j is current index
      arr[j+1] = arr[j];
    }
    arr[j+1] = current;
  }
  console.log(arr);
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
}

let mostlySortedDataset = generateMostlySortedDataset(10);
let randomlyShuffledDataset =   generateRandomDataset(10);

console.log("\n")
console.log("Mostly sorted data:")
sort(mostlySortedDataset)
console.log("\n")
console.log("Shuffled data:")
sort(randomlyShuffledDataset)
console.log("\n")
