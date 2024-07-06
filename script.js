function firstChar(str) {
    for (let char of str) {
        if (char !== ' ') {
            return char;
        }
    }
    return ''; // If all characters are spaces
}

