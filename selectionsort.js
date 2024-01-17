import { performance } from 'perf_hooks';
import { generateMostlySortedDataset, generateRandomDataset } from './createdataset.js';

function sort(arr){
  const start = performance.now();
  for(var i = 0; i < arr.length; i++){
    var smallest = arr[i];
    var index;
    for(var j = i; j < arr.length; j++){
      if(arr[j + 1] === undefined) break;
      if(arr[j + 1] < smallest){
        smallest = arr[j + 1];
        index = j + 1;
      }
    }
    if(arr[i] !== smallest){
      arr[index] = arr[i];
      arr[i] = smallest;
    }
  }
  //console.log(arr);
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
}

let mostlySortedDataset = generateMostlySortedDataset(5000);
let randomlyShuffledDataset = generateRandomDataset(5000);

console.log("\n")
console.log("Mostly sorted data:")
sort(mostlySortedDataset)
console.log("\n")
console.log("Shuffled data:")
sort(randomlyShuffledDataset)
console.log("\n")