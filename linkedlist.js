class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val){
    let node = new Node(val);
    if(!this.head){
      this.head = node;
      this.tail = node;
    }
    else{
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
  }
  pop(){
    if(!this.head) return undefined;
    let current = this.head;
    let previousNode = null;
    while(current.next){
      previousNode = current;
      current = current.next;
    }
    this.tail = previousNode;
    this.tail.next = null;
    this.length -= 1;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined;
    let head = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if(this.length === 0){
      this.tail = null;
    }
    return head;
  }
}

let list = new SinglyLinkedList();
list.push("a");
list.push("b");
list.push("c");
// console.log(list);
// console.log(list.pop());
// console.log(list);
console.log(list.shift());
console.log(list);