function generateMostlySortedDataset(size) {
  const dataset = [];
  for (let i = 1; i <= size; i++) {
    dataset.push(i);
  }
  for (let i = 0; i < size / 10; i++) {
    const index1 = Math.floor(Math.random() * size);
    const index2 = Math.floor(Math.random() * size);
    [dataset[index1], dataset[index2]] = [dataset[index2], dataset[index1]];
  }
  return dataset;
}

function generateRandomDataset(size) {
  const dataset = [];
  for (let i = 1; i <= size; i++) {
    dataset.push(i);
  }
  for (let i = size - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dataset[i], dataset[j]] = [dataset[j], dataset[i]];
  }
  return dataset;
}
export {generateMostlySortedDataset, generateRandomDataset}