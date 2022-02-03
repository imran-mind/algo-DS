

function encryptText(text,row,col){
    const ans = [];//[[h,a,v,e],[a,n,i,c],[e,d,a,y]]
    let p = 0;
    for(let i=0; i<row; i++){
        let word = "";
        // let ar = [];
        while(p<col){ // 8<12 word= eday
            word = word + text[p];
            p++;
        }
        col = col + 4;
        // ar.push(word.split(''));
        ans.push(word.split(''));
    }
    console.log(ans);

    let c = 0;
    // col = col;
    console.log("row col ",row,row+1)
    for(let i=0; i<row+1; i++){

        let w = "";
        if(c < row + 1){
            for(let j=0; j<row; j++){
                w = w + ans[j][c];
            }
            c++;
            console.log(w);
        }
    }
}

const t = "haveaniceday"; //12
const sqrtTN = Math.floor(Math.sqrt(t.length)); //3
console.log(sqrtTN);
const row = sqrtTN;
const col = sqrtTN + 1;
encryptText(t, row, col);