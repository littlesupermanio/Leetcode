/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = [];
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            const b = nums[j];
            if(a+b===target)
            {
                arr.push(i);
                arr.push(j);
                return arr
            }
        }
    }
};


//console.log(twoSum([2,5,5,11],10))