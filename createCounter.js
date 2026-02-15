var createCounter = function(n) {
    // create a var that -1 than the input
    var m = n--;
    return function() {
        // return the +1 than the that var
        return m++;
    }
}

const counter = createCounter(10);
console.log(counter());