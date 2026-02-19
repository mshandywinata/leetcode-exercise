var compose = function(functions) {
    // reverse arr order
    let fn = functions.reverse();
    return function(x) {
        // loop over each function
        for (f of fn) {
            x = f(x);
        }
        return x;
    }
}

functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
compose(functions);