// Make your changes to store and update game state in this file
var board = [[null, null, null], [null, null, null], [null, null, null]]
var nought = "nought"
var cross = "cross"
var counter = 0
var win = false
// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    if (win) {
        return
    }
    if (counter % 2 == 0) {
        if (board[row][column] == null) {
            board[row][column] = nought
            counter++
        }
    } else (
        moveAI()
    )

    function moveAI() {
        var rowAI = Math.floor(Math.random() * (2 - 0 + 1) + 0)
        var colAI = Math.floor(Math.random() * (2 - 0 + 1) + 0)
        if (board[rowAI][colAI] !== null) {
            moveAI()
        } else {
            board[rowAI][colAI] = cross;
            counter++
        }
    }
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    if (counter <= 1) {
        return null
    }


    for (let i = 0; i < 3; i++) {
        if ((board[i][0] === board[i][1]) && (board[i][1] === board[i][2])) {
            if (board[i][0] == null || board[i][1] == null || board[i][2] == null) continue
            win = true
            return board[i][0] == nought ? "noughts" : "crosses"
        }
    }
    for (let i = 0; i < 3; i++) {
        if ((board[0][i] === board[1][i]) && (board[1][i] === board[2][i])) {
            if (board[0][i] == null || board[1][i] == null || board[2][i] == null) continue
            win = true
            return board[i][0] == nought ? "noughts" : "crosses"
        }
    }
    if ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && board[0][0] !== null) {
        win = true
        return board[0][0] == nought ? "noughts" : "crosses"
    }
    if ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && board[0][2] !== null) {
        win = true
        return board[0][0] == nought ? "noughts" : "crosses"
    }

    if (counter == 9) {
        return "nobody"
    }

    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    board = [[null, null, null], [null, null, null], [null, null, null]]
    counter = 0
    win = false
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
