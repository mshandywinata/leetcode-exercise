var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        // index 0 has already checked by i-loop
        for (let j = (i + 1); j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
}

const nums = [1, 2, 3, 4];
const target = 5;
const result = twoSum(nums, target);

console.log(result);