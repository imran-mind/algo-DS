
function Node(val){
    this.left = null;
    this.right = null;
    this.val = val;
}

//    -2 -1 0 1 2
/**
 * 
 * {
 *  -1: [],
 *   0: [],
 *   1: []
 * }
 */
const topViewOfBinaryTree = (root) =>{
    const ansList = [];
    const queue = [];
    const map = {}; // {ver_level: []};

    queue.push({node: root, level: 0});
    let min_val = Number.MAX_VALUE;
    let max_val = Number.MIN_VALUE;
    while(queue.length){
        const pair = queue.shift(); //{node: root, level: 0}
        const node = pair.node;
        const ver_level = pair.level;

        if(map[ver_level] && map[ver_level].length){
            map[ver_level].push(node.val);
        }else{
            map[ver_level] = [];
            map[ver_level].push(node.val);
        }
        if(node.left){
            queue.push({node: node.left, level: ver_level - 1});
        }
        if(node.right){
            queue.push({node: node.right, level: ver_level + 1});
        }
        min_val = Math.min(min_val, ver_level);
        max_val = Math.max(max_val, ver_level);
    }

    for(let i=min_val; i<=max_val; i++){
        if(map[i].length){
            ansList.push(map[i][0]);
        }
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

const res = topViewOfBinaryTree(root);
console.log(res);

// for example 
//         5
//       /   \
//     2      12
//   /  \     / \
// 1     3   9   21
// [1,2,5,12,21]
