const decryptMessage = (message, shift) => {
    message = message.replace(/[a-zA-Z]/g, decryptFunc);

    decryptFunc = (letter) => {
        let newCode = letter.toUpperCase.charCodeAt(0) + shift;
        if (newCode >= 65 || newCode <= 90) {
            return newLetter = letter === letter.toUpperCase ? newCode : newCode + 32;
        }
    };

    let text = String.fromCharCode(72, 69, 76, 76, 79);
};

module.exports = decryptMessage;

return inputString = inputString.replace(/[a-zA-Z]/g, letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase());
