const {
  performance
} = require('perf_hooks');
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

let mostlySortedDataset = generateMostlySortedDataset(5000);
let randomlyShuffledDataset = generateRandomDataset(5000);

//console.log("Mostly Sorted Dataset:", mostlySortedDataset);
//console.log("Randomly Shuffled Dataset:", randomlyShuffledDataset);
console.log("\n")
console.log("Mostly sorted data:")
sort(mostlySortedDataset)
console.log("\n")
console.log("Shuffled data:")
sort(randomlyShuffledDataset)
console.log("\n")