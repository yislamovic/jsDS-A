import { performance } from 'perf_hooks';
import { generateMostlySortedDataset, generateRandomDataset } from './createdataset.js';
/*
Size: 100000
Mostly sorted data:
Execution time: 13.96 ms

Shuffled data:
Execution time: 9.04 ms
*/
function getDigit(num, i){
  return Math.floor(Math.abs(num) / match.pow(10, i)) % 10;
}
function digitCount(num){
  if(num == 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(arr){
  let maxDigits = 0;
  for(let i = 0 ; i < arr.length; i ++){
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits;
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
