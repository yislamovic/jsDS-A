class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}
export default class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let node = new Node(val, priority)
        this.values.push(node);
        var index = this.values.length - 1;
        while(index > 0){
            var parentIndex = Math.floor((index - 1) / 2);
            if(this.values[parentIndex].priority < priority){
                var temp = this.values[parentIndex];
                this.values[parentIndex] = node;
                this.values[index] = temp;
                index = parentIndex;
            } else break;
        }
    }
    dequeue(){
        const length = this.values.length;
        const root = this.values[0];
        let last = this.values.pop();
        if(length <= 1) return last;
        this.values[0] = last;
        let idx = 0;
        while(true){
            let current = this.values[idx];
            let idxLeft = idx * 2 + 1;
            let idxRight = idx * 2 + 2;
            let leftElement = !this.values[idxLeft] ? new Node(null, null) : this.values[idxLeft];
            let rightElement = !this.values[idxRight] ? new Node(null, null) : this.values[idxRight];
            let greaterElement, greaterIdx;
            
            if(leftElement.priority > rightElement.priority){
                greaterElement = leftElement;
                greaterIdx = idxLeft;
            }
            else{
                greaterElement = rightElement;
                greaterIdx = idxRight;
            }

            if(current.priority < greaterElement.priority){
                this.values[greaterIdx] = current;
                this.values[idx] = greaterElement;
                idx = greaterIdx;
            } else break;
        }
        return root;
    }
}
// var er = new PriorityQueue();
// er.enqueue("common cold", 1);
// er.enqueue("gunshot wound", 5);
// er.enqueue("high fever", 2);
// console.log(er.dequeue());
// console.log(er.values);
// console.log("END")
