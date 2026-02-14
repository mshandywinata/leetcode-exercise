var isPowerOfThree =  function(n) {
    if (n <= 0) return false;
    while (n > 1) {
        if (n % 3 === 0) n = Math.floor(n / 3); else return false;
    } return true;
}

console.log(isPowerOfThree(12));