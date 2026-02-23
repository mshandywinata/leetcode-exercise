// var hasAllCodes = function(s, k) {
//     // 2**k is how many unique combination of bits
//     // its the bitwise expression which is faster than usual expression
//     // by knowing the exact combination that needed
//     // and compare it with unique found sub
//     let comb = 1 << k;
//     // only need the unique
//     let found = new Set();

//     for (let i = 0; i <= (s.length - k); i++) {
//         // took care the current k-length part of the s
//         let sub = s.slice(i, i + k);
//         console.log(`i: ${i}; sub: ${sub}`);
//         found.add(sub);
//         // needed to early exit
//         if (found.size === comb) return true;
//     }
//     return found.size === comb;
// }

// below is the variation that i originally come up with
var hasAllCodes = function(s, k) {
    let comb = 2 ** k;
    let found = [];

    for (let i = 0; i <= (s.length - k); i++) {
        let sub = s.slice(i, i + k);
        console.log(sub);
        
        if (!found.includes(sub)) found.push(sub);
        if (found.length === comb) return true;
        console.log(found);
    }

    return found.length === comb;
}

// instead of generate every possible value with length of k that need 2**k variations
// and then compare each one with the string that would take 2**k time 
// we only need to store every unique value in the substring that has length of k
// check if the total value that stored is same as the every possible combination that is 2**k
// and then move 1 bit at every step

const s = "0110"; k = 2;
const result = hasAllCodes(s, k);
console.log(result);