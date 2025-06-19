function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

    // First pass: count each character
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        if (charCount[ch] === undefined) {
            charCount[ch] = 1;
        } else {
            charCount[ch]++;
        }
    }

    // Second pass: find the first character with count 1
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }

    // If no non-repeated character is found
    return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
