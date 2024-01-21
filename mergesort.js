import { performance } from 'perf_hooks';
import { generateMostlySortedDataset, generateRandomDataset } from './createdataset.js';
/*
Size: 100000
Mostly sorted data:
Execution time: 22.36 ms

Shuffled data:
Execution time: 21.47 ms
*/
function sort(arr){
  if(arr.length <= 1){
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, mid);
  const secondHalf = arr.slice(mid);
  return mergeSortedArrays(sort(firstHalf), sort(secondHalf))
}
function mergeSortedArrays(n, m) {
    let i = 0, j = 0;
    let arr = [];

    while (i <= n.length - 1 && j <= m.length - 1) {
        if (n[i] <= m[j]) {
            arr.push(n[i]);
            i++;
        } else {
            arr.push(m[j]);
            j++;
        }
    }

    while (i <= n.length - 1) {
        arr.push(n[i]);
        i++;
    }

    while (j <= m.length - 1) {
        arr.push(m[j]);
        j++;
    }
    return arr;
}

let mostlySortedDataset = generateMostlySortedDataset(100000);
let randomlyShuffledDataset =   generateRandomDataset(100000);

console.log("\n")
console.log("Mostly sorted data:")
const start = performance.now();
sort(mostlySortedDataset)
const end = performance.now();
//console.log(sort(mostlySortedDataset));
console.log(`Execution time: ${(end - start).toFixed(2)} ms`);
console.log("\n")
console.log("Shuffled data:")
const start2 = performance.now();
sort(randomlyShuffledDataset)
//console.log(sort(randomlyShuffledDataset));
const end2 = performance.now();
console.log(`Execution time: ${(end2 - start2).toFixed(2)} ms`);
console.log("\n")
