class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        var node = new Node(val);
        if(!this.length) {
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }
}

var ls = new DoublyLinkedList();
ls.push(1);
console.log(ls.push(2))
console.log(ls.tail)

