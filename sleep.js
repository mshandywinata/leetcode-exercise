async function sleep(millis) {
    // make new promise
    return new Promise((resolve) => {
        // delay it in millis
        setTimeout(() => {
            // also return the millis value
            resolve(millis);
        }, millis);
    });
}

while (true) {
    const result = await sleep(1000);
    // there might be slight delay
    console.log(result);
}
