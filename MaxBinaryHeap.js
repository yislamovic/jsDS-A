class MaxBinaryHeap{
    constructor(val){
        this.values = val;
    }
    insert(val){
        this.values.push(val);
        var index = this.values.length - 1;
        while(index > 0){
            var parentIndex = Math.floor((index - 1) / 2);
            if(this.values[parentIndex] < val){
                var temp = this.values[parentIndex];
                this.values[parentIndex] = val;
                this.values[index] = temp;
                index = parentIndex;
            } else break;
        }
    }
    remove(){
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
            let leftElement = !this.values[idxLeft] ? null : this.values[idxLeft];
            let rightElement = !this.values[idxRight] ? null : this.values[idxRight];
            let greaterElement, greaterIdx;
            if(leftElement > rightElement){
                greaterElement = leftElement;
                greaterIdx = idxLeft;
            }
            else{
                greaterElement = rightElement;
                greaterIdx = idxRight;
            }

            if(current < greaterElement){
                this.values[greaterIdx] = current;
                this.values[idx] = greaterElement;
                idx = greaterIdx;
            } else break;
        }
        return root;
    }
}
//var heap = new MaxBinaryHeap([100,90,80,70,50,60,30,20,10,40]);
var heap = new MaxBinaryHeap([55,39,41,18,27,12]);
//heap.insert(101);
//heap.insert(71);
//heap.insert(55);
//heap.insert(1);
//heap.insert(45);
//heap.insert(199);
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
console.log(heap.remove());

console.log(heap.values);
console.log("END")
