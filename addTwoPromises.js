var addTwoPromises = async function(promise1, promise2) {
    // wait all promise and then return them
    return await Promise.all([promise1, promise2]).then((values) => {
        // accumulate all result to single value
            return values.reduce((acc, curr) => acc + curr, 0);
        });
};