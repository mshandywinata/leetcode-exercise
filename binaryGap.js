// var binaryGap = function(n) {
//     let bits = n.toString(2).split("");
//     let ones = bits.filter(x => x === '1');
//     // concecutive pair is n - 1, where n is how many element
//     let pairCount = ones.length - 1;

//     // if the bits only consist of 1 of '1' then it must have no pair
//     if (pairCount === 1) return 0;
    
//     // every pair need its own array
//     let adjPairs = new Array(pairCount).fill().map(() => []);
    
//     // track every pair
//     let nextIndex = 0;
//     let maxLength = 0;

//     for (let i = 0; i < pairCount; i++) {
//         for (let j = nextIndex; j < bits.length; j++) {
//             // current bit is opener of a pair
//             if (adjPairs[i].length === 0 && bits[j] === '1') {
//                 adjPairs[i].push(bits[j]);
//             // current bit is the end of a pair
//             } else if (bits[j] === '1') {
//                 // current bit is the opener of next pair
//                 nextIndex = j;
//                 adjPairs[i].push(bits[j]);
//                 break;
//             }
            
//             // current bit is '0'
//             adjPairs[i].push(bits[j]);
//         }
        
//         // gap is element length - 1
//         let gap = adjPairs[i].length - 1;
//         maxLength = Math.max(maxLength, gap);
//     }
//     return maxLength;
// }

// the code above its quite complicated
var binaryGap = function(n) {
    // power of 2 has no pair of bit
    if (Number.isInteger(Math.log2(n))) return 0;

    // needed to inspect every bit
    const bits = n.toString(2).split("");
    let max = 0, gap = 0, openerIndex = 0;

    for (let i = openerIndex; i < bits.length; i++) {
        if (bits[i] === '1') {
            max = Math.max(max, gap);
            // current bit is opener for next pair
            openerIndex = i;
            gap = 0;
        } else {
            gap++;
        }
    }

    // +1 inclusive for the closer (calculate gap)
    return max + 1;
}

// below is the true solution
var binaryGapSolution = function(n) {
    // n & -n gives the lowest set bit (e.g., 1000 & 0111+1 = 1000 → value 8)
    // Dividing n by its lowest set bit shifts out all trailing zeros
    // Example: n = 40 (101000), n & -n = 8 (001000), 40 / 8 = 5 (101)
    // trailing zero has no pair of bit to check
    n /= (n & -n);
    // single bit of 1 is power of 2
    // power of 2 has no a pair of bit
    if (n === 1) return 0;

    let max = 0, gap = 0;

    // loop over unit the bits are all 0
    while (n) {
        // rightmost bit is the closer
        if (n & 1) {
            max = Math.max(max, gap);
            gap = 0;
        } else {
            gap++;
        }
        // move to rightmost
        // next bit to check
        n >>= 1;
    }
    // + 1 inclusive the closer (calculate distance)
    return max + 1;
}

const number = 1024;
const result = binaryGap(number);
const resultSolution = binaryGapSolution(number);
console.log(`binaryGap() = ${result}, binaryGapSolution() = ${resultSolution}`);