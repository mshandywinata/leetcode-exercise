var addTwoPromises = async function(promise1, promise2) {
    return await Promise.all([promise1, promise2]).then((values) => {
            return values.reduce((acc, curr) => acc + curr, 0);
        });
};