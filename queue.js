class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var node = new Node(val);
        if(!this.size){
            this.first = node;
            this.last = node;
        }
        else{
            this.last.next = node;
            this.last = node;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.size === 1)
        {
            this.first = null;
            this.last = null;
        }
        else{
            this.first = this.first.next;
        }
        this.size--;
        return temp.val;
    }
}

var q = new Queue();
q.enqueue(1)
q.enqueue(2)
console.log(q.dequeue())
console.log(q.dequeue())
console.log(q.dequeue())
console.log("END")