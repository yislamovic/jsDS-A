import { performance } from 'perf_hooks';
import { generateMostlySortedDataset, generateRandomDataset } from './createdataset.js';
/*
Size: 10000
Mostly sorted data:
Execution time: 7.41 ms

Shuffled data:
Execution time: 24.10 ms
*/
function sort(arr){
  const start = performance.now();
  for(var i = 1; i < arr.length; i++){
    var key = arr[i];
    var j = i - 1;
    while(j >= 0){
      if(arr[j] > key){
        //overwriting the index ahead
        //this is because the key is saved and never lost
        //what this is doing essentially is shifting all elements to the right
        //so that in the end the j+1 index can be safely overwritten..
        //sorted with the key value
        arr[j+1] = arr[j]
      }
      else break;
      j--
    }
    //this places and finaly sorts the arr[i] value in place
    arr[j+1] = key;
  }
  //console.log(arr);
  const end = performance.now();
  console.log(`Execution time: ${(end - start).toFixed(2)} ms`);
}

let mostlySortedDataset = generateMostlySortedDataset(10000);
let randomlyShuffledDataset =   generateRandomDataset(10000);

console.log("\n")
console.log("Mostly sorted data:")
sort(mostlySortedDataset)
console.log("\n")
console.log("Shuffled data:")
sort(randomlyShuffledDataset)
console.log("\n")
