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
  


  const end = performance.now();
  console.log(`Execution time: ${(end - start).toFixed(2)} ms`);
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

console.log(mergeSortedArrays([1,3,5,7,9], [2,4,6,8,10]));

let mostlySortedDataset = generateMostlySortedDataset(10000);
let randomlyShuffledDataset =   generateRandomDataset(10000);

console.log("\n")
console.log("Mostly sorted data:")
sort(mostlySortedDataset)
console.log("\n")
console.log("Shuffled data:")
sort(randomlyShuffledDataset)
console.log("\n")
