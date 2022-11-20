const gameOver = () => {
    // show the game over screen
    const gameOverText = document.querySelector(".gameOverText");

    gameOverText.textContent = "You won!"
    
    // Formulating an approach for environment management is these 20+ environments in a logical way so that it reduces confusion among team members. Resulting in 
    // Defects and bug resolution -> shows problem solver
    // configuration for demos to sell products
}

const checkWinner = (allSpaces, currentTurn, player, computer) => {
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
            gameOver();
        }
    })

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
            if (this.dataset.space !== computer || this.dataset.space !== player) {
                this.textContent = player;
                checkWinner(allSpaces)
            }
        })
    })
}

const decideTurn = (allSpaces, currentTurn, player, computer) => {

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
        if (currentTurn === "player") {
            console.log(currentTurn)
            playerTurn(allSpaces, player, computer);
        } else if (currentTurn === "computer") {
            console.log(currentTurn)
            // computerTurn(allSpaces, currentTurn, computer);
        }
    } else {
        console.log("returned");
        return;
    }
}

const setupBoard = (allSpaces) => {
    for (let i = 0; i < allSpaces.length; i++) {
        allSpaces[i].textContent = "";
    }
}

const init = () => {
    const allSpaces = document.querySelectorAll(".space");
    let player = "X";
    let computer = "X"
    
    setupBoard(allSpaces);
    decideTurn(allSpaces, "player", player, computer);
    // checkWinner(allSpaces)
}

init()