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
  unshift(val){
    let node = new Node(val);
    if(!this.head){
      this.head = node;
      this.tail = node;
    }
    else{
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
    return this;
  }
  get(val){
    if(val < 0 || val >= this.length){
      return null;
    }
    let currentNode = this.head;
    for(let i = 0; i < val; i++){
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  set(index, val){
    let node = this.get(index);
    if(node){
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val){
    if(this.length < index > 0){
      return false;
    }
    if(index === this.length){
      return !!this.push(val);
    }
    if(index === 0){
      return !!this.unshift(val);
    }
    let node = new Node(val);
    let previousNode = this.get(index - 1);
    let temp = previousNode.next;
    previousNode.next = node;
    node.next = temp;
    this.length += 1;
    return true;
  }
  remove(index){
    if(this.length < index > 0){
      return undefined;
    }
    if(index === this.length - 1){
      return this.pop();
    }
    if(index === 0){
      return this.shift();
    }
    let node = this.get(index - 1);
    let removedNode = node.next;
    node.next = removedNode.next;
    this.length -= 1;
    return removedNode;
  }
  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next = null, prev = null;
    for(let i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print(){
    let arr = [];
    let current = this.head;
    while(current){
      arr.push(current.val)
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push("a");
list.push("b");
list.push("c");
list.reverse();
list.print();
// console.log(list.insert(1,"unknown"));
// console.log(list.get(1));
// console.log(list.remove(1));
// console.log(list.get(1));

