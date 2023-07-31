const wordMatcher = (matcher, str) => {
    // Using a regular expression with word boundaries (\b) to match whole words
    const regex = new RegExp(`\\b${matcher}\\b`, 'gi');
    const matches = str.match(regex);

    if (matches) {
        return matches.length;
    } else {
        return 0;
    }
};

module.exports = wordMatcher;

const wordMatcher = (matcher, str) => {
    const words = str.split(/\s+/); // Split the string into an array of words using whitespace as the delimiter
    const wordCount = words.reduce((count, word) => {
        // Compare each word in the array with the given matcher (case-insensitive comparison)
        if (word.toLowerCase() === matcher.toLowerCase()) {
            count++;
        }
        return count;
    }, 0);

    return wordCount;
};
