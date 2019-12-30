const player = document.getElementById("player");
const boss = document.getElementById("boss");
const startGameBtn = document.getElementById("start-game-btn");
let bossState = 0;
let playerState = 0;
let text = ""

const questions = {
    name: "What is your name?",
    age: "How old are you?",
    fave_lang: "What is your favourite programming language?"
};


const responses = {
    name: "My name is Rory Lindsay",
    age: "I am 24 years old.",
    fave_lang: "I would say my favorite language at the moment is Python"
}


// Turns on the Game
function turnOn() {
    startGameBtn.classList.add("hide");
    player.classList.remove("hide");
    boss.classList.remove("hide");

}


function bossButton() {
    console.log("Hello")
    bossControl();
    boss.appendChild(content);
}

function playerButton() {
    console.log("Hello")
    playerControl();
    player.appendChild(content);
    bossState++;
    playerState++;
}

function speech() {
    content = document.createTextNode(text);
    return;
}

function bossControl() {
    if (bossState == 0) {
        text = questions.name;
        speech();


    } else if (bossState == 1) {
        text = questions.age;
        speech();


    } else {
        text = questions.fave_lang;
        speech();

    }
}

function playerControl() {
    if (playerState == 0) {
        text = responses.name;
        speech();


    } else if (playerState == 1) {
        text = responses.age;
        speech();


    } else {
        text = responses.fave_lang;
        speech();
    }
}