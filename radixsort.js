import { performance } from 'perf_hooks';
import { generateMostlySortedDataset, generateRandomDataset } from './createdataset.js';
/*
Size: 10000000
Mostly sorted data:
Execution time: 1093.72 ms

Shuffled data:
Execution time: 1200.63 ms
*/
function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num){
  if(num == 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(arr){
  let maxDigits = 0;
  for(let i = 0 ; i < arr.length; i ++){
    maxDigits = Math.max(maxDigits, digitCount(arr[i]))
  }
  return maxDigits;
}
function sort(nums){
  let maxDigitCount = mostDigits(nums); 
  for(let k  = 0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length: 10}, () => [])
    for(let i = 0; i < nums.length; i++){
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
let mostlySortedDataset = generateMostlySortedDataset(10000000);
let randomlyShuffledDataset =   generateRandomDataset(10000000);

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
