const player = document.getElementById("player");
const boss = document.getElementById("boss");
const startGameBtn = document.getElementById("start-game-btn");
let gameState = 0;
let text = ""

function playGame() {
    console.log("playGame function is working");
    console.log(gameState);
    contentCreator();
    boss.appendChild(content);
    gameState++;
    contentCreator();
    player.appendChild(content);


}

function turnOn() {
    gameState = 0;
    startGameBtn.classList.add("hide");
    player.classList.remove("hide");
    boss.classList.remove("hide");
    gameState++;
    playGame();
}


function contentCreator() {
    if (gameState == 0) {
        text = "";

    } else if (gameState == 1) {
        text = "Hello and welcome to the interview.";

    } else if (gameState == 2) {
        text = "Hello Thank you great to be here deekheadfam";
    } else if (gameState == 3) {
        text = "gs3";
    } else if (gameState == 4) {
        text = "gs4";
    }
    content = document.createTextNode(text);
    return;
}