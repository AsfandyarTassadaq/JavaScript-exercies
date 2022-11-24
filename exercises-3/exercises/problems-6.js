/*
    Write a function which will reverse the vowels in a string.
    Any characters which are not vowels should remain in their original position,
    i.e. only swap pairs of vowels - but they may not be at matching indexes!

    For example:
    "Tomatoes" => "Temotaos"
*/

function reverseVowels(reverseMe) {
    var vowelString = reverseMe.match(/[aeiouAEIOU]/gi)
    vowelString.reverse()
    // console.log(reverseMe)
    // console.log(vowelString)
    var res = []
    for (let i = 0; i < reverseMe.length; i++) {
        if (reverseMe[i].match(/[aeiouAEIOU]/)) {
            res.push(vowelString.shift())
        }
        else res.push(reverseMe[i])

    }
    return res.join("")
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.reverseVowels = reverseVowels