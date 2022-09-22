

function Node(val){
    this.left = null;
    this.right = null;
    this.val = val;
}

const rightViewOfBinaryTree = (root) =>{
    const queue = [];
    queue.push(root);

    const rightViewList = [];
    
    while(queue.length){
        const n = queue.length;
        const list = []; //for storing levels

        for(let i=0; i<n; i++){
            const node = queue.shift(); // {val:val, left:null, right:null};
            const val = node.val;
            list.push(val);

            //if left node is there then push into queue
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
    
        if(list.length){
            const lastIdx = list.length - 1;
            rightViewList.push(list[lastIdx]);
        }
    }
    return rightViewList;
}



const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node3.left = node4;
node3.right = node5;

root.left = node2;
root.right = node3;

const res = rightViewOfBinaryTree(root);
console.log(res);
