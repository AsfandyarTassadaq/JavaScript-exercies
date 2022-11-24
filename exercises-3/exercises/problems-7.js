/*
    Take every 2nd char from the string, then the other chars that are not every 2nd char, and concat them as new String.
    Do this n times

    For example:
    "abababab", 0 => "abababab" (no change as no iterations!)
    "abababab", 1 => "bbbbaaaa"
    "abababab", 2 => "bbaabbaa"
    
*/

function encrypt(text, n) {
    if (n <= 0) {
        return text
    }
    text = text.split("")
    console.log("original text: " + text.join("") + "n: " + n)
    var encrypted1 = ``

    while (n > 0) {
        for (let i = 1; i < text.length; i+=2) {
            encrypted1+=text[i]  
        }
        for (let j = 0; j < text.length; j+=2) {
            encrypted1=text[j]
            
        }
        text = encrypted1
        n--
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

}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.encrypt = encrypt
window.solutions.decrypt = decrypt