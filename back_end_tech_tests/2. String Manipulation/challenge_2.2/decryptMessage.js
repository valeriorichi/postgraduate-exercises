const decryptMessage = (message, shift) => {

    const charArray = [...message.toLowerCase()];
    const decyptedCharCodeArray = [];

    charArray.forEach((char) => {
        let newCode = char.charCodeAt(0) - (shift % 26);
        switch (true) {
            case (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122):
                decyptedCharCodeArray.push(char.charCodeAt(0));
                break;
            case newCode < 97:
                decyptedCharCodeArray.push(newCode + 26);
                break;
            case newCode >= 97 && newCode <= 122:
                decyptedCharCodeArray.push(newCode);
                break;
            case newCode > 122:
                decyptedCharCodeArray.push(newCode - 26);
                break;
        }
    });

    return String.fromCharCode(...decyptedCharCodeArray);

};

module.exports = decryptMessage;
