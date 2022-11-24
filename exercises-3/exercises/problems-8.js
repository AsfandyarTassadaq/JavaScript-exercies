/*
    You will be given a sequence of letters.
    When an uppercase and lowercase of the same letter touch, they destroy each other.
    After they have been removed, the process continues until there are no more letters reacting

    For example:
    "xYyZZX" => "xZZX"
    "aBbA" => ""
*/

function react(sequence) {
    sequence = sequence.split("")
    // console.log(sequence)
    let contd = true
    while (contd) {
        contd = false //avoid infinite loop
        if (sequence.length == 0) {
            contd = false
            break
        }
        for (let i = 0; i < sequence.length - 1; i++) {
            if (sequence[i].toUpperCase() === sequence[i + 1].toUpperCase()) {
                if (sequence[i] !== sequence[i + 1]) {
                    contd = true
                    sequence.splice(i, 2)
                    break
                }
            }

        }
    }
    return sequence.join("")
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.react = react