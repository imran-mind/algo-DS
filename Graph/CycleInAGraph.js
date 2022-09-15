
//https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1
class Solution {
    
    detect(src, V, adj, vis){
        vis[src] = true;
        let q = []; // craeted a queue;
        q.push({node: src, parent: -1});
        
        while(q.length>0){
            const pair = q.shift();
            const n = pair.node;
            const p = pair.parent;
            
            //go to the adj list
            for(let i=0; i<adj[n].length; i++){
                let ngb = adj[n][i];
                
                if(vis[ngb] == false){
                    vis[ngb] = true;
                    q.push({node: ngb, parent: n});
                }else if(ngb != p){
                    return 1;
                }
            }
        }
        return 0;
    }
    // Function to detect cycle in an undirected graph.
    isCycle(V, adj) {
        // code here
        let vis = Array(V).fill(0);
     
        // console.log("vis-> ",vis);
       
        
        for(let i=0; i<V; i++){
            if(vis[i] == false){
                
                if(this.detect(i, V, adj, vis)) return 1;
            }
        }
        return 0;
    }
}
