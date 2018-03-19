var twoSum = function(nums, target) {
    let ret = {};
    for (let i = 0; i < nums.length; i++) {
      tmp = target - nums[i];
      if (ret[tmp] !== undefined)
        return [ret[tmp], i];
      ret[nums[i]] = i;
    }
    return [];
  };