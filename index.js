let player1score = 0;
let player2score = 0;
let draws = 0;

function random() {
    let player1Choice = Math.floor(Math.random() * 3); 
    let player2Choice = Math.floor(Math.random() * 3);

    if (player1Choice == 0) {
        document.getElementById("canvas1-img").src = "./img/paper.jpeg";
    } else if (player1Choice == 1) {
        document.getElementById("canvas1-img").src = "./img/226-2260873_transparent-rock-paper-scissors-png-png-download.png";
    } else {
        document.getElementById("canvas1-img").src = "img/images (1).png";
    }

    if (player2Choice == 0) {
        document.getElementById("canvas2-img").src = "./img/paper.jpeg";
    } else if (player2Choice == 1) {
        document.getElementById("canvas2-img").src = "./img/226-2260873_transparent-rock-paper-scissors-png-png-download.png";
    } else {
        document.getElementById("canvas2-img").src = "img/images (1).png";
    }

    let result;
    if (player1Choice === player2Choice) {
        result = "It's a tie!";

    } else if (
        (player1Choice === 0 && player2Choice === 1) ||  
        (player1Choice === 1 && player2Choice === 2) ||  
        (player1Choice === 2 && player2Choice === 0)     
    ) {
        result = "Player 1 wins this round!";
        player1score++;  
        draws++;  
    } else {
        result = "Player 2 wins this round!";
        player2score++;
        draws++;  
    }

    document.getElementById("player1score").textContent = 'Score: ' + player1score;
    document.getElementById("player2score").textContent = 'Score: ' + player2score;
    document.getElementById("score").textContent = result;

    if (player1score === 3 || player2score === 3 || draws === 3) {
        let finalResult = '';
        if (player1score === 3) {
            finalResult = "Player 1 wins the game!";
        } else if (player2score === 3) {
            finalResult = "Player 2 wins the game!";
        } else {
            finalResult = "Game ended with 3 draws!";
        }

        document.getElementById("score").textContent = finalResult;

        setTimeout(resetGame, 5000); 
    }
}

function resetGame() {
    player1score = 0;
    player2score = 0;
    draws = 0;
    document.getElementById("player1score").textContent = 'Score: ' + player1score;
    document.getElementById("player2score").textContent = 'Score: ' + player2score;
    document.getElementById("score").textContent = "Score:";
}
