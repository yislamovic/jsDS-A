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
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length / 2){
            console.log("working from begining")
            count = 0;
            current = this.head;
            while(count != index){
                current = current.next;
                count++;
            }
        }
        else{
            console.log("working from end")
            count = this.length - 1;
            current = this.tail;
            while(count != index){
                current = current.prev;
                count--
            }
        }
        return current;
    }
    set(val, index){
        var node = this.get(index);
        if(node){
            node.val = val;
            return true;
        }
        else return false;
    }
}

var ls = new DoublyLinkedList();
for(var i = 0; i < 10; i++){
    ls.push(i);
}
console.log(ls.set(1,0));
console.log(ls.get(0))





