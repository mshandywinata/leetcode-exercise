var isAnagram = function(s, t) {
    const sArr = s.split(""); const tArr = t.split("");
    const sObj = {}; const tObj = {};

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] in sObj) sObj[sArr[i]]++;
        else sObj[sArr[i]] = 1;
    }

    for (let i = 0; i < tArr.length; i++) {
        if (tArr[i] in tObj) tObj[tArr[i]]++;
        else tObj[tArr[i]] = 1;
    }
    
    for (let key in sObj) {
        if (!(key in tObj)) return false;
        if (sObj[key] !== tObj[key]) return false;
    }

    for (let key in tObj) {
        if (!(key in sObj)) return false;
        if (sObj[key] !== tObj[key]) return false;
    }

    return true;
}

// above code is too much of a for loop
var isAnagram = function(s, t) {
    // comparation works on reference in arr
    // because the reference always different, it always return false
    // by using join(), the form would back to string
    // and the comparation works on value instead of reference
    return s.split("").sort().join("") === t.split("").sort().join("");
}

const s = "racecar";
const t = "carrace";
const result = isAnagram(s, t);

console.log(result);