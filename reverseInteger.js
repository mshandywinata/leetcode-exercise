var reverse = function(x) {
    // temp vars
    // convert to abs val of x
    var m = Math.abs(x); var n = 0;

    // loop over so last digit of m would be first digit of n
    // and so on
    while (m > 0) {
        n = (m % 10) + (n * 10); m = Math.floor(m / 10);
    }

    // set limitation
    if (n < Math.pow(-2, 31) || n > (Math.pow(2, 31) - 1)) {
        return 0;
    } return n * Math.sign(x);
    // reverse the value if its negative
}

console.log(reverse(-244));