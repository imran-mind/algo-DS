

function Node(val){
    this.left = null;
    this.right = null;
    this.val = val;
}


const verticalLevelTraversal = (root) =>{
    const ansList = [];
    const map = {}; // vertical_leve-> list
    const queue = [];

    queue.push({node:root, dist: 0});
    let min_val = Number.MAX_VALUE;
    let max_val = Number.MIN_VALUE;

    while(queue.length){
        const pair = queue.shift(); //{node: root, dist: 0};
        const node = pair.node;
        const ver_level = pair.dist;

        if(map[ver_level] && map[ver_level].length){
            map[ver_level].push(node.val);
        }else{
            map[ver_level] = [];
            map[ver_level].push(node.val);
        }
        min_val = Math.min(min_val, ver_level);
        max_val = Math.max(max_val, ver_level);

        if(node.left){
            queue.push({node: node.left, dist: ver_level - 1});
        }
        if(node.right){
            queue.push({node: node.right, dist: ver_level + 1});
        }
    }
    for(let i=min_val; i<=max_val; i++){
        ansList.push(map[i])
    }
    return ansList;
}



const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

root.left = node2;
root.right = node3;

const res = verticalLevelTraversal(root);
console.log(res);
