const reverseCapitalisation = (inputString) => {

    inputString = inputString.match(/[A-Z]/g)
        ? inputString.replace(/[A-Z]/g, (letter) => letter.toLowerCase())
        : inputString.replace(/\b[a-z]/g, (letter) => letter.toUpperCase());

    return inputString;
};






// this is for loop approach
const reverseCapitalisation1 = (inputString) => {
    let reverseCapitalisedString = "";
    for (i = 0; i < inputString.length; i++) {
        reverseCapitalisedString += inputString.charAt(i) === inputString.charAt(i).toUpperCase() ? inputString.charAt(i).toLowerCase() : inputString.charAt(i).toUpperCase();
    }
    return reverseCapitalisedString;
};
module.exports = reverseCapitalisation;