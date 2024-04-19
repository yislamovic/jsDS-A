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
    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tails = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length -= 1;
        return oldHead;
    }
    unshift(val){
        var node = new Node(val);
        if(!this.head) {
            this.push(val);
            return this;
        }
        else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length += 1;
        return this;
    }
}

var ls = new DoublyLinkedList();
// ls.push(1);
// ls.push(2);
// ls.push(3);
ls.unshift(0);
console.log(ls)

// console.log(ls.shift())
// console.log(ls.shift())
// console.log(ls.shift())
// console.log(ls)






