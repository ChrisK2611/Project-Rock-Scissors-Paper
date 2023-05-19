// ======= Rundenzähler
const roundsDisplay = document.querySelector(".rounds-counter");
const roundsPlayed = document.querySelector(".rounds-played");
const roundsTotal = document.querySelector(".rounds-total");
const roundSelect = document.querySelector(".rounds");

// ======= Spielstand-Anzeige
const userScore = document.querySelector(".user-score");
const comScore = document.querySelector(".com-score");

// ======= Anzeige wer gewonnen und verloren hat
const whoWonwhoLost = document.querySelector(".win-or-lose");

// ======= Inputfelder auslesen 
const playButtons = document.querySelector(".click-area");

// ======= Spielstand auf 0 setzen 
let scoreUser = 0;
let scoreCom = 0;

// ======= Runden-Counter auf 0 setzen
let playedRounds = 0;

// ======= Was hat der Computer gewählt?
let choiceCom = "";

// ======= Auswahl für Computer
const computersChoice = () => {
    let randomNumber = Number(Math.round(Math.random() * 2 + 1));

    if (randomNumber === 1){
        choiceCom = "Rock";
    } else if (randomNumber === 2){
        choiceCom = "Scissor";
    } else {
        choiceCom = "Paper";
    }

    
    
};

// ======= Hauptfunktion zum starten 
const startTheGame = (elm) => {
    computersChoice();

    const roundNumbers = Number(document.querySelector('input[name="howManyRounds"]:checked').value);

    // ======= ausgewählte Runden werden angezeigt
    roundsTotal.innerHTML = roundNumbers;
    roundSelect.classList.add("display-none");
    roundsDisplay.classList.add("display-block"); 

    // ======= Jede gespielte Runde wird addiert und im HTML hinzugefügt
    playedRounds++;
    roundsPlayed.innerHTML = playedRounds;

    // ======= Hier schauen wir, wer gewonnen und verloren hat/ Punkte werden vergeben
    if (
        (elm == "Scissor" && choiceCom == "Paper") ||
        (elm == "Rock" && choiceCom == "Scissor") ||
        (elm == "Paper" && choiceCom == "Rock")
    ) {
        scoreUser++;
        whoWonwhoLost.innerHTML = "Yes you Won!!"; 
    } else if (elm == choiceCom) {
        scoreUser++;
        scoreCom++;
        whoWonwhoLost.innerHTML = "It's a tie";
    } else {
        scoreCom++;
        whoWonwhoLost.innerHTML = "Sorry Computer won";
    }

    // ======= Spielstand wird ins HTML geschrieben
    userScore.innerHTML = scoreUser;
    comScore.innerHTML = scoreCom;

    // ======= Wann ist Schluss?
    if (playedRounds === roundNumbers){
        if (scoreUser === scoreCom) {
            whoWonwhoLost.innerHTML = `Nobody won....!`;
        } else if (scoreUser > scoreCom) {
            whoWonwhoLost.innerHTML = `YES U did it!! Wooohooo!!`;
        } else {
            whoWonwhoLost.innerHTML = `Haha nice try!! Wanna play again? `;
        }
        gameOver();
    }

};

// ======= Game Over Funktion
const gameOver = () => {
    playedRounds = 0;
    playButtons.classList.add("display-none");
};





