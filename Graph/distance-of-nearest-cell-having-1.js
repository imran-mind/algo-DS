
//https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1-1587115620/1
class Solution 
{
    //Function to find distance of nearest 1 in the grid for each cell.
    nearest(grid){
        // code here
        let n = grid.length;
        let m = grid[0].length;
        
        let vis= [];
        let dist = [];
        for(let i=0; i<n; i++){
            vis[i] = [];
            dist[i] = []
            for(let j=0; j<m; j++){
                vis[i][j] = 0;
                dist[i][j] = 0
            }
        }
        
        //create a queue
        let q = [];
        
        for(let i=0; i<n; i++){
            for(let j=0; j<m; j++){
                if(grid[i][j] == 1){
                    vis[i][j] = 1;
                    dist[i][j] = 0;
                    q.push({row: i, col: j, steps: 0});
                }else{
                    vis[i][j] = 0
                }
            }
        }
        
        while(q.length>0){
            const pair = q.shift();
            const row = pair.row;
            const col = pair.col;
            const steps = pair.steps;
            
            let delRow = [-1, 0, 1, 0];
            let delCol = [0, 1, ,0 , -1];
            
            for(let i=0; i<4; i++){
                const nrow = row + delRow[i];
                const ncol = col + delCol[i];
                //check the valididty
                if(nrow>=0 && nrow<n && ncol>=0 && ncol<m && vis[nrow][ncol] == 0){
                    dist[nrow][ncol] = steps+1;
                    q.push({row: nrow, col: ncol, steps: steps+1});
                }
            }
        }
        return dist;
        
	}
}
