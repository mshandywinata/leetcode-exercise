var containsDuplicate = function(nums) {
    // no need to contain duplicate
    const unique = new Set();
    for (num of nums) {
        // has means it already contained
        if (unique.has(num)) return true;
        unique.add(num);
    }
    return false;
}