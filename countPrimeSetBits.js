// helper to decide if the value is prime
var isPrime = function(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    } return true;
}

var countPrimeSetBits = function(left, right) {
    // initialize count
    count = 0;

    // loop over from inclusive left and right value
    for (let i = left; i <= right; i++) {
        // convert binary
        // split to array
        // count how many '1' in the array
        let setBits = i.toString(2).split("").filter(x => x === '1').length;
        console.log(`bit: ${setBits}`);

        // if its prime, increment the count
        if (isPrime(setBits)) count++;
    }

    // return count
    return count;
}

const result = countPrimeSetBits(6, 10);
console.log(result);