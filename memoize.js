function memoize(fn) {
    // store all passed args and result
    var cache = {};
    return function(...args) {
        // store passed args
        const key = JSON.stringify(...args);
        // check if already exist
        if (key in cache) return cache[key];
        // otherwise store to cache
        cache[key] = fn(...args);
        return cache[key];
    }
}