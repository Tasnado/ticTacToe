const gameOver = () => {
    // show the game over screen
}

const checkWinner = (allSpaces) => {
    const winningCombos = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 6, 9], [3, 5, 7], [4, 5, 6], [7, 8, 9]];
    const placeholderVariable = "X";
    let winningCount = 0;

    // check is any of the spaces match the winning combinations
    winningCombos.forEach(combo => {
        if (winningCount === 0) {
            combo.forEach(currentCombo => {
                if (allSpaces[currentCombo - 1].textContent === placeholderVariable) {
                    winningCount++
                } else if (allSpaces[currentCombo - 1].textContent !== placeholderVariable) {
                    winningCount = 0;
                    return;
                }
                // console.log(currentCombo)
            })
        } else if (winningCount === 3) {
            return;
        }
    })

}

const decideTurn = (currentTurn) => {
    const player = "X";
    const computer = "O";

    // Check if the spaces are all filled out
    let emptySpaces = 9;
    for (let i = 0; i < allSpaces.length; i++) {
        // check if all spaces a filled out
        if (allSpaces[i] !== "") {
            emptySpaces - 1;
        }
    }

    // End game if all the spaces are filled out
    if (emptySpaces !== 0) {
        
    } else {
        return;
    }
}

const computerTurn = (allSpaces, computer) => {
    let computerChoice;

    do {
        computerChoice = Math.floor((Math.random() * 8) + 1);
        console.log(computerChoice);
    } while (allSpaces[computerChoice].textContent != "");

    allSpaces[computerChoice].textContent = computer;
    checkWinner(allSpaces);
}

const playerTurn = (allSpaces, player, computer) => {
    allSpaces.forEach((space) => {
        space.addEventListener('click', function() {
            if (this.dataset.space !== computer) {
                this.textContent = player;
                checkWinner(allSpaces)
            }
        })
    })
}

const setupBoard = (allSpaces) => {
    for (let i = 0; i < allSpaces.length; i++) {
        allSpaces[i].textContent = "";
    }
}

const init = () => {
    const allSpaces = document.querySelectorAll(".space");
    
    // setupBoard(allSpaces);
    // decideTurn(allSpaces)
    checkWinner(allSpaces)
}

init()