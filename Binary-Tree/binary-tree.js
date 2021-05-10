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
    if(node===null) return;
    let str = "";
    str += node.left === null ? "." : node.left.data +"";
    str += " <- "+node.data+" -> ";
    str += node.right === null ? "." : node.right.data+"";
    console.log(str+"\n");

    display(node.left);
    display(node.right);
}


const eulerArr =[50,25,12,null,null,37,30,null,null,null,75,62,null,70,null,null,87,null,null]
const binaryTree =  createBinaryTree(eulerArr);
console.log(JSON.stringify(binaryTree));
display(binaryTree);