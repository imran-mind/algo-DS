// const arr = [0, 1, 2, 3, 4, 5];
// const input = 2;
var permutate = (function () {
    var results = [];

    function doPermute(input, output, used, size, level) {
        if (size == level) {
            var word = output.join('');
            results.push(word.split(''));
            return;
        }
        level++;
        for (var i = 0; i < input.length; i++) {
            if (used[i] === true) {
                continue;
            }
            used[i] = true;
            output.push(input[i]);
            doPermute(input, output, used, size, level);
            used[i] = false;
            output.pop();
        }
    }
    return {
        getPermutations: function (input, size) {
            var chars = input;//input.split('');
            var output = [];
            var used = new Array(chars.length);
            doPermute(chars, output, used, size, 0);
            return results;
        }
    }
})();
const result = permutate;
const combinations = result.getPermutations([0,1,2,3,4,5], 3);
combinations.forEach((item) =>{
    const xor = parseInt(item[0])^parseInt(item[1]);
    console.log(xor === 0);
});
// console.log(JSON.stringify(combinations))
console.log(combinations.length)