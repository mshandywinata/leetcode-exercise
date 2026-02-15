var expect = function(val) {
    return {
        toBe: (x) => {
            if (x === val) {
                return true;
            } throw new Error("Not Equal");
        },
        notToBe: (y) => {
            if (y !== val) {
                return true;
            } throw new Error("Equal");
        },
    }
}