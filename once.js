var once = function(fn) {
    // initialize how many times has been called
    var call = 0;
    return function(...args) {
        // post increment
        call++;
        // check if its been called more than once
        if (call > 1) return undefined;
        // if not, return the result
        return fn(...args);
    }
}