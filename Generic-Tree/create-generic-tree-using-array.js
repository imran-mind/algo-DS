class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

const createTree = (arr) =>{
    let stack = [];
    let root = new TreeNode(null);
    arr.forEach((item)=>{
        if(item === -1){
            stack.pop();
        }else{
            const node = new TreeNode(item);
            if(stack.length > 0){
                stack[stack.length-1].children.push(node);
            }else{
                root = node;
            }
            stack.push(node);
        }
    })
    return root;
}

const display= (root)=>{
    let str = root.data+"=>";
    root.children.forEach((child)=>{
        str = str + child.data +", ";
    });
    console.log(str);
    root.children.forEach((child)=>{
        display(child)
    });
}

const size = (root)=>{
    let s = 0;
    root.children.forEach(child=>{
        const cs = size(child);
        s = s + cs;
    })
    s = s + 1;
    return s;
}

const maxVal = (root)=>{
    let max = Number.MIN_VALUE;
    root.children.forEach(child=>{
        const cm = maxVal(child);
        max = Math.max(cm ,max);
    })
    max = Math.max(max, root.data);
    return max;
}

const height = (root)=>{
    let ht = -1;
    root.children.forEach(child=>{
        const ch = height(child);
        ht = Math.max(ch,ht);
    })
    ht = ht + 1;
    return ht;
}

const traversal = (root)=>{
    console.log('Node Pre ',root.data);
    root.children.forEach(child=>{
        traversal(child);
    });
    console.log('Node Post ',root.data);
}

const levelOrder = (root) =>{
    const queue = [];
    queue.unshift(root);
    let level = "";
    while(queue.length > 0){
        root = queue.pop();
        level = level + root.data+" ";
        root.children.forEach(child=>{
            queue.unshift(child);
        });
    }
    console.log(level)
}
// const eulerArr = [10,20,-1,30,-1,-1];
const eulerArr = [10,20,40,-1,50,-1,-1,30,60,-1,70,-1,-1,-1];
const rootPath = createTree(eulerArr);
// display(rootPath);
// console.log(size(rootPath))
// console.log(maxVal(rootPath))
//  console.log(height(rootPath))
// traversal(rootPath);
levelOrder(rootPath)
