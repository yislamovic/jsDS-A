import PriorityQueue from './PriorityQueue.js';
class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(ver1, ver2, weight){
        if(!this.adjacencyList[ver1] || !this.adjacencyList[ver2]) return;
        this.adjacencyList[ver1].push({node: ver2, weight: weight});
        this.adjacencyList[ver2].push({node: ver1, weight: weight});
    }
}
// var e = new PriorityQueue();
// e.enqueue("common cold", 1);
// e.enqueue("gunshot wound!!!", 5);
// e.enqueue("high fever", 2);
// console.log(e.dequeue());
// console.log(e.values);
// console.log("END")
let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("E");
g.addVertex("F");



g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("F", "E", 1);

console.log(g.adjacencyList)
console.log("END")







