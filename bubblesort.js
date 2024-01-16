const {
  performance
} = require('perf_hooks');
// function sort(arr){
//   const start = performance.now();
//   var count = arr.length;
//   var swap = false;
//   for(var i = 0; i < count; i++){
//     if(i === 0){
//       swap = false;
//     }
//     if(arr[i] > arr[i+1]){
//       console.log("SWAP! ", arr[i], arr[i+1]);
//       var temp = arr[i + 1];
//       arr[i+1] = arr[i];
//       arr[i] = temp;
//       swap = true;
//     }
//     if(i === count-1){
//       console.log("Completed one loop!", arr)
//       i = -1
//       count--;
//       console.log("Count: ", count)
//       if(!swap) break;
//     }
//   }
//   const end = performance.now();
//   console.log(`Execution time: ${end - start} ms`);
// }
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
// Function to generate a mostly sorted dataset
function generateMostlySortedDataset(size) {
  const dataset = [];
  for (let i = 1; i <= size; i++) {
    dataset.push(i);
  }
  // Introduce a few random swaps to make it mostly sorted
  for (let i = 0; i < size / 10; i++) {
    const index1 = Math.floor(Math.random() * size);
    const index2 = Math.floor(Math.random() * size);
    [dataset[index1], dataset[index2]] = [dataset[index2], dataset[index1]];
  }
  return dataset;
}

// Function to generate a randomly shuffled dataset
function generateRandomDataset(size) {
  const dataset = [];
  for (let i = 1; i <= size; i++) {
    dataset.push(i);
  }
  // Shuffle the array
  for (let i = size - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dataset[i], dataset[j]] = [dataset[j], dataset[i]];
  }
  return dataset;
}

const mostlySortedDataset = generateMostlySortedDataset(100000);
const randomlyShuffledDataset = generateRandomDataset(100000);

//console.log("Mostly Sorted Dataset:", mostlySortedDataset);
//console.log("Randomly Shuffled Dataset:", randomlyShuffledDataset);

console.log("\n")
console.log("Mostly sorted data:")
sort(mostlySortedDataset)
console.log("\n")
console.log("Shuffled data:")
sort(randomlyShuffledDataset)
console.log("\n")
