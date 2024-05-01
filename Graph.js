class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(this.adjacencyList[vertex]) return;
        this.adjacencyList[vertex] = [];
    }
    addEdge(ver1, ver2){
        if(!this.adjacencyList[ver1] || !this.adjacencyList[ver2]) return;
        this.adjacencyList[ver1].push(ver2);
        this.adjacencyList[ver2].push(ver1);
    }
    removeEdge(ver1, ver2){
        if(!this.adjacencyList[ver1] || !this.adjacencyList[ver2]) return;
        let verArr1 = this.adjacencyList[ver1];
        let verArr2 = this.adjacencyList[ver2];

        this.adjacencyList[ver1] = this.filter(verArr1, ver2);
        this.adjacencyList[ver2] = this.filter(verArr2, ver1);    
    }
    filter(arr, vertex){
        let newArr = [];
        arr.forEach(x => 
            {
                if(x !== vertex) newArr.push(x);
            })
        return newArr;
    }
}
let g = new Graph();
g.addVertex("Toronto")
g.addVertex("Tokyo")
g.addVertex("San Fransisco")

g.addEdge("Toronto", "Tokyo")
g.addEdge("Tokyo", "San Fransisco")

g.removeEdge("Toronto", "Tokyo")
console.log(g.adjacencyList)
console.log("END")
