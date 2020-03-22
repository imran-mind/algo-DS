class Node{
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
  
    insert(value){
      const newNode = new Node(value);
      if(this.root === null){
        this.root = newNode;
        return this.root;
      }
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          // add Node to left position
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }else{
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  
    lookup(value){
      if(!this.root){
        return false;
      }
      let currentNode = this.root;
      while(currentNode){
        if (currentNode.value === value) {
          return {found: true, node: currentNode};
        } else {
          if(value < currentNode.value){
            currentNode = currentNode.left;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
      return {
        found: false,
        node: currentNode
        };
    }
  }
  
  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(9);
  bst.insert(11);
  bst.insert(8);
  bst.lookup(8);
  // console.log(JSON.stringify(bst))
