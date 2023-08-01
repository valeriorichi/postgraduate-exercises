const decryptMessage = (message, shift) => {

    const charArray = [...message];
    const decyptedCharCodeArray = [];

    charArray.forEach((char) => {
        let newCode = char.toLowerCase().charCodeAt(0) - shift;
        switch (true) {
            case (char.toLowerCase().charCodeAt(0) < 97 || char.toLowerCase().charCodeAt(0) > 122):
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


};

module.exports = decryptMessage;
