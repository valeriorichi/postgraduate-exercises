const reverseCapitalisation = (inputString) => {

    return inputString = inputString.replace(/[a-zA-Z]/g, letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase());
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