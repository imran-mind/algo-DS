var twoSum = function(nums, target) {
    let map = {};
    for(let j = 0; j < nums.length; j ++){
      console.log(nums[j], j)
      map[nums[j]] = j;
    }
    console.log(map);
    for(let i = 0; i < nums.length; i ++){
        const comp = target - nums[i]; // 3
        if(map[comp] && map[comp] != i){ // 2 != 0
          console.log(map[comp], i);
          return [i, map[comp]]
        }
    }
    return [];
};

twoSum([3,2,3], 6);
// twoSum([2, 7, 11, 15], 9)s