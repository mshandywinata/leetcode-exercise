var timeLimit = function(fn, t) {
    return async function(...args) {
        const promises = [
            new Promise((resolve) => resolve(fn(...args))),
            new Promise((resolve, reject) => setTimeout(() => reject("Time Limit Exceeded"), t)),
        ];

        return Promise.race(promises);
    }
}

var timeLimit = function(fn, t) {
    return async function(...args) {
        let res = new Promise((resolve) => {
            resolve(fn(...args))
        });
        let rej = new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t)
        });
        
        return Promise.race([res, rej]);
    }
}