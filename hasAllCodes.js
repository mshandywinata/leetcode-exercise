var hasAllCodes = function(s, k) {
    // 2**k is how many unique combination of bits
    // its the bitwise expression which is faster than usual expression
    // by knowing the exact combination that needed
    // and compare it with unique found sub
    let comb = 1 << k;
    // only need the unique
    let found = new Set();

    for (let i = 0; i <= (s.length - k); i++) {
        // took care the current k-length part of the s
        let sub = s.slice(i, i + k);
        console.log(`i: ${i}; sub: ${sub}`);
        found.add(sub);
        // needed to early exit
        if (found.size === comb) return true;
    }
    return found.size === comb;
}

const s = "00110"; k = 2;
const result = hasAllCodes(s, k);
console.log(result);