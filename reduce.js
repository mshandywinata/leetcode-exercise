var reduce = function(nums, fn, init) {
        let val = init;
        if (!nums) {
            return init;
        }
        for (let i = 0; i < nums.length; i++) {
            val = fn(val, nums[i]);
        } return val;
}

const nums = [1, 2, 3, 4];
const fn = function sum(acc, curr) { return acc + (curr * curr) };
const init = 100;

console.log(reduce(nums, fn, init));
