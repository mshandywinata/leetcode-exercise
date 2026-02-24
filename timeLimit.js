// var timeLimit = function(fn, t) {
//     return async function(...args) {
//         const promises = [
//             new Promise((resolve) => resolve(fn(...args))),
//             new Promise((resolve, reject) => setTimeout(() => reject("Time Limit Exceeded"), t)),
//         ];

//         return Promise.race(promises);
//     }
// }

var timeLimit = function(fn, t) {
    return async function(...args) {
        // the result would immediately be return
        let res = new Promise((resolve) => {
            resolve(fn(...args))
        });
        // in case the res not finished up to t
        // resolve needed because reject always in the second index of Promise args
        let rej = new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t)
        });

        // only one of those would be matter
        return Promise.race([res, rej]);
    }
}