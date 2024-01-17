import { performance } from 'perf_hooks';
import { generateMostlySortedDataset, generateRandomDataset } from './createdataset.js';

function sort(arr){
  const start = performance.now();
  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  //console.log(arr);
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
}

let mostlySortedDataset = generateMostlySortedDataset(500);
let randomlyShuffledDataset = generateRandomDataset(500);

console.log("\n")
console.log("Mostly sorted data:")
sort(mostlySortedDataset)
console.log("\n")
console.log("Shuffled data:")
sort(randomlyShuffledDataset)
console.log("\n")
