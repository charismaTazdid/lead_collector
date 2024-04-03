const formatString = (str) => {
    let formattedString = str.toLowerCase();
    formattedString = formattedString.replace(/\s+/g, '').replace(/-/g, '');
    return formattedString;
}

// Example usage
// const inputStrings = ["E Commerce", "News-Portal", "business Site"];
// inputStrings.forEach(string => {
//     console.log(formatString(string));
// });

console.log(formatString("E Commerce"))
console.log(formatString("E - Commerce"))
console.log(formatString("E-Commerce"))
console.log(formatString("e-Commerce"))