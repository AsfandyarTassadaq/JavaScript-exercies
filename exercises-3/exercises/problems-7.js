/*
    Take every 2nd char from the string, then the other chars that are not every 2nd char, and concat them as new String.
    Do this n times

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "abababab", 1 => "bbbbaaaa"
    "abababab", 2 => "bbaabbaa"
    
*/

function encrypt(text, n) {
    if (n <= 0 || !text) {
        return text
    }
    text = text.split("")
    while (n--) {
        var right = []
        var left = []
        for (let i = 0; i < text.length; i++) {
            (i % 2 == 0) ? right += text[i] : left += text[i]
        }
        text = left + right
    }
    return (text)
}

/*
    Now write a function to decrypt the encrypted strings

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "bbbbaaaa", 1 => "abababab"
    "bbaabbaa", 2 => "abababab"
*/

function decrypt(cipherText, n) {
    if (n <= 0 || !cipherText) {
        return cipherText
    }
    text = cipherText.split("")
    while (n--) {
        var right = []
        var left = []
        for (let i = 0; i < text.length; i++) {
            (i % 2 !== 0) ? right += text[i] : left += text[i]
        }
        text = left + right
    }
    return (text)
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.encrypt = encrypt
window.solutions.decrypt = decrypt