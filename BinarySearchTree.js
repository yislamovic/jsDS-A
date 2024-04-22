
class Node {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        }
        var current = this.root;
        while (true) {
            if (node.val === current.val) return undefined;
            if (current.val > node.val) {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = node;
                    break;
                }
            } else {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = node;
                    break;
                }
            }
        }
        return this;
    }
    find(val){
        var current = this.root;
        while(current){
            if(current.val === val) break;
            if(val < current.val){
                current = current.left
            }
            else{
                current = current.right;
            }
        }
        return (current) ? true : false;
    }
    BFS(){
        var q = [], data = [];
        var node = this.root;
        q.push(node);
        while(q.length)
        {
            node = q.shift();
            data.push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.val);
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.val);
        }
        traverse(this.root);
        return data;
    }

    printTree() {
        this.printNode(this.root, 0);
    }

    printNode(node, level) {
        if (node === null) return;

        this.printNode(node.right, level + 1);

        let result = "";
        for (let i = 0; i < level; i++) {
            result += "    ";
        }
        console.log(result + node.val);

        this.printNode(node.left, level + 1);
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(20);
bst.printTree();
console.log(bst.DFSPostOrder())
console.log("END")
