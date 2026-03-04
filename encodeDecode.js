var encode = function(strs) {
    let encoded_string = [];

    for (let i = 0; i < strs.length; i++) {
        encoded_string += strs[i].length + "#" + strs[i];
    }

    return encoded_string;
}

var decode = function(str) {
    let i = 0;
    let decoded_string = [];

    while (i < str.length) {
        let j = str.indexOf('#', i);
        let len = parseInt(str.slice(i, j));
        let word = str.slice(j + 1, j + 1 + len);

        decoded_string.push(word);

        i = j + 1 + len;
    }

    return decoded_string;
}


const dummyInput = ["My", "Name", "is Muhamad"];
const encoded = encode(dummyInput);
const decoded = decode(encoded);

console.log(`${dummyInput}\n${encoded}\n${decoded}`);