// get number e.g 244
// 1. m = 244 / 10 => 24.4 => 24, n = 4 + 0 = 4
// 2. m = 24 / 10 => 2, n = 4 + 40 = 44
// 3. m = 2 / 10 => 0

var reverse = function(x) {
    var m = Math.abs(x); var n = 0; var sign = Math.sign(x);

    while (m > 0) {
        n = (m % 10) + (n * 10); m = Math.floor(m / 10);
    } n *= sign;

    if (n < Math.pow(-2, 31) || n > (Math.pow(2, 31) - 1)) {
        return 0;
    } return n; 
}

console.log(reverse(-244));