class Node{
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Pair {
    constructor(node,state){
        this.node = node;
        this.state = state;
    }
}

const createBinaryTree = (arr) =>{
    const root = new Node(arr[0],null,null);
    const rp = new Pair(root,1);

    const stack = [];
    stack.push(rp);
    let index = 0;
    while(stack.length > 0){
        const top = stack[stack.length-1];
        if(top.state === 1){
            // left
            index++;
            const val = arr[index];
            if(val !== null){
                top.node.left = new Node(val, null, null);
                const leftPair = new Pair(top.node.left, 1);
                stack.push(leftPair);
            }else{
                top.node.left = null;
            }
            top.state++;
        }else if(top.state === 2){
            // right
            index++;
            const val = arr[index];
            if(val !== null){
                top.node.right = new Node(val, null, null);
                const rightPair = new Pair(top.node.right, 1);
                stack.push(rightPair);
            }else{
                top.node.right = null;
            }
            top.state++;
        }else{
            // pop
            stack.pop();
        }
        // index ++;
    }
    return root;
}
const display = (node) =>{
    if(node===null) return;z
    let str = "";
    str += node.left === null ? "." : node.left.data +"";
    str += " <- "+node.data+" -> ";
    str += node.right === null ? "." : node.right.data+"";
    console.log(str+"\n");

    display(node.left);
    display(node.right);
}

const traversal = (node) =>{
    if(node===null) return;
    console.log("PRE=>"+node.data)
    traversal(node.left);
    console.log("IN=>"+node.data)
    traversal(node.right);
    console.log("POST=>"+node.data)
}


const levelOrderTraversal = (node) =>{
    const queue = [];
    queue.push(node);
    let path ="";
    while(queue.length > 0 ){
        const count = queue.length;
        for(let i = 0; i < count; i++){
            node = queue.shift();
            path += node.data+" ";

            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        path += "\n";
    }
    console.log(path);
}

const iterativePrePostInTraversal = (node) =>{
    const stack = [];
    const rtp = new Pair(node,1);
    stack.push(rtp);
    let pre ="";
    let ino = "";
    let post = "";

    while(stack.length > 0){
        const top = stack[stack.length - 1];
        if(top.state === 1){ // pre state ++ , goto left
            pre += top.node.data + " ";
            top.state ++;
            if(top.node.left){
                const lp = new Pair(top.node.left,1);
                stack.push(lp);
            }
        }else if(top.state === 2){ // InOrder state ++, goto right
            ino += top.node.data + " ";
            top.state ++;
            if(top.node.right){
                const rp = new Pair(top.node.right,1);
                stack.push(rp);
            }
        }else{  //post , pop
            post += top.node.data + " ";
            stack.pop();
        }
    }
    console.log('Pre => ',pre)
    console.log('InO => ',ino)
    console.log('Post => ',post)
}
const rootPath = [];
const findNodeAndRootToPath = (node, data)=>{
    if(node === null) return false;

    if(node.data === data){
        rootPath.push(node.data);
        return true
    };

    const filc = findNodeAndRootToPath(node.left, data);
    if(filc) {
        rootPath.push(node.data);
        return true;
    }

    const firc = findNodeAndRootToPath(node.right, data);
    if(firc){
        rootPath.push(node.data);
        return true;
    }
    return false;
}

const printKLevelDown = (node,k) =>{
    if(node === null || k < 0) return;

    if(k === 0){
        console.log(node.data+" ");
    }
    printKLevelDown(node.left,k-1);
    printKLevelDown(node.right,k-1);
}


const eulerArr =[50,25,12,null,null,37,30,null,null,null,75,62,null,70,null,null,87,null,null]
const binaryTree =  createBinaryTree(eulerArr);
// console.log(JSON.stringify(binaryTree));
// display(binaryTree);
// traversal(binaryTree)
// levelOrderTraversal(binaryTree);
// iterativePrePostInTraversal(binaryTree)
// console.log(findNodeAndRootToPath(binaryTree,70));
// console.log(rootPath);
printKLevelDown(binaryTree,0);