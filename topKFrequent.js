var topKFrequent = function(nums, k) {
    const count = nums.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    
    // need in decending order
    // only compare the key (index 1)
    const sorted = Object.entries(count).sort((a, b) => {
        return b[1] - a[1];
    });
    
    const topK = sorted.slice(0, k).map((element) => {
        return parseInt(element);
    });

    return topK;
}

const nums = [1,2,2,3,3,3], k = 2;
const result = topKFrequent(nums, k);

console.log(result);