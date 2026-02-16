var filter = function(arr, fn) {
    // intiialize filtered arr
    const filteredArr = [];
    // loop over each element of arr
    for (let i = 0; i < arr.length; i++) {
        // only push that fulfill the condition
        if (fn(arr[i], i)) filteredArr.push(arr[i]);
        // display each iteration
        console.log(`index: ${i}, element: ${arr[i]}, pushed: ${fn(arr[i], i)}`);
    }
    // return filtered arr
    return filteredArr;
}

const fn = function greaterThan10(n) { return n > 10 };
arr = [0, 10, 20, 30, 40,];

console.log(filter(arr, fn));