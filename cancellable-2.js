var cancellable = function(fn, args, t) {
    // needed to called immediately
    fn(...args);
    // id needed to store in order to be cancelled next
    let intervalId = setInterval(() => fn(...args), t);
    return () => clearInterval(intervalId);
};

const fn = (x) => x * 2, args = [4], t = 35;
const cancelTimeMs = 190;
const cancelFn = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelFn, cancelTimeMs);