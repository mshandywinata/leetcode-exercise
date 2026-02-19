var argumentsLength = function(...args) {
    // alternatively, we could use this
    return args.length;
    // or 
    // let n = 0;
    // for (_ of args) n++;
    // return n;
};

const args = [{}, null, "3"];
console.log(argumentsLength(...args));