/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = [];
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
        if(m.has(target - nums[i]))
        {
            arr[1] = i;
            arr[0] = m.get(target - nums[i])
            return arr
        }
        m.set(nums[i],i)
        console.log(m)
    }
    return arr
};

console.log(twoSum([2,5,3,9,1],8))