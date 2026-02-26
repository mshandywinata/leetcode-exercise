var groupAnagrams = function(strs) {
    const group = {};

    for (let str of strs) {
        console.log(`str = ${str};`);
        // a-z (26 chars)
        let count = new Array(26).fill(0);
        
        for (let char of str) {
            // charCodeAt return ascii of a char
            // a = 0, b = 1, etc. 
            count[char.charCodeAt() - "a".charCodeAt()] += 1;
            console.log(`count = ${count};`);
        }
        
        if (!(count in group)) group[count] = new Array();
        group[count].push(str);
    }
    
    console.log(group);
    return Object.values(group);
}

const arr = ['a', 'abc', 'bac'];
const result = groupAnagrams(arr);

console.log(result);