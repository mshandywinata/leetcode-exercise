var isPowerOfThree =  function(n) {
    // 0 and negative can't be power of 3
    if (n <= 0) return false;
    while (n > 1) {
        // loop over and divide by 3 the value of n
        // if its break then it's not power of 3
        if (n % 3 === 0) n = Math.floor(n / 3); else return false;
    } return true;
}

console.log(isPowerOfThree(12));