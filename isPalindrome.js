var isPalindrome = function(x) {
    var m = x, n = 0;

    while (m > 0) {
        n = (n * 10) + m % 10, m = Math.floor(m / 10);
    };

    return n == x;
}

console.log(isPalindrome(212))