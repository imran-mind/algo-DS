class Solution {
    dfs(r, c, vis, grid, n, m){
        vis[r][c] = true;
        
        for(let i=-1; i<=1; i++){
            for(let j=-1; j<=1; j++){
                let nrow = r+i;
                let ncol = c+j;
                if(nrow>=0 && nrow<n && ncol>=0 && ncol<m && grid[nrow][ncol] == 1 && !vis[nrow][ncol]){
                    vis[nrow][ncol] = 1;
                    this.dfs(nrow,ncol, vis, grid, n, m);
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
                    this.dfs(row, col, vis, grid, n, m);
                }
            }
        }
        return cnt;
    }
}
