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
console.log(bst.find(8))
console.log("END")
