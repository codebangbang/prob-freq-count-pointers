// add whatever parameters you deem necessary
function constructNote(message, letters) {
    function countCharacters(str) {
        const charCount = {};
        for (let char of string) {
            charCount[char] = (charCount[char] || 0)+1;
        }
        return charCount;
        }
    }

    const messageCount = countCharacters(message);
    const lettersCount = countCharacters(letters);

    for (let char in messageCount) {
        if (messageCount[char] > (lettersCount[char] || 0)) {
            return false;
        }
    }
    return true;
}   
    
