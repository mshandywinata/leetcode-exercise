var containsDuplicate = function(nums) {
    const unique = new Set();
    for (num of nums) {
        if (unique.has(num)) return true;
        unique.add(num);
    }
    return false;
}