const reverseCapitalisation = (inputString) => {
    let reversedString = "";
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (char === char.toUpperCase()) {
            reversedString += char.toLowerCase();
        } else {
            reversedString += char.toUpperCase();
        }
    }
    return reversedString;
};
module.exports = reverseCapitalisation;