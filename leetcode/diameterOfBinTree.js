/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var height = function(node){
    // base case is emptry tree
    if(node == null){
        return 0
    }
    //if Tree is not emptr then height= 1+ Max of left height and right height.
    return (1+Math.max(height(node.left), height(node.right)));
}

var diameter = function(node){
    if(node == null){
        return 0;
    }
    //get the height of left and right subtree
    const lheight = height(node.left);
    const rheight = height(node.right);
    
    /* get the diameter of left and right subtrees */
     const ldiameter = diameter(node.left); 
     const rdiameter = diameter(node.right);
     /* Return max of following three 
          1) Diameter of left subtree 
         2) Diameter of right subtree 
         3) Height of left subtree + height of right subtree + 1 */
    return Math.max(lheight + rheight, 
                        Math.max(ldiameter, rdiameter)); 
}
var diameterOfBinaryTree = function(root) {
    return diameter(root);
};