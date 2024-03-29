class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

const createTree = (arr) =>{
    console.log("createTree");
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

const levelOrderLinewise = (root)=>{
    let mq = [];
    let cq = [];
    mq.unshift(root);
    let level = "";
    while(mq.length > 0){
        root = mq.pop();
        // console.log('root ',root)
        level = level + root.data + " "; 
        root.children.forEach(child=>{
            cq.unshift(child);
        })
        if(mq.length === 0){
            level = level + "\n";
            mq = cq;
            cq = [];
        }
    }
    console.log(level);
}


const levelOrderZigZag = (root)=>{
    let ms = [];
    let cs = [];
    ms.push(root);
    let path = "";
    let level = 1;
    while(ms.length > 0){
        root = ms.pop();
        path = path + root.data+" ";

        if(level % 2 === 0){
            for(let i=root.children.length-1; i>=0; i--){
                cs.push(root.children[i])
            }
        }else{
             for(let i=0; i<root.children.length; i++){
                cs.push(root.children[i])
            }
        }
        if(ms.length === 0){
            path = path + "\n";
            ms = cs;
            cs = [];
            level++;
        }
        
    }
    console.log(path)
}


const levelOrderNullApproach = (root)=>{
    const queue = [];
    queue.push(root);
    queue.push(null);
    let path = "";
    while(queue.length > 0){
        root = queue.shift();
        if(root != null){
            path = path + root.data +" ";
            root.children.forEach(child=>{
                queue.push(child);
            })            
        }else{
           if(queue.length > 0){
                queue.push(null);
                path = path + "\n";
            }
        }
    }
    console.log(path);
}



const levelOrderCountApproach = (root) =>{
    const q = [];
    q.push(root);
    let path = "";
    while(q.length > 0){
        let len = q.length;
        for(let i=0; i<len; i++){
            root = q.shift();
            path = path + root.data+" ";
            root.children.forEach(child=>{
                q.push(child);
            })
        }
        path = path + "\n";
    }
    console.log(path)
}

const mirrorTree = (root) =>{
    root.children.forEach(child=>{
        mirrorTree(child);
    });
    root.children.reverse();
    // console.log('tree-> ',root)
}


const removeLeaf = (node) =>{
    for(let i=node.children.length-1; i>=0; i--){
        const childItem = node.children[i];
        if(childItem.children.length === 0){
            node.children.splice(i,1);
        }
    }
    node.children.forEach(child=>{
        removeLeaf(child);
    })
    console.log(node)
}


const findElement = (node,item) =>{
    if(node.data === item){
        //  console.log(node)
        return true;
    }
    for(let i=0; i<node.children.length; i++){
        const found = findElement(node.children[i],item);
        if(found){
            return true;
        }
    }
    return false;
}


const nodeToRootPath = (node,data) =>{
    if(node.data === data){
        let list = [];
        list.push(node.data);
        return list;
    }

   for(let i=0; i<node.children.length; i++){
        const items = nodeToRootPath(node.children[i], data);
        if(items.length > 0){
            items.push(node.data);
            return items;
        }
    }
    return [];
}



const lowestCommonAncestor = (node, t1,t2) =>{
    const p1 = nodeToRootPath(node,t1);
    const p2 = nodeToRootPath(node,t2);

    let i = p1.length - 1;
    let j = p2.length - 1;

    while(i >= 0 && j >= 0 && p1[i] === p2[j]){
        i --;
        j --;
    }

    i++;
    j++;
    return p1[i];
}



const distanceBetweenNodes = (node, t1,t2) =>{
    const p1 = nodeToRootPath(node,t1);
    const p2 = nodeToRootPath(node,t2);

    let i = p1.length - 1;
    let j = p2.length - 1;

    while(i >= 0 && j >= 0 && p1[i] === p2[j]){
        i --;
        j --;
    }
    i++;
    j++;
    return i + j;
}


const areSimiler = (n1 , n2) =>{
    if(n1.children.length !== n2.children.length){
        return false;
    }
    for(let i=0; i < n1.children.length; i++){
        const c1 = n1.children[i];
        const c2 = n2.children[i];
        if(!areSimiler(c1,c2)){
            return false;
        }
    }
    return true;
}


let treeSize = 0;
let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
let treeHeight = 0;
const multisolver = (node,depth) =>{
    treeSize++;
    min = Math.min(min,node.data);
    max = Math.max(max,node.data);
    treeHeight = Math.max(treeHeight,depth);

    for(let i = 0; i < node.children.length; i++){
        multisolver(node.children[i],depth+1);
    }
}
setTimeout(()=>{
    console.log('Tree Size => ',treeSize);
    console.log('Tree min => ',min);
    console.log('Tree max => ',max);
    console.log('Tree height => ',treeHeight);
},0)


const arr1 = [10,20,-1,30,-1,-1];
const arr2 = [10,20,40,-1,50,-1,-1,30,60,-1,70,-1,-1,-1];
const rootPath = createTree(arr1);
const rootPath2 = createTree(arr2);
// display(rootPath);
// console.log(size(rootPath))
// console.log(maxVal(rootPath))
//  console.log(height(rootPath))
// traversal(rootPath);
//levelOrder(rootPath)
//levelOrderLinewise(rootPath);
//levelOrderZigZag(rootPath);
//levelOrderCountApproach(rootPath)
//mirrorTree(rootPath);
//levelOrderNullApproach(rootPath);
//removeLeaf(rootPath);
//findElement(rootPath,30);
//console.log(nodeToRootPath(rootPath,30))
//console.log(lowestCommonAncestor(rootPath,20,30))
//console.log(distanceBetweenNodes(rootPath,10,40))
//console.log(areSimiler(rootPath,rootPath))
multisolver(rootPath2,0);
