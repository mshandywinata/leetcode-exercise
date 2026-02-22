// a function that would return value
// if not cancelled before the delay of t
var cancellable = function(fn, args, t) {
    // to pass in to the clearTimeout (cancel)
    // args is array so it need spread operator);
    let result = setTimeout(() => fn(...args), t);
    return () => clearTimeout(result);
}