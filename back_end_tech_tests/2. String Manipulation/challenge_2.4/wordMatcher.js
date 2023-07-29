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