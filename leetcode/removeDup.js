var removeDuplicates = function(nums) {
    let occ = new Set(nums);
    nums = Array.from(occ);
    console.log(nums);
    return nums;
};

removeDuplicates([1,1,2]);