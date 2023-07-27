const reverseCapitalisation = (inputString) => {

    inputString = inputString.replace(/\b[A-Z]/g, letter => letter.toLowerCase()) + inputString.replace(/\b[a-z]/g, letter => letter.toUpperCase());
    let reverseCapitalisedString = "";
    for (i = 0; i < inputString.length; i++) {
        reverseCapitalisedString += inputString.charAt(i) === inputString.charAt(i).toUpperCase() ? inputString.charAt(i).toLowerCase() : inputString.charAt(i).toUpperCase();
    }
    return reverseCapitalisedString;
};

inputString = inputString.replace(pattern, letter => letter.toLowerCase());

// this is for loop approach
const reverseCapitalisation1 = (inputString) => {
    let reverseCapitalisedString = "";
    for (i = 0; i < inputString.length; i++) {
        reverseCapitalisedString += inputString.charAt(i) === inputString.charAt(i).toUpperCase() ? inputString.charAt(i).toLowerCase() : inputString.charAt(i).toUpperCase();
    }
    return reverseCapitalisedString;
};
module.exports = reverseCapitalisation;