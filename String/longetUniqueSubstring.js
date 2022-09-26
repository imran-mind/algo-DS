


const longetUniqueSubstring = (s) =>{
    if(!s)
        return -1;
    const n = s.length;
    let max = 0;
    for(let i=0; i<n; i++){
        const visited = new Array(256);
        //start the window
        for(let j=i; j<n; j++){
            //if the character is visited in the window break the loop
            if(visited[s.charAt(j)])
                break;
            //else update the result if the window is larger, and mark current char is updated
            let idx = s.charAt(j);
            console.log(idx)
            visited[idx] = true;
            max = Math.max(max, j-i+1);
        }
        console.log(visited)
    }
    return max;
}
