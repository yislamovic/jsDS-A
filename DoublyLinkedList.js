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
    insert(val, index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var node = this.get(index - 1);
        var nextNode = node.next;

        node.next = newNode, newNode.prev = node;
        newNode.next = nextNode, nextNode.prev = newNode;
        this.length += 1;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length) return this.pop();

        var nodeToRemove = this.get(index);
        var nodeAhead = nodeToRemove.next;
        var nodeBefore = nodeToRemove.prev;

        nodeAhead.prev = nodeBefore;
        nodeBefore.next = nodeAhead;

        nodeToRemove.prev = null;
        nodeToRemove.next = null;

        this.length -= 1;
        return nodeToRemove;
    }
}

var ls = new DoublyLinkedList();
for(var i = 0; i < 10; i++){
    ls.push(i);
}
console.log(ls.insert("hello", 5));
console.log(ls.remove(5))
console.log(ls)
console.log("END")





