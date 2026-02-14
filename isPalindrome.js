var isPalindrome = function(x) {
    // temp var
    var m = x, n = 0;

    // loop over the temp so that
    // every last digit of m get to move to n as first digit
    while (m > 0) {
        n = (n * 10) + m % 10, m = Math.floor(m / 10);
    };

    return n == x;
}

console.log(isPalindrome(212))