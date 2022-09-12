class Solution {
    // Function to return a list containing the DFS traversal of the graph.
    dfs(node, adj, visited, list){
        visited[node] = true;
        list.push(node);
        for(let i=0; i<adj[node].length; i++){
            let neighb = adj[node][i];
            if(!visited[neighb]){
                this.dfs(neighb, adj, visited, list);
            }
        }
        return;
    }
    dfsOfGraph(V, adj) {
        // code here
        const visited = [];
        const list = [];
        this.dfs(0, adj, visited,list);
        // console.log(list);
        return list;
    }
}
