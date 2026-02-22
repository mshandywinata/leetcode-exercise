var binaryGap = function(n) {
    // convert to arr of bits
    let bits = n.toString(2).split("");
    // filter only the '1'
    let ones = bits.filter(x => x === '1');
    // immediately give 0 if no pair of '1'
    if (ones.length === 1) {
        return 0;
    }
    // create empty arr for each pair
    let adjPairs = new Array(ones.length - 1).fill().map(() => []);
    // mark the index of end pair of '1'
    let mark = 0;
    // count max length
    let maxLength = 0;

    // loop over each possible pair 
    for (let i = 0; i < ones.length - 1; i++) {
        
        // loop over each bit
        for (let j = mark; j < bits.length; j++) {
            // insert '1' if a pair arr is empty
            if (!adjPairs[i].length) {
                if (bits[j] === '1') {
                    adjPairs[i].push(bits[j]);
                } else {
                    continue;
                }
            // insert '1' as last element of arr pair
            // mark the element as the beggining of next iteration of possible pair
            } else if (bits[j] === '1') {
                mark = j;
                adjPairs[i].push(bits[j]);
                break;
            // insert every '0' between the '1'
            } else {
                adjPairs[i].push(bits[j]);
            }
        }

        // calculate the gap of a pair
        let gap = (adjPairs[i].length) - 1
        // replace it as new max if gap is bigger than current max
        maxLength = Math.max(maxLength, gap);
    }
    // finally, give the final max
    return maxLength;
}

// the code above its a bit of complicated
// below is the true solution
var binaryGapSolution = function(n) {
    // remove trailing '0'
    n /= (n & -n);
    // give 0 if n is base 2 (base 2 doesn't have pair)
    if (n === 1) return 0;

    // initialize values
    let max = 0, gap = 0;

    // loop trough each bit
    while (n) {
        // set max and reset gap if it ends 1
        if (n & 1) {
            max = Math.max(max, gap);
            gap = 0;
        // otherwise increase the gap 
        } else {
            gap++;
        }
        // move to the next bit
        n >>= 1;
    }

    // give the max
    // + 1 because it inclusive the closing 1
    return max + 1;
}

const result = binaryGap(3876);
const resultSolution = binaryGapSolution(3876);
console.log(`binaryGap() = ${result}, binaryGapSolution() = ${resultSolution}`);