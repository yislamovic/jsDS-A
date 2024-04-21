class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var pop = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }
        else{
            this.first = this.first.next;
        }
        this.size--;
        return pop.val; 
    }
}

var st = new Stack();
st.push(1)
st.push(2)
console.log(st.pop())
console.log(st.pop())
console.log(st.pop())
console.log("END")

