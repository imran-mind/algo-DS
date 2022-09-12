class Solution {
    // Function to return Breadth First Traversal of given graph.
    bfsOfGraph(V, adj) {
        // code here
        const bfs = [];
        const q = [];
        const visited = [];
        
        visited[0] = true;
        q.push(0);
       
        while(q.length !== 0){
            // console.log("queue "+q);
            const node = q.shift();
            bfs.push(node);
            
            for(let i=0; i<adj[node].length; i++){
                const neighb = parseInt(adj[node][i]);
                // console.log('neighb ',neighb);
                if(!visited[neighb]){
                    visited[neighb] = true;
                    q.push(neighb);
                }
            }
            // console.log("queue after "+q);
        }
        return bfs;
    }
}
