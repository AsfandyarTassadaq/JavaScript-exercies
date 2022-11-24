/*
    The goal of this exercise is to convert a string to a new string where each character in the new string is "("
    if that character appears only once in the original string, or ")" if that character appears more than once in
    the original string. Ignore capitalization when determining if a character is a duplicate.

    For example:
    "recede"   =>  "()()()"
*/

function duplicateEncode(word) {
    const unique = "("
    const repeat = ")"
    let res = []
    word = word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[i]) == i && word.lastIndexOf(word[i]) == i) {
            res.push(unique)
        }
        else res.push(repeat)

    }
    return res.join("")
}


// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.duplicateEncode = duplicateEncode