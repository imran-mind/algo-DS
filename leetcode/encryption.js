var freqAlphabets = function(s) {
    const map = {
        1:'a',
        2:'b',
        3:'c',
        4:'d',
        5:'e',
        6:'f',
        7:'g',
        8:'h',
        9:'i',
        10:'j',
        11:'k',
        12:'l',
        13:'m',
        14:'n',
        15:'o',
        16:'p',
        17:'q',
        18:'r', 
        19:'s', 
        20:'t',
        21:'u',
        22:'v', 
        23:'w', 
        24:'x',
        25:'y',
        26:'z'
    };
    let op = '';
    let isHash = false;
    for(let i= s.length-1; i>=0; i--){
        if(s[i] !== '#'){
            isHash = false;
        }
        if(s[i] === '#'){
            isHash = true;
            const val = s[i-2]+''+s[i-1];
            op = op + map[val];
            i = i-2;
        }else if(!isHash){
            op = op + map[s[i]];
        }
    }
    if(op){
        // console.log(op.split('').reverse().join(''));
        return op.split('').reverse().join('')
    }
    return op;
    // console.log(op);
};

freqAlphabets("10#11#12")