// //Free Code Camp's solution

function palindromes(str) {
    const alphanumericOnly = str
        .toLowerCase() // lowercase everything
        .match(/[a-z0-9]/g); // strip out non-alphanumeric characters

    return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('');
}

// ODIN's solution
// const palindromes = function(string) {
//     processedString = string.toLowerCase().replace(/[^A-Za-z]/g, '');
//     return (
//         processedString
//         .split('')
//         .reverse()
//         .join('') === processedString
//     );
// };

module.exports = palindromes;
