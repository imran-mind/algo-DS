

function Node(val){
    this.left = null;
    this.right = null;
    this.val = val;
}

const levelOrderTraversal = (root) =>{
    const queue = [];
    queue.push(root);

    const ans = [];
    while(queue.length > 0){
        const list = [];
        const n = queue.length;
        
        for(let i=0; i<n; i++){
            const node = queue.shift(); // {left: null, right: null, val: val};
            list.push(node.val);

            if(node.left)
                queue.push(node.left);

            if(node.right)
                queue.push(node.right);
        }
        ans.push(list);
    }
    return ans;
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

const res = levelOrderTraversal(root);
console.log(res);
