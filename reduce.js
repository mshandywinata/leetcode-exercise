var reduce = function(nums, fn, init) {
    // initialize accumulation
    let val = init;
    // return init if arr empty
    if (!nums) {
        return init;
    }
    // loop over each element
    for (n of nums) {
        val = fn(val, n);
    } return val;
}

const nums = [1, 2, 3, 4];
const fn = function sum(acc, curr) { return acc + (curr * curr) };
const init = 100;

console.log(reduce(nums, fn, init));
