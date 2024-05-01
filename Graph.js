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
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return;
        while(this.adjacencyList[vertex].length){
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }
    DFT(start){
        const result = [] ;
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function dfs(vertex){
            if(!vertex) return null; 
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => { // vertex A [B,C]
                if(!visited[neighbor]){ //Callstack => .foreach[B,C]
                    return dfs(neighbor)//          [B].foreach[A,D] //A will not be visited since it was already visited
                }                       
            })
        }
        dfs(start)
        return result;
    }
    DFTIterative(start){
        let stack = [], result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        stack.push(start);
        while(stack.length){
            let vertex = stack.pop();
            if(!visited[vertex]) {
                result.push(vertex);
                visited[vertex] = true;
                adjacencyList[vertex].forEach(vertices => {
                    stack.push(vertices);
                })
            }
            
        }
        return result;
    }
    BFT(start){
        let queue = [], result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        queue.push(start);
        while(queue.length){
            let vertex = queue.shift();
            if(!visited[vertex]){
                result.push(vertex);
                visited[vertex] = true;
                adjacencyList[vertex].forEach(vertices => {
                    queue.push(vertices);
                })
            }
        }
        return result;
    }
}
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

console.log(g.BFT("A"));
console.log(g.adjacencyList)
console.log("END")
