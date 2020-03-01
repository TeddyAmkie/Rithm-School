// Function only works for single words.
// When input a snake cased string,
// a camel cased string will be returned.
function snakeToCamel(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '_') {
            newStr += str[i];
        } else {
            newStr += str[i+1].toUpperCase();
            i++
        }
    }
    return newStr;
}

