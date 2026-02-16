var map = function(arr, fn) {
    // initialize new arr
    const newArr = [];
    // loop over each element and push the new element
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i));
        // display each iteration
        console.log(`index: ${i}, element: ${arr[i]}, newElement: ${fn(arr[i], i)}`);
    }
    // return the new arr
    return newArr;
}

const ones = [1, 1, 1];
const plusOne = (n) => { return n + 1 };
const mapped = map(ones, plusOne);

console.log(mapped);

