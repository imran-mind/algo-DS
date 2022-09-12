//https://practice.geeksforgeeks.org/problems/number-of-provinces/1
class Solution {
    
  dfs(node, visited, adj){
      visited[node] = true;
    //   console.log(node);
      for(let i=0; i < adj[node].length; i++){
          let n = adj[node][i];
          if(!visited[n]){
            this.dfs(n, visited, adj);
           }
      }
  }
  numProvinces(V,adj){
    //code here
    // console.log(adj);
    const visited = [];
    const adjList = {};
    for(let i=0; i<V; i++){
        adjList[i] = [];
    }
    
    for(let i=0; i<V; i++){
        for(let j=0; j<V; j++){
            if(adj[i][j] == 1){
                 adjList[i].push(j);
                 adjList[j].push(i);
            }
        }
    }
    let cnt = 0;
    for(let i = 0; i < V; i++){
        if(!visited[i]){
             this.dfs(i, visited, adjList);
             cnt++;
        }
    }
    return cnt;
  }
}
