// const {
//   performance
// } = require('perf_hooks');
import { performance } from 'perf_hooks';
import { generateMostlySortedDataset, generateRandomDataset } from './createdataset.js';

function sort(arr) {
  const start = performance.now();
  var count = arr.length;
  var swap = false;
  do {
    swap = false;
    for (var i = 0; i < count - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        //console.log("SWAP! ", arr[i], arr[i + 1]);
        var temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        swap = true;
      }
    }
    count--;
  } while (swap);
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
}

const mostlySortedDataset = generateMostlySortedDataset(100000);
const randomlyShuffledDataset = generateRandomDataset(100000);

console.log("\n")
console.log("Mostly sorted data:")
sort(mostlySortedDataset)
console.log("\n")
console.log("Shuffled data:")
sort(randomlyShuffledDataset)
console.log("\n")

//my first implementation of bubblesort
function naivesort(arr){
  const start = performance.now();
  var count = arr.length;
  var swap = false;
  for(var i = 0; i < count; i++){
    if(i === 0){
      swap = false;
    }
    if(arr[i] > arr[i+1]){
      console.log("SWAP! ", arr[i], arr[i+1]);
      var temp = arr[i + 1];
      arr[i+1] = arr[i];
      arr[i] = temp;
      swap = true;
    }
    if(i === count-1){
      console.log("Completed one loop!", arr)
      i = -1
      count--;
      console.log("Count: ", count)
      if(!swap) break;
    }
  }
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
}