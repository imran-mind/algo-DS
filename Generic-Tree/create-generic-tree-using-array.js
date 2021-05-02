class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

const arr = [10,20,50,-1,60,-1,-1,30,70,-1,80,110,-1,120,-1,-1,90,-1,-1,40,100,-1,-1,-1];

let stack  = [];
let root= new TreeNode(null);
for(let i=0; i<arr.length; i++){
    if(arr[i] === -1){
        stack.pop();
    }else{
        const t = new TreeNode(arr[i])
        // t.data = arr[i];
        if(stack.length > 0){
            // console.log('-> ',t)
            stack[stack.length-1].children.push(t);
        }else{ 
            root = t;
        }
        stack.push(t)
    }
}

console.log(root);

const display = (root) =>{
    let str = root.data+"=>";
    let len = root.children.length;
    root.children.forEach((node,index)=>{
        let comma = ",";
        if(len-1 === index){
            comma = "";
        }
        str += node.data+ comma;
    });
    // str+=".";
    console.log(str);
    root.children.forEach((node)=>{
        display(node);
    })

}


const size = (node) =>{
    let s = 0;
    node.children.forEach((item)=>{
        let cs = size(item)
        s = s + cs;
    });
    s = s +1;
    return s;
} 

display(root);
console.log('Size of a tree : '+size(root));
