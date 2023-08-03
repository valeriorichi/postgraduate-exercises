function decodeBinary(binaryString) {
    // Split the binary string into an array of 8-bit chunks
    const binaryArray = binaryString.match(/.{1,8}/g);

    // Convert each binary chunk to its decimal representation
    const decimalArray = binaryArray.map((binaryChunk) => parseInt(binaryChunk, 2));

    // Convert the decimal array to characters
    const text = decimalArray.map((decimal) => String.fromCharCode(decimal)).join('');


}

module.exports = decodeBinary;



/*

function decodeBinary(binaryString) {}

module.exports = decodeBinary;
*/