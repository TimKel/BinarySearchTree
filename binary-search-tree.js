class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    
    
    if(this.root === null){
      this.root = new Node(val);
    }

    let currentNode = this.root;

    while(true){
      if(val < currentNode.val){
        if(currentNode.left === null){
          currentNode.left = new Node(val);
          return this;
        }else{
          currentNode = currentNode.left;
        }
      }else if(val > currentNode.val){
        if(currentNode.right === null){
          currentNode.right = new Node(val);
          return this;
        }else{
          currentNode = currentNode.right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {

    if(!this.root) return -1;

    if(this.root === null){
      this.root = new Node(val);
      return this;
    }

    if(val < current.val){
      if(current.left === null){
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left)
    }else {
      if(current.right === null){
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right)
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    if(!this.root) return -1;

    let currentNode = this.root;

    while(currentNode){
      if(currentNode.val === val) return currentNode;
      if(currentNode.val < val){
        currentNode = currentNode.right;
      }else{
        currentNode = currentNode.left;
      }
    }

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {

    if(this.root === null) return undefined;

    if(val < current.val){
      if(current.left === null) return undefined;
      return this.findRecursively(val, current.left)
    } else if(val > current.val){
      if(current.right === null) return undefined;
      return this.findRecursively(val, current.right)
    }
    return current;

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node){
      data.push(node.val); //visit
      node.left && traverse(node.left)
      node.right && traverse(node.right)
    }

    traverse(current);
    return data;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left); // go left if there's a left
      data.push(node.val); // visit
      node.right && traverse(node.right); // go right if there's a right
    }

    traverse(current);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left); // go left if there's a left
      node.right && traverse(node.right); // go right if there's a right
      data.push(node.val); // visit
    }

    traverse(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

// const root = new Node(5);

// let bst = new BinarySearchTree(root);
// console.log("root", root)
// console.log("bst", bst)

// bst.insert(6);
// bst.insert(7);
// bst.insert(1);
// bst.insert(2);
// bst.insert(3);
// console.log("bst", bst)
// console.log(bst.root.right.right)

// console.log("RECURSIVE Insert**********************")

// const recRoot = new Node(10);

// let recBst = new BinarySearchTree(recRoot);
// console.log("root", recRoot)
// console.log("bst", recBst)
// recBst.insertRecursively(12)
// recBst.insertRecursively(13)
// recBst.insertRecursively(7)
// recBst.insertRecursively(8)

// console.log("bst", recBst)
// console.log("bst-Right", recBst.root.right)
// console.log("bst-Left", recBst.root.left)

// console.log(recBst.find(12))
// console.log(recBst.find(7))
// console.log(recBst.find(10))

// console.log("findRecursive", recBst.findRecursively(12))
// console.log("TRAVERSE", recBst.dfsPreOrder())


module.exports = BinarySearchTree;
