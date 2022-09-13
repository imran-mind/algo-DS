class Solution {
    bfs(r, c, vis, grid){
        let n = grid.length;
        let m = grid[0].length;
        vis[r][c] = 1;
        const q = [];
        q.push({row:r,col:c});
        
        while(q.length > 0){
            const obj =  q.shift();
            let row = obj.row;
            let col = obj.col;
            
            //traverse in the neighbours and mark them if it's land
            for(let i=-1; i<=1; i++){
                for(let j=-1; j<=1; j++){
                    let nrow = row+i;
                    let ncol = col+j;
                    if(nrow>=0 && nrow < n && ncol>=0 && ncol < m &&
                    grid[nrow][ncol] == 1 && !vis[nrow][ncol]){
                        vis[nrow][ncol] = 1;
                        q.push({row:nrow, col: ncol});
                    }
                }
            }
        }
    }
    // Function to find the number of islands.
    numIslands(grid) {
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
        let cnt = 0;
        
        for(let row=0; row<n; row++){
            for(let col=0; col<m; col++){
                if(!vis[row][col] && grid[row][col] == 1){
                    cnt++;
                    this.bfs(row, col, vis, grid);
                }
            }
        }
        return cnt;
    }
}
