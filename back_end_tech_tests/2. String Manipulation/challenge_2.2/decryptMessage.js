//const decryptMessage = (message, shift) => {}

//module.exports = decryptMessage;

function decryptMessage(jumbledString, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let decryptedMessage = '';

    for (let i = 0; i < jumbledString.length; i++) {
        const char = jumbledString[i];
        let index = alphabet.indexOf(char.toLowerCase());

        if (index !== -1) {
            // Applying the shift in the opposite direction
            let shiftedIndex = (index - shift) % 26;

            // Handling negative indexes (looping back to the end of the alphabet)
            if (shiftedIndex < 0) {
                shiftedIndex = 26 + shiftedIndex;
            }

            // Keeping the original case (uppercase or lowercase)
            if (char === char.toUpperCase()) {
                decryptedMessage += alphabet[shiftedIndex].toUpperCase();
            } else {
                decryptedMessage += alphabet[shiftedIndex];
            }
        } else {
            // For non-alphabetic characters, simply add them to the decrypted message as is
            decryptedMessage += char;
        }
    }

    return decryptedMessage;
}

// Example usage:
const jumbledString = "def";
const shift = 2;
const decryptedMessage = decryptMessage(jumbledString, shift);
console.log(decryptedMessage); // Output: "bcd"//