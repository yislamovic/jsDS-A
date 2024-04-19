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
    pop(){
        if(!this.head) return undefined;
        var tail = this.tail;

        if(this.length === 1){
            this.tail = null;
            this.head = null;
        }
        else{
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;
        }
        
        this.length -= 1;
        return tail;
    }
}

var ls = new DoublyLinkedList();
ls.push(1);
ls.push(2);
ls.push(3);

console.log(ls.pop())
console.log(ls)


