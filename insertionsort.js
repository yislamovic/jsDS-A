const {
  performance
} = require('perf_hooks');
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
  console.log(arr);
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

let mostlySortedDataset = generateMostlySortedDataset(500);
let randomlyShuffledDataset = generateRandomDataset(500);

//console.log("Mostly Sorted Dataset:", mostlySortedDataset);
//console.log("Randomly Shuffled Dataset:", randomlyShuffledDataset);
console.log("\n")
console.log("Mostly sorted data:")
sort(mostlySortedDataset)
console.log("\n")
console.log("Shuffled data:")
sort(randomlyShuffledDataset)
console.log("\n")
