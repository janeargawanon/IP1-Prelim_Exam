function random() {
    let player1Choice = Math.floor(Math.random() * 3); 
    let player2Choice = Math.floor(Math.random() * 3);

    if (player1Choice == 0) {
        document.getElementById("canvas1-img").src = "./img/paper.jpeg";
    } else if (player1Choice == 1) {
        document.getElementById("canvas1-img").src = "./img/226-2260873_transparent-rock-paper-scissors-png-png-download.png";
    } else {
        document.getElementById("canvas1-img").src = "./img/lovepik-scissors-png-image_401704653_wh1200.png";
    }

    if (player2Choice == 0) {
        document.getElementById("canvas2-img").src = "./img/paper.jpeg";
    } else if (player2Choice == 1) {
        document.getElementById("canvas2-img").src = "./img/226-2260873_transparent-rock-paper-scissors-png-png-download.png";
    } else {
        document.getElementById("canvas2-img").src = "./img/lovepik-scissors-png-image_401704653_wh1200.png";
    }

    let result;
    if (player1Choice === player2Choice) {
        result = "It's a tie!";
    } else if (
        (player1Choice === 0 && player2Choice === 1) ||  
        (player1Choice === 1 && player2Choice === 2) || 
        (player1Choice === 2 && player2Choice === 0)     
    ) {
        result = "Player 1 wins!";
    } else {
        result = "Player 2 wins!";
    }

    document.getElementById("score").textContent = 'Score: ' + result;
}

