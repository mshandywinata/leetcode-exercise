// we don't need to come up with these
// var isStriclyPalindromic = function(n) {
//     for (let i = 2; i <= n - 2; i++) {
//         let bin = n.toString(i);
//         let binReversed = bin.split("").reverse().join("");

//         if (bin === binReversed) continue; else return false;
//     } return true;
// }

// this is enough because there is no such as n >= 4 that stricly palindromic
var isStriclyPalindromic = function(n) {
    return false;
}

console.log(isStriclyPalindromic(10));