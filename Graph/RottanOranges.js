//https://practice.geeksforgeeks.org/problems/rotten-oranges2536/1
class Solution
{
    //Function to find minimum time required to rot all oranges. 
    orangesRotting(grid) {
       // code here
    let n = grid.length;
    let m = grid[0].length;
    
    let vis = [];
    for(let i=0; i<n; i++){
        vis[i] = [];
        for(let j=0; j<m; j++){
            vis[i][j] = 0;
        }
    }
    
    
    let q = [];
    let freshCount =0;
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j] == 2){
                q.push({row: i, col:j, tm: 0});
            }
            
            if(grid[i][j] == 1){
                freshCount ++;
            }
        }
    }
              // (row-1, col)
    //row, col-1<-(row,col) -> row,col+1
             //  (row+1, col)
    let tm = 0;
    let delRow = [-1, 0, 1, 0];
    let delCol = [0, 1, 0, -1];
    let count = 0;
    
    while(q.length > 0){
        let p = q.shift();
        // console.log(q);
        let r = p.row;
        let c = p.col;
        let t = p.tm;
        
        tm = Math.max(tm, t);
        for(let i=0; i<4; i++){
            let nrow = r + delRow[i];
            let ncol = c + delCol[i];
            
            if(nrow>=0 && nrow < n && ncol >=0 && ncol < m
            && grid[nrow][ncol] == 1 && vis[nrow][ncol] == 0){
                q.push({row: nrow, col: ncol, tm: t + 1});
                vis[nrow][ncol] = 2;
                count++;
            }
        }
    }
    
    if(count != freshCount) return -1;
    return tm;

    }
}
