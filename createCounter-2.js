var createCounter = function(init) {
    var n = init;
    return {
        increment: () => { return ++n; },
        decrement: () => { return --n; },
        reset: () => { n = init; return n; },
    }
}

const count = createCounter(5);
console.log(count.increment());
console.log(count.reset());
console.log(count.decrement());